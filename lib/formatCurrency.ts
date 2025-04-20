// app/lib/formatCurrency.ts
import { useCurrency } from "@/app/context/CurrencyContext"

const LOCALE_MAP: Record<string, string> = {
  USD: "en-US",
  EUR: "de-DE",
  GHS: "en-GH",
  GBP: "en-GB",
  JPY: "ja-JP",
  CAD: "en-CA",
  AUD: "en-AU",
  CHF: "de-CH",
  CNY: "zh-CN",
  INR: "en-IN",
}

export function useFormatter() {
  const { currency } = useCurrency()
  const locale = LOCALE_MAP[currency] || undefined
  return (value: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value)
}
