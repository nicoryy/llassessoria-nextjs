import { NextRequest } from "next/server";

export async function GET() {
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
