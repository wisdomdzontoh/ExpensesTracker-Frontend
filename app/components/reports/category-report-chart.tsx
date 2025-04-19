"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { CategorySummary } from "@/types"

interface CategoryReportChartProps {
  data: CategorySummary[]
}

export function CategoryReportChart({ data }: CategoryReportChartProps) {
  const [transactionType, setTransactionType] = useState<string>("expense")

  // Filter data by transaction type
  const filteredData = data.filter((item) => item.transaction_type === transactionType)

  // Sort data by total amount (descending)
  const sortedData = [...filteredData].sort((a, b) => b.total - a.total)

  // Take top 10 categories
  const chartData = sortedData.slice(0, 10).map((item) => ({
    name: item.category__name,
    amount: item.total,
  }))

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getChartColor = () => {
    return transactionType === "income" ? "#4ade80" : "#f87171"
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={transactionType} onValueChange={setTransactionType}>
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
              margin={{
                top: 20,
                right: 30,
                left: 100,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `$${value}`} />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend />
              <Bar dataKey="amount" name={transactionType === "income" ? "Income" : "Expense"} fill={getChartColor()} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">No data available for the selected transaction type</p>
          </div>
        )}
      </div>
    </div>
  )
}
