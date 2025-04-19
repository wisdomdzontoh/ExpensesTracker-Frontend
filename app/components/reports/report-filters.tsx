"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, FilterIcon, DownloadIcon } from "lucide-react"
import { format } from "date-fns"

export function ReportFilters() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [reportType, setReportType] = useState("all")

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "MMM yyyy") : "Select month"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setIsCalendarOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select value={reportType} onValueChange={setReportType}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <FilterIcon className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Report type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Transactions</SelectItem>
          <SelectItem value="income">Income Only</SelectItem>
          <SelectItem value="expense">Expenses Only</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" className="w-full sm:w-auto">
        <DownloadIcon className="mr-2 h-4 w-4" />
        Export
      </Button>
    </div>
  )
}
