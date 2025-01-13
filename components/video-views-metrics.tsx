"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const quarterlyData = [
  { quarter: "Q1 2024", views: 10000, likes: 800, shares: 200 },
  { quarter: "Q2 2024", views: 12000, likes: 960, shares: 240 },
  { quarter: "Q3 2024", views: 15000, likes: 1200, shares: 300 },
  { quarter: "Q4 2024", views: 18000, likes: 1440, shares: 360 },
]

const topPerformers = [
  { video: "Executive Coaching: A Day in the Life", views: 5000, likes: 400, shares: 120 },
  { video: "5 Minute Leadership Tips: Active Listening", views: 4500, likes: 350, shares: 100 },
  { video: "The Power of Emotional Intelligence in Business", views: 4000, likes: 320, shares: 90 },
  { video: "Crisis Management: Real-world Case Studies", views: 3500, likes: 280, shares: 80 },
  { video: "Building a Culture of Innovation", views: 3000, likes: 240, shares: 70 },
]

const bottomPerformers = [
  { video: "Company Update: Q2 2022", views: 500, likes: 20, shares: 5 },
  { video: "Product Demo: Legacy Software", views: 600, likes: 25, shares: 8 },
  { video: "Interview with Retired CEO", views: 700, likes: 30, shares: 10 },
  { video: "Office Tour: Pre-renovation", views: 800, likes: 35, shares: 12 },
  { video: "How to Use Our Old Client Portal", views: 900, likes: 40, shares: 15 },
]

export default function VideoViewsMetrics() {
  const latestQuarterData = quarterlyData[quarterlyData.length - 1];
  const previousQuarterData = quarterlyData[quarterlyData.length - 2];
  const viewsGrowth = ((latestQuarterData.views - previousQuarterData.views) / previousQuarterData.views) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Video Performance Metrics (Quarterly)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestQuarterData.views.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Quarterly Views (
            <span className={viewsGrowth >= 0 ? "text-green-600" : "text-red-600"}>
              {viewsGrowth >= 0 ? "+" : "-"}{Math.abs(viewsGrowth).toFixed(2)}%
            </span>
            )
          </p>
          <ChartContainer
            config={{
              views: {
                label: "Views",
                color: "hsl(var(--chart-5))",
              },
              likes: {
                label: "Likes",
                color: "hsl(var(--chart-6))",
              },
              shares: {
                label: "Shares",
                color: "hsl(var(--chart-7))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quarterlyData}>
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
                <Bar dataKey="views" fill="var(--color-views)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="likes" fill="var(--color-likes)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="shares" fill="var(--color-shares)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Video Title</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Shares</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPerformers.map((video) => (
                <TableRow key={video.video}>
                  <TableCell>{video.video}</TableCell>
                  <TableCell>{video.views.toLocaleString()}</TableCell>
                  <TableCell>{video.likes.toLocaleString()}</TableCell>
                  <TableCell>{video.shares.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bottom Performing Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Video Title</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Likes</TableHead>
                <TableHead>Shares</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bottomPerformers.map((video) => (
                <TableRow key={video.video}>
                  <TableCell>{video.video}</TableCell>
                  <TableCell>{video.views.toLocaleString()}</TableCell>
                  <TableCell>{video.likes.toLocaleString()}</TableCell>
                  <TableCell>{video.shares.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

