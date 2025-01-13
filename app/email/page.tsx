import { EmailCampaignPerformance } from "@/components/email-campaign-performance"
import EmailSubscriberMetrics from "@/components/email-subscriber-metrics"
import { Insights } from "@/components/insights"

export default function EmailPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Email Analytics</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Subscriber Growth</h2>
        <EmailSubscriberMetrics />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Campaign Performance</h2>
        <EmailCampaignPerformance />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Insights</h2>
        <Insights
          trend="High open rate but relatively lower click-through rate indicates room for content optimization."
          interpretation="While email deliverability is strong, engagement metrics suggest potential for improvement in call-to-action effectiveness."
          action="Review and optimize email content and CTAs. Investigate bounce reasons to improve list quality."
          triggerEvent="Recent campaign showed above-average open rates but below-average click rates."
          responsible="Email Marketing Manager and Content Team"
        />
      </section>
    </div>
  )
}

