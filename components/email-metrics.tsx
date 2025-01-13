"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Insights } from "./insights"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface EmailData {
  month: string
  subscribers: number
}

export default function EmailMetrics() {
  const [data, setData] = useState<EmailData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/email-metrics');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching email metrics:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading email metrics...</div>;
  }

  if (error) {
    return <div>Error loading email metrics: {error}</div>;
  }

  const latestSubscribers = data[data.length - 1]?.subscribers || 0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Subscribers (Brevo)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestSubscribers}</div>
          <p className="text-xs text-muted-foreground">Total Subscribers</p>
          <ChartContainer
            config={{
              subscribers: {
                label: "Subscribers",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="subscribers"
                  stroke="var(--color-subscribers)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Insights
        trend="Steady increase in subscribers over the past 6 months."
        interpretation="Our email marketing efforts are effectively growing our audience."
        action="Continue current strategies and explore new content types to maintain growth."
        triggerEvent="Launch of new product line in March led to a spike in subscriptions."
        responsible="Marketing team, specifically the email marketing manager."
      />
    </div>
  )
}

