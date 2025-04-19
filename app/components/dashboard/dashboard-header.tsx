"use client"

import React, { useEffect } from "react"
import { CalendarIcon, DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { useCurrency } from "@/app/context/CurrencyContext"

export function DashboardHeader() {
  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate)

  const { currency, setCurrency } = useCurrency()
  const currencyOptions: string[] = ["USD", "EUR", "GHS", "GBP"]

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            {currencyOptions.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          <DownloadIcon className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  )
}
