"use client"

import React, { useState, useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import type { Transaction } from "@/types"
import { useFormatter } from "@/lib/formatCurrency"

// Allowed period values
type Period = "3months" | "6months" | "year"

// Dropdown options
const PERIOD_OPTIONS: { label: string; value: Period }[] = [
  { value: "3months", label: "3 Months" },
  { value: "6months", label: "6 Months" },
  { value: "year", label: "1 Year" },
]

interface MonthlyTrendChartProps {
  transactions: Transaction[]
}

export function MonthlyTrendChart({ transactions }: MonthlyTrendChartProps) {
  const [period, setPeriod] = useState<Period>("6months")
  const format = useFormatter()

  // Compute chart data on transactions or period change
  const data = useMemo(() => {
    const now = new Date()
    const start = new Date(now)

    switch (period) {
      case "3months":
        start.setMonth(now.getMonth() - 2)
        break
      case "6months":
        start.setMonth(now.getMonth() - 5)
        break
      case "year":
        start.setFullYear(now.getFullYear() - 1)
        break
    }
    start.setDate(1)
    start.setHours(0, 0, 0, 0)

    // Prepare month buckets
    const buckets: { name: string; date: Date }[] = []
    const cursor = new Date(start)
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    while (cursor <= end) {
      buckets.push({
        date: new Date(cursor),
        name: new Intl.DateTimeFormat(undefined, { month: 'short', year: '2-digit' }).format(cursor),
      })
      cursor.setMonth(cursor.getMonth() + 1)
    }

    // Aggregate
    return buckets.map(({ name, date }) => {
      const month = date.getMonth()
      const year = date.getFullYear()
      const txs = transactions.filter((t) => {
        const d = new Date(t.date)
        return d.getMonth() === month && d.getFullYear() === year
      })
      const income = txs.filter(t => t.transaction_type === 'income').reduce((s, t) => s + Number(t.amount), 0)
      const expense = txs.filter(t => t.transaction_type === 'expense').reduce((s, t) => s + Number(t.amount), 0)
      return { name, income, expense, balance: income - expense }
    })
  }, [transactions, period])

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <div>
          <CardTitle>Monthly Trend</CardTitle>
          <CardDescription>Income vs Expenses over time</CardDescription>
        </div>
        <Select value={period} onValueChange={(value) => setPeriod(value as Period)}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent>
            {PERIOD_OPTIONS.map(opt => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={value => format(Number(value))} />
              <Tooltip formatter={(value: any) => format(Number(value))} />
              <Legend />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#4ade80"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#f87171"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#60a5fa"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
