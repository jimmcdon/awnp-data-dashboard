"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Insights } from "./insights"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const quarterlyData = [
  { quarter: "Q3 2023", subscribers: 10000, views: 50000 },
  { quarter: "Q4 2023", subscribers: 12000, views: 60000 },
  { quarter: "Q1 2024", subscribers: 14000, views: 70000 },
  { quarter: "Q2 2024", subscribers: 15000, views: 75000 },
]

const topPerformers = [
  { video: "10 Leadership Lessons from Tech Giants", views: 15000, likes: 1200, comments: 300 },
  { video: "How to Build a High-Performing Team", views: 12000, likes: 950, comments: 220 },
  { video: "The Future of Work: AI and Human Collaboration", views: 10000, likes: 800, comments: 180 },
  { video: "Effective Communication Strategies for Leaders", views: 9000, likes: 720, comments: 150 },
  { video: "Navigating Change in the Digital Era", views: 8500, likes: 680, comments: 140 },
]

const bottomPerformers = [
  { video: "Outdated Management Techniques (2020)", views: 500, likes: 20, comments: 5 },
  { video: "Introduction to Our Channel", views: 600, likes: 30, comments: 8 },
  { video: "Q&A Session: Ask Us Anything", views: 700, likes: 35, comments: 10 },
  { video: "Behind the Scenes: Office Tour", views: 800, likes: 40, comments: 12 },
  { video: "Quick Tip: Time Management", views: 900, likes: 45, comments: 15 },
]

export default function YouTubeMetrics() {
  const latestSubscribers = quarterlyData[quarterlyData.length - 1].subscribers;
  const previousQuarterSubscribers = quarterlyData[quarterlyData.length - 2].subscribers;
  const subscriberGrowth = ((latestSubscribers - previousQuarterSubscribers) / previousQuarterSubscribers) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>YouTube Metrics (Rolling 4 Quarters)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestSubscribers.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Subscribers (
            <span className={subscriberGrowth >= 0 ? "text-green-600" : "text-red-600"}>
              {subscriberGrowth >= 0 ? "+" : "-"}{Math.abs(subscriberGrowth).toFixed(2)}%
            </span>
            )
          </p>
          <ChartContainer
            config={{
              subscribers: {
                label: "Subscribers",
                color: "hsl(var(--chart-3))",
              },
              views: {
                label: "Views",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quarterlyData}>
                <XAxis dataKey="quarter" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line yAxisId="left" type="monotone" dataKey="subscribers" stroke="var(--color-subscribers)" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="views" stroke="var(--color-views)" strokeWidth={2} />
              </LineChart>
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
                <TableHead>Comments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPerformers.map((video) => (
                <TableRow key={video.video}>
                  <TableCell>{video.video}</TableCell>
                  <TableCell>{video.views.toLocaleString()}</TableCell>
                  <TableCell>{video.likes.toLocaleString()}</TableCell>
                  <TableCell>{video.comments.toLocaleString()}</TableCell>
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
                <TableHead>Comments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bottomPerformers.map((video) => (
                <TableRow key={video.video}>
                  <TableCell>{video.video}</TableCell>
                  <TableCell>{video.views.toLocaleString()}</TableCell>
                  <TableCell>{video.likes.toLocaleString()}</TableCell>
                  <TableCell>{video.comments.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Insights
        trend="Steady growth in both subscribers and views over the past 4 quarters. Top-performing videos focus on leadership and future-oriented topics."
        interpretation="Our YouTube content is resonating with our audience, especially videos that offer practical leadership advice and insights into future trends."
        action="Continue creating content around leadership lessons and future of work topics. Consider updating or removing underperforming older content."
        triggerEvent="Release of '10 Leadership Lessons from Tech Giants' video led to a surge in new subscribers and overall channel engagement in the latest quarter."
        responsible="Video production team and content strategist."
      />
    </div>
  )
}

