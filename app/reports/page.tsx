"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { fetchReportData } from "@/lib/api"
import type { ReportData } from "@/types"
import { CategoryReportChart } from "@/app/components/reports/category-report-chart"
import { MonthlyReportChart } from "@/app/components/reports/monthly-report-chart"
import { ReportFilters } from "@/app/components/reports/report-filters"

export default function ReportsPage() {
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("category")

  useEffect(() => {
    const loadReportData = async () => {
      try {
        setIsLoading(true)
        const data = await fetchReportData()
        setReportData(data)
        setIsLoading(false)
      } catch (err) {
        console.error("Error loading report data:", err)
        setError("Failed to load report data. Please try again later.")
        setIsLoading(false)
      }
    }

    loadReportData()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
        <Skeleton className="h-[500px] w-full rounded-xl" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Something went wrong</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-muted-foreground">Analyze your income and expenses</p>
        </div>
        <ReportFilters />
      </div>

      <Tabs defaultValue="category" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="category">Category Analysis</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="category" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
              <CardDescription>Breakdown of your expenses across different categories</CardDescription>
            </CardHeader>
            <CardContent>{reportData && <CategoryReportChart data={reportData.category_summary} />}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Financial Trends</CardTitle>
              <CardDescription>Track your income and expenses over time</CardDescription>
            </CardHeader>
            <CardContent>{reportData && <MonthlyReportChart data={reportData.monthly_summary} />}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
