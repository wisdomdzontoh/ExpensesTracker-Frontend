"use client"

import React, { useState, useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useFormatter } from "@/lib/formatCurrency"
import type { CategorySummary } from "@/types"

interface CategoryReportChartProps {
  data: CategorySummary[]
}

export function CategoryReportChart({ data }: CategoryReportChartProps) {
  const [transactionType, setTransactionType] = useState<"income" | "expense">("expense")
  const format = useFormatter()

  // Memoize filtered and sorted data
  const chartData = useMemo(() => {
    const filtered = data.filter((item) => item.transaction_type === transactionType)
    const sorted = [...filtered].sort((a, b) => b.total - a.total)
    return sorted.slice(0, 10).map((item) => ({
      name: item.category__name,
      amount: item.total,
    }))
  }, [data, transactionType])

  const getChartColor = () =>
    transactionType === "income" ? "#4ade80" : "#f87171"

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={transactionType} onValueChange={(v) => setTransactionType(v as any)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Transaction Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="income">Income</SelectItem>
            <SelectItem value="expense">Expense</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[400px]">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                tickFormatter={(value) => format(Number(value))}
              />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip
                formatter={(value: any) => format(Number(value))}
              />
              <Legend />
              <Bar
                dataKey="amount"
                name={transactionType === "income" ? "Income" : "Expense"}
                fill={getChartColor()}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              No data available for the selected transaction type
            </p>
          </div>
        )}
      </div>
    </div>
  )
}