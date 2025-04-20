// Dashboard data types
export interface DashboardData {
  total_income: number
  total_expense: number
  balance: number
  monthly_income: number
  monthly_expense: number
}

// Category type
export interface Category {
  id: number
  name: string
  user: number
}

// Transaction type
export interface Transaction {
  id: number
  user: number
  category: Category
  amount: number
  transaction_type: "income" | "expense"
  description: string
  date: string
}

// Report data types
export interface CategorySummary {
  category__name: string
  transaction_type: string
  total: number
}

export interface MonthlySummary {
  month: string
  transaction_type: string
  total: number
}

export interface ReportData {
  category_summary: CategorySummary[]
  monthly_summary: MonthlySummary[]
}

// User profile type
export interface UserProfile {
  id: number
  username: string
  email: string
  full_name?: string
  phone_number?: string
  bio?: string
  avatar_url?: string
  date_joined: string
  last_login?: string
}
