// app/context/CurrencyContext.tsx
"use client"

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react"

type Currency = "USD" | "EUR" | "GHS" | "GBP" | string

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD")

  // (Optional) persist in localStorage:
  useEffect(() => {
    const saved = localStorage.getItem("currency")
    if (saved) setCurrency(saved)
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
