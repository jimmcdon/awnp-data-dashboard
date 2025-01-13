"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Insights } from "./insights"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const quarterlyData = [
  { quarter: "Q1 2024", visits: 20000, pages: 60000 },
  { quarter: "Q2 2024", visits: 22500, pages: 67500 },
  { quarter: "Q3 2024", visits: 25000, pages: 75000 },
  { quarter: "Q4 2024", visits: 27500, pages: 82500 },
]

const topPerformers = [
  { page: "/blog/top-10-leadership-tips", visits: 3500, avgTimeOnPage: "2:45" },
  { page: "/products/executive-coaching", visits: 2800, avgTimeOnPage: "3:20" },
  { page: "/about-us", visits: 2200, avgTimeOnPage: "1:55" },
  { page: "/resources/free-ebook", visits: 1900, avgTimeOnPage: "4:10" },
  { page: "/contact", visits: 1700, avgTimeOnPage: "1:30" },
]

const bottomPerformers = [
  { page: "/blog/outdated-post-2020", visits: 50, avgTimeOnPage: "0:20" },
  { page: "/events/past-webinar-2021", visits: 75, avgTimeOnPage: "0:15" },
  { page: "/resources/old-whitepaper", visits: 100, avgTimeOnPage: "0:30" },
  { page: "/careers/internship-2022", visits: 120, avgTimeOnPage: "0:45" },
  { page: "/faq/deprecated-service", visits: 150, avgTimeOnPage: "0:25" },
]

export default function WebsiteMetrics() {
  const latestQuarterData = quarterlyData[quarterlyData.length - 1];
  const previousQuarterData = quarterlyData[quarterlyData.length - 2];
  const visitsGrowth = ((latestQuarterData.visits - previousQuarterData.visits) / previousQuarterData.visits) * 100;
  const pagesGrowth = ((latestQuarterData.pages - previousQuarterData.pages) / previousQuarterData.pages) * 100;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Website Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestQuarterData.visits.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Quarterly Visits (
            <span className={visitsGrowth >= 0 ? "text-green-600" : "text-red-600"}>
              {visitsGrowth >= 0 ? "+" : "-"}{Math.abs(visitsGrowth).toFixed(2)}%
            </span>
            )
          </p>
          <ChartContainer
            config={{
              visits: {
                label: "Visits",
                color: "hsl(var(--chart-2))",
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
                <Bar dataKey="visits" fill="var(--color-visits)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Pages Visited</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestQuarterData.pages.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            Quarterly Pages Visited (
            <span className={pagesGrowth >= 0 ? "text-green-600" : "text-red-600"}>
              {pagesGrowth >= 0 ? "+" : "-"}{Math.abs(pagesGrowth).toFixed(2)}%
            </span>
            )
          </p>
          <ChartContainer
            config={{
              pages: {
                label: "Pages",
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
                <Line type="monotone" dataKey="pages" stroke="var(--color-pages)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Avg. Time on Page</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topPerformers.map((page) => (
                <TableRow key={page.page}>
                  <TableCell>{page.page}</TableCell>
                  <TableCell>{page.visits}</TableCell>
                  <TableCell>{page.avgTimeOnPage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bottom Performing Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Page</TableHead>
                <TableHead>Visits</TableHead>
                <TableHead>Avg. Time on Page</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bottomPerformers.map((page) => (
                <TableRow key={page.page}>
                  <TableCell>{page.page}</TableCell>
                  <TableCell>{page.visits}</TableCell>
                  <TableCell>{page.avgTimeOnPage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Insights
        trend="Consistent quarter-over-quarter growth in both website visits and pages visited throughout 2024. Q4 showed the highest numbers with 27,500 visits and 82,500 pages visited."
        interpretation="Our SEO and content marketing strategies are driving increased traffic and engagement. The steady growth in both metrics indicates not only growing interest in our content but also improved user engagement."
        action="Analyze the content and marketing strategies that led to the Q4 peak. Consider replicating successful approaches across other pages and optimizing underperforming areas. Investigate the correlation between increased visits and pages visited to identify what's driving deeper site exploration."
        triggerEvent="Launch of new product landing pages and improved site navigation in Q3 2024 correlated with accelerated growth in both visits and pages visited in Q4."
        responsible="Content team for creating engaging content, SEO specialist for improving visibility, and UX team for enhancing site navigation and page optimization."
      />
    </div>
  )
}

