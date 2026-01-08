import { NextResponse } from 'next/server';

// Example API route
// This demonstrates how to create API routes in the App Router
export async function GET() {
  return NextResponse.json({
    message: 'This is an example API route',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    message: 'Data received',
    data: body,
  });
}

