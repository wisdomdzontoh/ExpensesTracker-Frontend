"use client"

import React from "react"
import { TrendingUp, TrendingDown, Wallet, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DashboardData } from "@/types"
import { useFormatter } from "@/lib/formatCurrency"

interface DashboardCardsProps {
  data: DashboardData
}

export function DashboardCards({ data }: DashboardCardsProps) {
  // Hook into the user's selected currency
  const format = useFormatter()

  const cards = [
    {
      title: "Total Balance",
      value: format(data.balance),
      description: "Your current balance",
      icon: Wallet,
      iconColor: "text-teal-500 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-950/50",
    },
    {
      title: "Total Income",
      value: format(data.total_income),
      description: "All time income",
      icon: TrendingUp,
      iconColor: "text-green-500 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/50",
    },
    {
      title: "Total Expenses",
      value: format(data.total_expense),
      description: "All time expenses",
      icon: TrendingDown,
      iconColor: "text-red-500 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/50",
    },
    {
      title: "Monthly Overview",
      value: format(data.monthly_income - data.monthly_expense),
      description: `Income: ${format(data.monthly_income)} | Expenses: ${format(data.monthly_expense)}`,
      icon: Calendar,
      iconColor: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <div className={`p-2 rounded-full ${card.bgColor}`}>
              <card.icon className={`h-4 w-4 ${card.iconColor}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}