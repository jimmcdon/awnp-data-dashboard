"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    metric: "Email Subscribers",
    "2023": 2800,
    "2024": 3500,
  },
  {
    metric: "Website Visits",
    "2023": 10500,
    "2024": 15000,
  },
  {
    metric: "YouTube Subscribers",
    "2023": 21000,
    "2024": 28000,
  },
  {
    metric: "Video Views",
    "2023": 4200,
    "2024": 5500,
  },
]

export default function YearOverYearReport() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Year over Year Report: 2023 vs 2024</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" />
              <YAxis dataKey="metric" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="2023" fill="#8884d8" name="2023" />
              <Bar dataKey="2024" fill="#82ca9d" name="2024" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

