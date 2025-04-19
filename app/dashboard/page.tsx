"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/app/components/dashboard/dashboard-header"
import { DashboardCards } from "@/app/components/dashboard/dashboard-cards"
import { RecentTransactions } from "@/app/components/dashboard/recent-transactions"
import { ExpensesByCategoryChart } from "@/app/components/dashboard/expenses-by-category-chart"
import { MonthlyTrendChart } from "@/app/components/dashboard/monthly-trend-chart"
import { TransactionForm } from "@/app/components/dashboard/transaction-form"
import { CategoryForm } from "@/app/components/dashboard/category-form"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {
  fetchDashboardData,
  fetchTransactions,
  fetchCategories,
} from "@/lib/api"
import type { Transaction, Category, DashboardData } from "@/types"

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // load all initial data
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setIsLoading(true)

        const [dash, txs, cats] = await Promise.all([
          fetchDashboardData(),
          fetchTransactions(),
          fetchCategories(),
        ])

        setDashboardData(dash)
        setTransactions(txs)
        setCategories(cats)
      } catch (err) {
        console.error("Error loading dashboard data:", err)
        setError("Failed to load dashboard data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  // refresh after adding a transaction
  const handleTransactionAdded = async () => {
    try {
      const [dash, txs] = await Promise.all([
        fetchDashboardData(),
        fetchTransactions(),
      ])
      setDashboardData(dash)
      setTransactions(txs)
    } catch (err) {
      console.error("Error refreshing transactions:", err)
    }
  }

  // refresh category list after adding a new category
  const handleCategoryAdded = async () => {
    try {
      const cats = await fetchCategories()
      setCategories(cats)
    } catch (err) {
      console.error("Error refreshing categories:", err)
    }
  }

  if (isLoading) {
    return <DashboardSkeleton />
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <DashboardHeader />

      {dashboardData && <DashboardCards data={dashboardData} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpensesByCategoryChart transactions={transactions} />
        <MonthlyTrendChart transactions={transactions} />
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">
            Recent Transactions
          </TabsTrigger>
          <TabsTrigger value="add-tx">Add Transaction</TabsTrigger>
          <TabsTrigger value="add-cat">Add Category</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-6">
          <RecentTransactions transactions={transactions} />
        </TabsContent>

        <TabsContent value="add-tx" className="mt-6">
          <TransactionForm
            categories={categories}
            onTransactionAdded={handleTransactionAdded}
          />
        </TabsContent>

        <TabsContent value="add-cat" className="mt-6">
          <CategoryForm onCategoryAdded={handleCategoryAdded} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-[300px] w-full rounded-xl" />
        <Skeleton className="h-[300px] w-full rounded-xl" />
      </div>

      <Skeleton className="h-[400px] w-full rounded-xl" />
    </div>
  )
}
