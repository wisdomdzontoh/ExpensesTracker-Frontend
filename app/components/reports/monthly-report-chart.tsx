"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { MonthlySummary } from "@/types"

interface MonthlyReportChartProps {
  data: MonthlySummary[]
}

export function MonthlyReportChart({ data }: MonthlyReportChartProps) {
  const [period, setPeriod] = useState<string>("12months")

  // Process data for chart
  const processedData = processMonthlyData(data, period)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="12months">Last 12 Months</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[400px]">
        {processedData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={processedData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
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
            <p className="text-muted-foreground">No monthly data available</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Helper function to process monthly data
function processMonthlyData(data: MonthlySummary[], period: string): any[] {
  // Group data by month
  const monthlyData: Record<string, { income: number; expense: number }> = {}

  data.forEach((item) => {
    const monthKey = item.month

    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = { income: 0, expense: 0 }
    }

    if (item.transaction_type === "income") {
      monthlyData[monthKey].income += item.total
    } else if (item.transaction_type === "expense") {
      monthlyData[monthKey].expense += item.total
    }
  })

  // Convert to array and calculate balance
  let result = Object.entries(monthlyData).map(([month, values]) => ({
    name: formatMonthLabel(month),
    income: values.income,
    expense: values.expense,
    balance: values.income - values.expense,
    rawMonth: month, // Keep original date for sorting
  }))

  // Sort by date
  result.sort((a, b) => new Date(a.rawMonth).getTime() - new Date(b.rawMonth).getTime())

  // Limit data based on selected period
  if (period === "6months") {
    result = result.slice(-6)
  } else if (period === "12months") {
    result = result.slice(-12)
  }

  // Remove the rawMonth property before returning
  return result.map(({ rawMonth, ...rest }) => rest)
}

// Helper function to format month label
function formatMonthLabel(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "2-digit" }).format(date)
}
