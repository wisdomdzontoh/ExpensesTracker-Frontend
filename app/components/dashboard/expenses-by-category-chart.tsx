"use client"

import React, { useState, useMemo } from "react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import type { Transaction } from "@/types"
import { useFormatter } from "@/lib/formatCurrency"

// Define the allowed period values
type Period = "month" | "year" | "all"

// Options for the period dropdown
const PERIODS: { label: string; value: Period }[] = [
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
  { value: "all", label: "All Time" },
]

// Chart slice colors
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FF6B6B",
  "#6B66FF",
]

interface Props {
  transactions: Transaction[]
}

export function ExpensesByCategoryChart({ transactions }: Props) {
  const [period, setPeriod] = useState<Period>("all")
  const format = useFormatter()

  // Compute chart data whenever transactions or period change
  const data = useMemo(() => {
    const now = new Date()

    // Filter only expenses in the selected period
    const filtered = transactions.filter((tx) => {
      if (tx.transaction_type !== "expense") return false
      const txDate = new Date(tx.date)
      if (period === "month") {
        return (
          txDate.getFullYear() === now.getFullYear() &&
          txDate.getMonth() === now.getMonth()
        )
      }
      if (period === "year") {
        return txDate.getFullYear() === now.getFullYear()
      }
      return true // "all"
    })

    // Aggregate amounts by category name
    const tally: Record<string, number> = {}
    filtered.forEach((tx) => {
      const name = tx.category?.name ?? "Unknown"
      const amt = typeof tx.amount === "string" ? parseFloat(tx.amount) : tx.amount
      tally[name] = (tally[name] ?? 0) + (isNaN(amt) ? 0 : amt)
    })

    return Object.entries(tally).map(([name, value]) => ({ name, value }))
  }, [transactions, period])

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <div>
          <CardTitle>Expenses by Category</CardTitle>
          <CardDescription>Breakdown of your expenses by category</CardDescription>
        </div>
        <Select value={period} onValueChange={(v) => setPeriod(v as Period)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {PERIODS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ percent }) => `${(percent! * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {data.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val: any) => format(Number(val))} />
                <Legend
                  formatter={(value, _, idx) =>
                    `${value} (${format(data[idx].value)})`
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-muted-foreground">No expense data available</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}