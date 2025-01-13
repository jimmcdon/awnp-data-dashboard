"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const campaignData = [
  {
    name: "Welcome Series",
    openRate: 45.2,
    clickRate: 12.5,
    sends: 2800,
  },
  {
    name: "Product Launch",
    openRate: 52.8,
    clickRate: 18.3,
    sends: 3500,
  },
  {
    name: "Newsletter",
    openRate: 38.5,
    clickRate: 8.9,
    sends: 5200,
  },
  {
    name: "Promo Offer",
    openRate: 41.2,
    clickRate: 15.7,
    sends: 4100,
  },
  {
    name: "Re-engagement",
    openRate: 28.4,
    clickRate: 5.2,
    sends: 2900,
  },
]

export default function EmailCampaignMetrics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              openRate: {
                label: "Open Rate",
                color: "hsl(var(--chart-1))",
              },
              clickRate: {
                label: "Click Rate",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="openRate"
                  fill="var(--color-openRate)"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="clickRate"
                  fill="var(--color-clickRate)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {campaignData.map((campaign) => (
          <Card key={campaign.name}>
            <CardHeader>
              <CardTitle className="text-sm">{campaign.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Sends</dt>
                  <dd className="text-2xl font-bold">{campaign.sends.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Open Rate</dt>
                  <dd className="text-lg font-semibold">{campaign.openRate}%</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Click Rate</dt>
                  <dd className="text-lg font-semibold">{campaign.clickRate}%</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

