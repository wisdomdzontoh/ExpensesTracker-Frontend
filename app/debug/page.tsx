import { ApiTester } from "@/app/components/auth/debug/api-tester"

export default function DebugPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Debug Tools</h1>
      <ApiTester />
    </div>
  )
}
