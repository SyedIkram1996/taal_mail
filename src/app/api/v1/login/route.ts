import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  return Response.json({ data: { status: true, token: "" } });
}
