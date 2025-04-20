// lib/api.ts

import type { DashboardData, Transaction, Category, UserProfile } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "")  
  ?? "http://localhost:8000/api"

/** Retrieve stored access token (or null if not set) */
function getAuthToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("accessToken")
}

/** Perform a fetch with JSON headers + Bearer auth if available */
async function authFetch(input: string, init: RequestInit = {}) {
  const token = getAuthToken()
  const headers: Record<string,string> = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string,string>),
  }
  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(input, { ...init, headers })
  if (!res.ok) {
    let errDetail: string
    try {
      const json = await res.json()
      errDetail = json.detail ?? JSON.stringify(json)
    } catch {
      errDetail = res.statusText
    }
    throw new Error(errDetail)
  }
  return res
}

/** Parse JSON response */
async function parseJson<T>(res: Response): Promise<T> {
  return res.json()
}

/** Fetch JSON or text based on expected return type */
async function parseMaybeText(res: Response, asJson: boolean) {
  return asJson ? res.json() : res.text()
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export async function fetchDashboardData(): Promise<DashboardData> {
  const res = await authFetch(`${API_URL}/dashboard/`)
  return parseJson<DashboardData>(res)
}

// ─── Transactions ────────────────────────────────────────────────────────────

interface TransactionFilters {
  month?: number
  year?: number
  transaction_type?: string
  category?: number
}

/** DTO for `POST /transactions/` */
export interface CreateTransactionDto {
  amount: number
  transaction_type: "income" | "expense"
  category_id: number
  description?: string
  date: string
}

export async function fetchTransactions(
  filters: TransactionFilters = {}
): Promise<Transaction[]> {
  const params = new URLSearchParams()
  Object.entries(filters).forEach(([k, v]) => {
    if (v != null) params.set(k, String(v))
  })
  const url = `${API_URL}/transactions/${params.toString() ? `?${params}` : ""}`
  const res = await authFetch(url)
  return parseJson<Transaction[]>(res)
}

export async function createTransaction(
  data: CreateTransactionDto
): Promise<Transaction> {
  const token = getAuthToken()
  const res = await fetch(`${API_URL}/transactions/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return handleResponse(res)
}

export async function updateTransaction(
  id: number,
  data: Partial<Transaction>
): Promise<Transaction> {
  const res = await authFetch(`${API_URL}/transactions/${id}/`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
  return parseJson<Transaction>(res)
}

export async function deleteTransaction(id: number): Promise<void> {
  await authFetch(`${API_URL}/transactions/${id}/`, {
    method: "DELETE",
  })
}

// ─── Categories ──────────────────────────────────────────────────────────────

export async function fetchCategories(): Promise<Category[]> {
  const res = await authFetch(`${API_URL}/categories/`)
  return parseJson<Category[]>(res)
}

export async function createCategory(
  name: string
): Promise<Category> {
  const res = await authFetch(`${API_URL}/categories/`, {
    method: "POST",
    body: JSON.stringify({ name }),
  })
  return parseJson<Category>(res)
}

// ─── Reports ─────────────────────────────────────────────────────────────────

export async function fetchReportData(): Promise<any> {
  const res = await authFetch(`${API_URL}/reports/`)
  return parseJson<any>(res)
}

// ─── User Profile ───────────────────────────────────────────────────────────

export async function getUserProfile(): Promise<UserProfile> {
  const res = await authFetch(`${API_URL}/auth/me/`)
  return parseJson<UserProfile>(res)
}

export async function updateUserProfile(
  data: Partial<UserProfile>
): Promise<UserProfile> {
  const res = await authFetch(`${API_URL}/auth/me/`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return parseJson<UserProfile>(res)
}

// ─── Password & Account ──────────────────────────────────────────────────────

export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  await authFetch(`${API_URL}/auth/change-password/`, {
    method: "POST",
    body: JSON.stringify({
      current_password: currentPassword,
      new_password: newPassword,
    }),
  })
}

export async function deleteAccount(): Promise<void> {
  await authFetch(`${API_URL}/auth/me/`, {
    method: "DELETE",
  })
}

// ─── Data Export ─────────────────────────────────────────────────────────────

export async function exportUserData(
  format: "json" | "csv" = "json"
): Promise<object | string> {
  const url = new URL(`${API_URL}/auth/export-data/`)

  const res = await authFetch(url.toString())
  return parseMaybeText(res, format === "json")
}
async function handleResponse(res: Response): Promise<Transaction> {
  if (!res.ok) {
    let errDetail: string
    try {
      const json = await res.json()
      errDetail = json.detail ?? JSON.stringify(json)
    } catch {
      errDetail = res.statusText
    }
    throw new Error(errDetail)
  }
  return res.json()
}

