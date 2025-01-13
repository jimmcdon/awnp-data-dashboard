import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface InsightProps {
  trend: string
  interpretation: string
  action: string
  triggerEvent: string
  responsible: string
}

export function Insights({ trend, interpretation, action, triggerEvent, responsible }: InsightProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Insights</CardTitle>
        <CardDescription>Key takeaways and action items</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">What is the trend?</h3>
          <p>{trend}</p>
        </div>
        <div>
          <h3 className="font-semibold">What does it tell us?</h3>
          <p>{interpretation}</p>
        </div>
        <div>
          <h3 className="font-semibold">What can we do about it?</h3>
          <p>{action}</p>
        </div>
        <div>
          <h3 className="font-semibold">Was there a trigger event that caused a change?</h3>
          <p>{triggerEvent}</p>
        </div>
        <div>
          <h3 className="font-semibold">Who can do something about it?</h3>
          <p>{responsible}</p>
        </div>
      </CardContent>
    </Card>
  )
}

