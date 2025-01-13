import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a real application, you would fetch this data from your database or external API
    const mockData = [
      { month: "Jan", subscribers: 1000 },
      { month: "Feb", subscribers: 1200 },
      { month: "Mar", subscribers: 1400 },
      { month: "Apr", subscribers: 1600 },
      { month: "May", subscribers: 1800 },
      { month: "Jun", subscribers: 2000 },
    ];

    return NextResponse.json({ data: mockData });
  } catch (error) {
    console.error('Error in email-metrics API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

