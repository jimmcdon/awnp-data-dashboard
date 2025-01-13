import VideoViewsMetrics from "@/components/video-views-metrics"
import { Insights } from "@/components/insights"

export default function VideoViewsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Video Views Analytics</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Video Performance</h2>
        <VideoViewsMetrics />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Insights</h2>
        <Insights
          trend="Steady increase in video views across platforms, with higher engagement on shorter content. Q4 2024 showed the highest growth in views and engagement."
          interpretation="Our audience prefers concise, informative videos. Longer content still has its place but for a more niche audience. The Q4 spike suggests our content strategy is resonating more strongly with viewers."
          action="Focus on creating more short-form content while maintaining quality long-form videos for in-depth topics. Analyze Q4 content to identify key success factors and replicate in future quarters."
          triggerEvent="Introduction of 'Quick Tip' video series in Q3 2024 led to a significant spike in overall views and engagement in Q4."
          responsible="Video Production Team, Content Strategy Manager, and Analytics Team for ongoing performance monitoring"
        />
      </section>
    </div>
  )
}

