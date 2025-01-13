"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DataPoint {
  quarter: string
  email: number
  website: number
  youtube: number
  vimeo: number
}

interface RollingQuarterlyReportProps {
  data?: DataPoint[]
}

const defaultData: DataPoint[] = [
  { quarter: "Q1 2024", email: 3200, website: 12000, youtube: 24000, vimeo: 4800 },
  { quarter: "Q2 2024", email: 3600, website: 13500, youtube: 27000, vimeo: 5400 },
  { quarter: "Q3 2024", email: 4000, website: 15000, youtube: 30000, vimeo: 6000 },
  { quarter: "Q4 2024", email: 4400, website: 16500, youtube: 33000, vimeo: 6600 },
]

export default function RollingQuarterlyReport({ data = defaultData }: RollingQuarterlyReportProps) {
  const maxValue = Math.max(...data.flatMap(d => [d.email, d.website, d.youtube, d.vimeo]))
  const yAxisMax = Math.ceil(maxValue / 10000) * 10000

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Rolling Quarterly Report</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[280px] w-full">
          <ChartContainer
            config={{
              email: {
                label: "Email Subscribers",
                color: "hsl(var(--chart-1))",
              },
              website: {
                label: "Website Visits",
                color: "hsl(var(--chart-2))",
              },
              youtube: {
                label: "YouTube Subscribers",
                color: "hsl(var(--chart-3))",
              },
              vimeo: {
                label: "Vimeo Views",
                color: "hsl(var(--chart-4))",
              },
            }}
          >
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ 
                  top: 5,
                  right: 10,
                  bottom: 15, 
                  left: 35 
                }}
              >
                <XAxis 
                  dataKey="quarter" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ 
                    fill: 'hsl(var(--foreground))',
                    fontSize: 12,
                    dy: 10 
                  }}
                  interval={0}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ 
                    fill: 'hsl(var(--foreground))',
                    fontSize: 12,
                    dx: -2 
                  }}
                  domain={[0, yAxisMax]}
                  tickFormatter={(value) => `${value / 1000}k`}
                  width={35} 
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (!active || !payload) return null
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Quarter
                            </span>
                            <span className="font-bold">{label}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Email
                            </span>
                            <span className="font-bold">
                              {payload[0]?.value?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Website
                            </span>
                            <span className="font-bold">
                              {payload[1]?.value?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              YouTube
                            </span>
                            <span className="font-bold">
                              {payload[2]?.value?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Vimeo
                            </span>
                            <span className="font-bold">
                              {payload[3]?.value?.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="email" 
                  stroke="var(--color-email)" 
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="website" 
                  stroke="var(--color-website)" 
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="youtube" 
                  stroke="var(--color-youtube)" 
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="vimeo" 
                  stroke="var(--color-vimeo)" 
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

