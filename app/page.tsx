import { MetricCard } from "@/components/metric-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Globe, Youtube, Video, Download, Clock, ThumbsUp, Share2, ArrowDownToLine, TrendingUp, Users } from 'lucide-react'
import RollingQuarterlyReport from "@/components/rolling-quarterly-report"
import YearOverYearReport from "@/components/year-over-year-report"

// Sample data for the last 8 months (growth metrics)
const emailData = [
  { value: 1200 },
  { value: 1500 },
  { value: 1100 },
  { value: 1400 },
  { value: 1000 },
  { value: 1300 },
  { value: 1600 },
  { value: 1200 },
]

const websiteData = [
  { value: 5000 },
  { value: 6000 },
  { value: 5500 },
  { value: 7000 },
  { value: 6500 },
  { value: 7500 },
  { value: 8000 },
  { value: 9500 },
]

const youtubeData = [
  { value: 10000 },
  { value: 9800 },
  { value: 9900 },
  { value: 9700 },
  { value: 9600 },
  { value: 9500 },
  { value: 9400 },
  { value: 9995 },
]

const vimeoData = [
  { value: 2000 },
  { value: 2200 },
  { value: 2100 },
  { value: 2400 },
  { value: 2300 },
  { value: 2600 },
  { value: 2800 },
  { value: 3500 },
]

const toolsDownloadsData = [
  { value: 450 },
  { value: 500 },
  { value: 550 },
  { value: 600 },
  { value: 650 },
  { value: 700 },
  { value: 750 },
  { value: 800 },
]

// Sample data for engagement metrics
const emailOpenRateData = [
  { value: 22 },
  { value: 24 },
  { value: 21 },
  { value: 25 },
  { value: 23 },
  { value: 26 },
  { value: 28 },
  { value: 27 },
]

const websiteAvgSessionData = [
  { value: 120 },
  { value: 125 },
  { value: 118 },
  { value: 130 },
  { value: 128 },
  { value: 135 },
  { value: 140 },
  { value: 138 },
]

const youtubeLikesData = [
  { value: 5000 },
  { value: 5500 },
  { value: 5200 },
  { value: 6000 },
  { value: 5800 },
  { value: 6500 },
  { value: 7000 },
  { value: 7200 },
]

const vimeoSharesData = [
  { value: 100 },
  { value: 120 },
  { value: 110 },
  { value: 130 },
  { value: 125 },
  { value: 140 },
  { value: 150 },
  { value: 160 },
]

const toolsUsageData = [
  { value: 300 },
  { value: 320 },
  { value: 310 },
  { value: 350 },
  { value: 340 },
  { value: 370 },
  { value: 400 },
  { value: 420 },
]

// This would be replaced with actual data from the CSV upload
const rollingQuarterlyData = [
  { quarter: "Q1 2024", email: 3200, website: 12000, youtube: 24000, vimeo: 4800 },
  { quarter: "Q2 2024", email: 3600, website: 13500, youtube: 27000, vimeo: 5400 },
  { quarter: "Q3 2024", email: 4000, website: 15000, youtube: 30000, vimeo: 6000 },
  { quarter: "Q4 2024", email: 4400, website: 16500, youtube: 33000, vimeo: 6600 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">KPI Dashboard</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 h-6 w-6" />
          Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <MetricCard
            title="Email Subscribers"
            value={2350}
            change={180.1}
            data={emailData}
            IconLeft={Mail}
          />
          <MetricCard
            title="Website Visits"
            value={9500}
            change={35.7}
            data={websiteData}
            IconLeft={Globe}
          />
          <MetricCard
            title="YouTube Subscribers"
            value={9995}
            change={-5}
            data={youtubeData}
            IconLeft={Youtube}
          />
          <MetricCard
            title="Video Views"
            value={3500}
            change={-8.3}
            data={vimeoData}
            IconLeft={Video}
          />
          <MetricCard
            title="Tools Downloads"
            value={800}
            change={14.3}
            data={toolsDownloadsData}
            IconLeft={Download}
          />
        </div>
      </section>
      
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="min-w-0">
          <RollingQuarterlyReport data={rollingQuarterlyData} />
        </div>
        <div className="min-w-0">
          <YearOverYearReport />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Users className="mr-2 h-6 w-6" />
          Engagement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <MetricCard
            title="Email Open Rate"
            value={27}
            change={3.8}
            data={emailOpenRateData}
            IconLeft={Mail}
          />
          <MetricCard
            title="Avg. Session Duration"
            value={138}
            change={2.2}
            data={websiteAvgSessionData}
            IconLeft={Clock}
          />
          <MetricCard
            title="YouTube Likes"
            value={7200}
            change={2.9}
            data={youtubeLikesData}
            IconLeft={ThumbsUp}
          />
          <MetricCard
            title="Video Shares"
            value={160}
            change={6.7}
            data={vimeoSharesData}
            IconLeft={Share2}
          />
          <MetricCard
            title="Tools Usage"
            value={420}
            change={5.0}
            data={toolsUsageData}
            IconLeft={ArrowDownToLine}
          />
        </div>
      </section>
    </div>
  )
}

