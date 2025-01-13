"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: number
  change: number
  data: Array<{ value: number }>
  IconLeft: LucideIcon
}

export function MetricCard({ title, value, change, data, IconLeft }: MetricCardProps) {
  const isPositive = change > 0
  const changeText = `${Math.abs(change).toFixed(1)}% from last quarter`

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <IconLeft className="w-8 h-8 text-gray-900 dark:text-gray-100" />
          </div>
          <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
        <span className={cn(
          "text-4xl font-bold",
          isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
        )}>
          {isPositive ? "+" : "-"}{value.toLocaleString()}
        </span>
        <p className="text-sm text-muted-foreground mt-1">
          {isPositive ? "+" : "-"}{changeText}
        </p>
      </div>
      <div className="h-[64px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar
              dataKey="value"
              fill={isPositive ? "rgb(22 163 74)" : "rgb(220 38 38)"}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

