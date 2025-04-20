"use client"

import React, { useState, useMemo } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { MonthlySummary } from "@/types"
import { useFormatter } from "@/lib/formatCurrency"

type Period = "6months" | "12months" | "all"

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: "6months", label: "Last 6 Months" },
  { value: "12months", label: "Last 12 Months" },
  { value: "all", label: "All Time" },
]

interface MonthlyReportChartProps {
  data: MonthlySummary[]
}

export function MonthlyReportChart({ data }: MonthlyReportChartProps) {
  const [period, setPeriod] = useState<Period>("12months")
  const format = useFormatter()

  const processedData = useMemo(() => {
    // Aggregate income & expense per month
    const monthly: Record<string, { income: number; expense: number }> = {}

    data.forEach(({ month, transaction_type, total }) => {
      if (!monthly[month]) {
        monthly[month] = { income: 0, expense: 0 }
      }
      if (transaction_type === "income") {
        monthly[month].income += total
      } else {
        monthly[month].expense += total
      }
    })

    // Convert to array with balance and proper label
    let result = Object.entries(monthly).map(([month, vals]) => ({
      name: new Intl.DateTimeFormat(undefined, {
        month: "short",
        year: "2-digit",
      }).format(new Date(month)),
      income: vals.income,
      expense: vals.expense,
      balance: vals.income - vals.expense,
      rawMonth: month,
    }))

    // Sort chronologically
    result.sort(
      (a, b) => new Date(a.rawMonth).getTime() - new Date(b.rawMonth).getTime()
    )

    // Apply period slicing
    if (period === "6months") result = result.slice(-6)
    else if (period === "12months") result = result.slice(-12)

    return result
  }, [data, period])

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={period} onValueChange={(v) => setPeriod(v as Period)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            {PERIOD_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="h-[400px]">
        {processedData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={processedData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => format(Number(value))} />
              <Tooltip formatter={(value: any) => format(Number(value))} />
              <Legend />
              <Area
                type="monotone"
                dataKey="income"
                name="Income"
                stackId="1"
                stroke="#4ade80"
                fill="#4ade80"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="expense"
                name="Expense"
                stackId="2"
                stroke="#f87171"
                fill="#f87171"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="balance"
                name="Balance"
                stackId="3"
                stroke="#60a5fa"
                fill="#60a5fa"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              No monthly data available
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
