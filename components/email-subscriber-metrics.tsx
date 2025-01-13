"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { MetricCard } from "./metric-card"
import { Mail, Users, UserCheck, UserPlus, UserMinus, AlertTriangle } from 'lucide-react'

const quarterlyData = [
  { quarter: "Q1 2024", subscribers: 2000, unsubscribes: 100, growth: 1900 },
  { quarter: "Q2 2024", subscribers: 2300, unsubscribes: 115, growth: 2185 },
  { quarter: "Q3 2024", subscribers: 2600, unsubscribes: 130, growth: 2470 },
  { quarter: "Q4 2024", subscribers: 3000, unsubscribes: 150, growth: 2850 },
]

const trendData = quarterlyData.map(item => ({ value: item.growth }))

export default function EmailSubscriberMetrics() {
  const latestGrowth = quarterlyData[quarterlyData.length - 1].growth - 
                    quarterlyData[quarterlyData.length - 2].growth
  const growthPercentage = (latestGrowth / quarterlyData[quarterlyData.length - 2].growth) * 100
  
  const hardBounces = 261
  const unsubscribesThisQuarter = 21
  const subscribersAddedThisQuarter = 1112
  const currentQuarterSubscribers = quarterlyData[quarterlyData.length - 1].subscribers
  const previousQuarterSubscribers = currentQuarterSubscribers - subscribersAddedThisQuarter
  const activeSubscribers = 5623
  const totalSubscribers = activeSubscribers + hardBounces

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubscribers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              All-time subscriber count
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSubscribers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((activeSubscribers / totalSubscribers) * 100).toFixed(1)}% of total subscribers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New This Quarter</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribersAddedThisQuarter.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((subscribersAddedThisQuarter / previousQuarterSubscribers) * 100).toFixed(1)}% increase from Q3
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unsubscribes</CardTitle>
            <UserMinus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unsubscribesThisQuarter.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((unsubscribesThisQuarter / currentQuarterSubscribers) * 100).toFixed(2)}% of current subscribers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hard Bounces</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{hardBounces.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((hardBounces / totalSubscribers) * 100).toFixed(2)}% of total subscribers
            </p>
          </CardContent>
        </Card>
      </div>

      <MetricCard
        title="Net Subscriber Growth"
        value={latestGrowth}
        change={growthPercentage}
        data={trendData}
        IconLeft={Mail}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Subscriber Growth Trends (Rolling 4 Quarters)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              subscribers: {
                label: "New Subscribers",
                color: "hsl(var(--chart-1))",
              },
              unsubscribes: {
                label: "Unsubscribes",
                color: "hsl(var(--chart-2))",
              },
              growth: {
                label: "Net Growth",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quarterlyData}>
                <XAxis 
                  dataKey="quarter" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'currentColor', fontSize: 12 }}
                  width={40}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="subscribers"
                  stroke="var(--color-subscribers)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="unsubscribes"
                  stroke="var(--color-unsubscribes)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="growth"
                  stroke="var(--color-growth)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

