import type { DashboardData, Transaction, Category } from "@/types"

// Base API URL - replace with your actual API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

// Helper function to handle API responses
async function handleResponse(response: Response) {
  if (!response.ok) {
    const error = await response.json().catch(() => null)
    throw new Error(error?.detail || `API error: ${response.status}`)
  }
  return response.json()
}

// Get auth token from localStorage (you'll need to implement your auth context)
function getAuthToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken")
  }
  return null
}

// Fetch dashboard summary data
export async function fetchDashboardData(): Promise<DashboardData> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/dashboard/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
}

// Fetch transactions with optional filters
export async function fetchTransactions(filters?: {
  month?: number
  year?: number
  transaction_type?: string
  category?: number
}): Promise<Transaction[]> {
  const token = getAuthToken()

  let url = `${API_URL}/transactions/`

  if (filters) {
    const params = new URLSearchParams()
    if (filters.month) params.append("month", filters.month.toString())
    if (filters.year) params.append("year", filters.year.toString())
    if (filters.transaction_type) params.append("transaction_type", filters.transaction_type)
    if (filters.category) params.append("category", filters.category.toString())

    if (params.toString()) {
      url += `?${params.toString()}`
    }
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  return handleResponse(response)
}

// Fetch categories
export async function fetchCategories(): Promise<Category[]> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/categories/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
}

// Create a new transaction
export async function createTransaction(data: any): Promise<Transaction> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/transactions/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

// Create a new category
export async function createCategory(name: string): Promise<Category> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/categories/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
  return handleResponse(response)
}

// Fetch report data
export async function fetchReportData() {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/reports/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return handleResponse(response)
}

// Delete a transaction
export async function deleteTransaction(id: number): Promise<void> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/transactions/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error("Failed to delete transaction")
  }
}

// Update a transaction
export async function updateTransaction(id: number, data: any): Promise<Transaction> {
  const token = getAuthToken()
  const response = await fetch(`${API_URL}/transactions/${id}/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}
