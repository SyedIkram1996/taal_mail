import { CREATED } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();

    return Response.json({ data: [], error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}
