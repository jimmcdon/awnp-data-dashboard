"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Insights } from "@/components/insights"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const quarterlyData = [
  { quarter: "Q3 2023", downloads: 2500 },
  { quarter: "Q4 2023", downloads: 3000 },
  { quarter: "Q1 2024", downloads: 3500 },
  { quarter: "Q2 2024", downloads: 4000 },
]

const toolsData = [
  { name: "Ebook", downloads: 1200 },
  { name: "Audiobook", downloads: 980 },
  { name: "Conversation Starters", downloads: 1500 },
  { name: "Toolkits", downloads: 750 },
  { name: "Morganisms", downloads: 620 },
]

const topPerformers = [
  { tool: "Leadership Development Toolkit", downloads: 500, rating: 4.8 },
  { tool: "Effective Communication Strategies Ebook", downloads: 450, rating: 4.7 },
  { tool: "Team Building Exercises Handbook", downloads: 400, rating: 4.6 },
  { tool: "Crisis Management Playbook", downloads: 350, rating: 4.5 },
  { tool: "Emotional Intelligence in the Workplace Guide", downloads: 300, rating: 4.4 },
]

const bottomPerformers = [
  { tool: "Basic Time Management Tips", downloads: 50, rating: 3.2 },
  { tool: "Introduction to Spreadsheets", downloads: 75, rating: 3.5 },
  { tool: "Simple Budgeting Template", downloads: 100, rating: 3.7 },
  { tool: "Generic SWOT Analysis Template", downloads: 125, rating: 3.8 },
  { tool: "Basic Project Timeline Template", downloads: 150, rating: 3.9 },
]

export default function ToolsDownloadsPage() {
  const totalDownloads = quarterlyData[quarterlyData.length - 1].downloads;
  const previousQuarterDownloads = quarterlyData[quarterlyData.length - 2].downloads;
  const downloadGrowth = ((totalDownloads - previousQuarterDownloads) / previousQuarterDownloads) * 100;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tools Downloads</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Download Statistics (Rolling 4 Quarters)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDownloads.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Quarterly Downloads (
              <span className={downloadGrowth >= 0 ? "text-green-600" : "text-red-600"}>
                {downloadGrowth >= 0 ? "+" : "-"}{Math.abs(downloadGrowth).toFixed(2)}%
              </span>
              )
            </p>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                  <Tooltip />
                  <Bar dataKey="downloads" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tools Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tool Name</TableHead>
                  <TableHead className="text-right">Downloads</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {toolsData.map((tool) => (
                  <TableRow key={tool.name}>
                    <TableCell>{tool.name}</TableCell>
                    <TableCell className="text-right">{tool.downloads.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tool Name</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPerformers.map((tool) => (
                  <TableRow key={tool.tool}>
                    <TableCell>{tool.tool}</TableCell>
                    <TableCell>{tool.downloads.toLocaleString()}</TableCell>
                    <TableCell>{tool.rating.toFixed(1)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bottom Performing Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tool Name</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bottomPerformers.map((tool) => (
                  <TableRow key={tool.tool}>
                    <TableCell>{tool.tool}</TableCell>
                    <TableCell>{tool.downloads.toLocaleString()}</TableCell>
                    <TableCell>{tool.rating.toFixed(1)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Updated Insights</h2>
          <Insights
            trend="Consistent growth in tool downloads over the past 4 quarters, with leadership and communication tools leading in performance."
            interpretation="Our audience values advanced, specialized content over general introductory materials. There's a clear preference for leadership and strategic tools."
            action="Continue developing more advanced leadership and communication tools. Consider phasing out or updating underperforming basic tools to more specialized versions."
            triggerEvent="Launch of the Leadership Development Toolkit in Q1 2024 correlated with a significant increase in overall downloads and positive ratings."
            responsible="Content Creation Team and Product Development Team"
          />
        </section>
      </div>
    </div>
  )
}

