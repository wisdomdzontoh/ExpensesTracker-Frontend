"use client"

import { useState } from "react"
import { Download, FileJson, FileText, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { exportUserData } from "@/lib/api"

type ExportFormat = "json" | "csv"

export function ExportData() {
  const [format, setFormat] = useState<ExportFormat>("json")
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      const payload = await exportUserData(format)
      const mime = format === "json" ? "application/json" : "text/csv"
      const blob = new Blob(
        [typeof payload === "string" ? payload : JSON.stringify(payload, null, 2)],
        { type: mime }
      )
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `expense-tracker-data.${format}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success(`Data exported as .${format.toUpperCase()}`)
    } catch (err) {
      console.error("Export failed:", err)
      toast.error("Could not export data. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Export Your Data</CardTitle>
        <CardDescription>
          Download all your financial data in your preferred format
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Select Format</h3>
          <RadioGroup
            className="flex space-x-4"
            value={format}
            onValueChange={(v: ExportFormat) => setFormat(v)}
          >
            <Label className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="json" id="export-json" />
              <FileJson className="h-5 w-5 text-blue-500" />
              <span>JSON</span>
            </Label>
            <Label className="flex items-center space-x-2 cursor-pointer">
              <RadioGroupItem value="csv" id="export-csv" />
              <FileText className="h-5 w-5 text-green-500" />
              <span>CSV</span>
            </Label>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">What’s Included</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>All your transactions and details</li>
            <li>Your custom categories</li>
            <li>Budget settings</li>
            <li>Account info (password excluded)</li>
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleExport}
          disabled={isExporting}
          className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700"
        >
          {isExporting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </>
          )}
        </Button>
      </CardFooter>
    </>
  )
}
