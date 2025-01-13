"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Mail, MousePointerClick, Reply, UserMinus, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const metricsData = [
  {
    name: "Opened",
    value: 12484,
    color: "hsl(var(--cyan-500))",
  },
  {
    name: "Clicked",
    value: 1592,
    color: "hsl(var(--green-500))",
  },
  {
    name: "Unsubscribed",
    value: 153,
    color: "hsl(var(--orange-500))",
  },
  {
    name: "Replied",
    value: 0,
    color: "hsl(var(--emerald-500))",
  },
  {
    name: "Bounces",
    value: 2256,
    color: "hsl(var(--red-500))",
  },
]

const chartData = [
  {
    name: "Campaign Performance",
    Opened: 12484,
    Clicked: 1592,
    Unsubscribed: 153,
    Replied: 0,
    Bounces: 2256,
  },
]

const topPerformers = [
  { name: "Product Launch Announcement", openRate: 45.2, clickRate: 12.8, conversionRate: 3.5 },
  { name: "Black Friday Sale", openRate: 42.8, clickRate: 11.5, conversionRate: 3.2 },
  { name: "Customer Appreciation Event", openRate: 40.5, clickRate: 10.2, conversionRate: 2.8 },
  { name: "New Feature Release", openRate: 38.9, clickRate: 9.7, conversionRate: 2.5 },
  { name: "Exclusive Webinar Invitation", openRate: 37.6, clickRate: 9.1, conversionRate: 2.3 },
]

const bottomPerformers = [
  { name: "Monthly Newsletter", openRate: 22.1, clickRate: 3.2, conversionRate: 0.8 },
  { name: "General Product Update", openRate: 23.5, clickRate: 3.5, conversionRate: 0.9 },
  { name: "Industry News Roundup", openRate: 24.8, clickRate: 3.8, conversionRate: 1.0 },
  { name: "Customer Survey Request", openRate: 25.9, clickRate: 4.1, conversionRate: 1.1 },
  { name: "Blog Post Digest", openRate: 26.7, clickRate: 4.3, conversionRate: 1.2 },
]

export function EmailCampaignPerformance() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              Total Recipients: 77,790
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
            <Mail className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cyan-500">12,484</div>
            <p className="text-xs text-muted-foreground">
              {((12484 / 77790) * 100).toFixed(1)}% of total recipients
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
            <MousePointerClick className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">1,592</div>
            <p className="text-xs text-muted-foreground">
              {((1592 / 77790) * 100).toFixed(1)}% of total recipients
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">2,256</div>
            <p className="text-xs text-muted-foreground">
              {((2256 / 77790) * 100).toFixed(1)}% of total recipients
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Metrics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              Opened: {
                label: "Opened",
                color: "hsl(var(--cyan-500))",
              },
              Clicked: {
                label: "Clicked",
                color: "hsl(var(--green-500))",
              },
              Unsubscribed: {
                label: "Unsubscribed",
                color: "hsl(var(--orange-500))",
              },
              Replied: {
                label: "Replied",
                color: "hsl(var(--emerald-500))",
              },
              Bounces: {
                label: "Bounces",
                color: "hsl(var(--red-500))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="Opened"
                  fill="hsl(var(--cyan-500))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Clicked"
                  fill="hsl(var(--green-500))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Unsubscribed"
                  fill="hsl(var(--orange-500))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Replied"
                  fill="hsl(var(--emerald-500))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="Bounces"
                  fill="hsl(var(--red-500))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
              Top 5 Performing Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Click Rate</TableHead>
                  <TableHead>Conversion Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPerformers.map((campaign, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>{campaign.openRate}%</TableCell>
                    <TableCell>{campaign.clickRate}%</TableCell>
                    <TableCell>{campaign.conversionRate}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
              Bottom 5 Performing Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Click Rate</TableHead>
                  <TableHead>Conversion Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bottomPerformers.map((campaign, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>{campaign.openRate}%</TableCell>
                    <TableCell>{campaign.clickRate}%</TableCell>
                    <TableCell>{campaign.conversionRate}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

