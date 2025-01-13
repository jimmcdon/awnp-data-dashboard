import EmailMetrics from "./email-metrics"
import WebsiteMetrics from "./website-metrics"
import YouTubeMetrics from "./youtube-metrics"
import VimeoMetrics from "./vimeo-metrics"
import QuarterlyReport from "./quarterly-report"
import AnnualReport from "./annual-report"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">KPI Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EmailMetrics />
        <WebsiteMetrics />
        <YouTubeMetrics />
        <VimeoMetrics />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <QuarterlyReport />
        <AnnualReport />
      </div>
    </div>
  )
}

