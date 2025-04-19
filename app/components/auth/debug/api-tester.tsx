"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApiTester() {
  const [endpoint, setEndpoint] = useState("/token/")
  const [method, setMethod] = useState("POST")
  const [payload, setPayload] = useState('{\n  "username": "test",\n  "password": "password123"\n}')
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [jwtToken, setJwtToken] = useState("")
  const [decodedToken, setDecodedToken] = useState("")

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

  const handleTest = async () => {
    setLoading(true)
    setResponse("")

    try {
      const url = `${API_URL}${endpoint}`
      console.log(`Making ${method} request to: ${url}`)

      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      }

      if (method !== "GET" && payload) {
        try {
          options.body = payload
        } catch (e) {
          toast.error("Invalid JSON payload")
          setLoading(false)
          return
        }
      }

      const res = await fetch(url, options)
      const data = await res.json()

      setResponse(JSON.stringify(data, null, 2))

      if (res.ok) {
        toast.success("API request successful")
      } else {
        toast.error(`API error: ${res.status}`)
      }
    } catch (error) {
      console.error("API test error:", error)
      setResponse(String(error))
      toast.error("API request failed")
    } finally {
      setLoading(false)
    }
  }

  const decodeJwt = () => {
    try {
      const parts = jwtToken.split(".")
      if (parts.length !== 3) {
        toast.error("Invalid JWT format")
        return
      }

      const base64Url = parts[1]
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      )

      setDecodedToken(JSON.stringify(JSON.parse(jsonPayload), null, 2))
      toast.success("JWT decoded successfully")
    } catch (error) {
      console.error("JWT decode error:", error)
      toast.error("Failed to decode JWT")
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>API Tester</CardTitle>
        <CardDescription>Test your API endpoints and decode JWT tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="api">
          <TabsList className="mb-4">
            <TabsTrigger value="api">API Tester</TabsTrigger>
            <TabsTrigger value="jwt">JWT Decoder</TabsTrigger>
          </TabsList>

          <TabsContent value="api" className="space-y-4">
            <div className="flex gap-2">
              <div className="w-1/4">
                <select
                  className="w-full p-2 border rounded"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Endpoint (e.g., /token/)"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                />
              </div>
            </div>

            <div>
              <textarea
                className="w-full h-32 p-2 font-mono text-sm border rounded"
                placeholder="Request payload (JSON)"
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
              />
            </div>

            <div>
              <pre className="w-full h-64 p-2 overflow-auto font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded">
                {response || "Response will appear here..."}
              </pre>
            </div>

            <Button onClick={handleTest} disabled={loading} className="ml-auto">
              {loading ? "Testing..." : "Test Endpoint"}
            </Button>
          </TabsContent>

          <TabsContent value="jwt" className="space-y-4">
            <div>
              <textarea
                className="w-full h-32 p-2 font-mono text-sm border rounded"
                placeholder="Paste JWT token here"
                value={jwtToken}
                onChange={(e) => setJwtToken(e.target.value)}
              />
            </div>

            <Button onClick={decodeJwt} disabled={!jwtToken}>
              Decode Token
            </Button>

            <div>
              <pre className="w-full h-64 p-2 overflow-auto font-mono text-sm bg-gray-100 dark:bg-gray-800 rounded">
                {decodedToken || "Decoded token will appear here..."}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
