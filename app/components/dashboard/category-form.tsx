"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createCategory } from "@/lib/api"

// Zod schema for category
const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
})

type CategoryFormValues = z.infer<typeof categorySchema>

interface CategoryFormProps {
  onCategoryAdded: () => void
}

export function CategoryForm({ onCategoryAdded }: CategoryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "" },
  })

  // Handle form submission
  async function onSubmit(values: CategoryFormValues) {
    setIsSubmitting(true)
    try {
      // Pass only the name string to match API signature
      await createCategory(values.name)
      toast.success("Category added successfully")
      form.reset()
      onCategoryAdded()
    } catch (error) {
      console.error("Error adding category:", error)
      toast.error("Failed to add category. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Category</CardTitle>
        <CardDescription>Define a new expense/income category</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Groceries" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Add Category"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
