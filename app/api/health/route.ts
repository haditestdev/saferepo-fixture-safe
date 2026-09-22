import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "operational",
      mode: "negative-control-fixture",
      findingsExpected: 0,
      timestamp: new Date().toISOString()
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Content-Type-Options": "nosniff"
      }
    }
  );
}
