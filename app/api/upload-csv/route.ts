import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'csv-parse/sync'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const csvContent = await file.text()

  try {
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    })

    // Process the records to create the rolling quarterly data
    const rollingQuarterlyData = processRollingQuarterlyData(records)

    return NextResponse.json({ rollingQuarterlyData })
  } catch (error) {
    console.error('Error parsing CSV:', error)
    return NextResponse.json({ error: 'Failed to parse CSV' }, { status: 500 })
  }
}

function processRollingQuarterlyData(records: any[]) {
  // This is a placeholder implementation. You would need to adjust this
  // based on the actual structure of your CSV data.
  return records.map(record => ({
    quarter: record.quarter,
    email: parseInt(record.email, 10),
    website: parseInt(record.website, 10),
    youtube: parseInt(record.youtube, 10),
    vimeo: parseInt(record.vimeo, 10)
  }))
}

