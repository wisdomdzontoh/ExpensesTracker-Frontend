// app/context/CurrencyContext.tsx
"use client"

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

// 1. List all your supported codes here:
export const SUPPORTED_CURRENCIES = [
  "USD",
  "EUR",
  "GHS",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "CNY",
  "INR",
] as const

// 2. Derive your TypeScript type:
export type Currency = typeof SUPPORTED_CURRENCIES[number]

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD")

  // Persist selection
  useEffect(() => {
    const saved = localStorage.getItem("currency") as Currency
    if (SUPPORTED_CURRENCIES.includes(saved)) {
      setCurrency(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("currency", currency)
  }, [currency])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency(): CurrencyContextType {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error("useCurrency must be inside CurrencyProvider")
  return ctx
}
