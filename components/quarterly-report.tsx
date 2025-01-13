"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { quarter: "Q1 2023", email: 1400, website: 6000, youtube: 12000, vimeo: 2400 },
  { quarter: "Q2 2023", email: 2000, website: 7500, youtube: 15000, vimeo: 3000 },
  { quarter: "Q3 2023", email: 2400, website: 9000, youtube: 18000, vimeo: 3600 },
  { quarter: "Q4 2023", email: 2800, website: 10500, youtube: 21000, vimeo: 4200 },
]

export default function QuarterlyReport() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Quarterly Report (2023)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="email" stroke="#8884d8" name="Email Subscribers" />
              <Line type="monotone" dataKey="website" stroke="#82ca9d" name="Website Visits" />
              <Line type="monotone" dataKey="youtube" stroke="#ffc658" name="YouTube Subscribers" />
              <Line type="monotone" dataKey="vimeo" stroke="#ff7300" name="Vimeo Views" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

