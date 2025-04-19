// app/lib/formatCurrency.ts
import { useCurrency } from "@/app/context/CurrencyContext"

export function useFormatter() {
  const { currency } = useCurrency()
  // Optionally derive locale from currency, or store both in context
  const locale = currency === "GHS" ? "en-GH" : "en-US"
  return (value: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value)
}
