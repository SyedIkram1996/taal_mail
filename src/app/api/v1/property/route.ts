import { INTERNAL_SERVER_ERROR } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  // const validationResult =

  apiResponseError({ message: "", statusCode: INTERNAL_SERVER_ERROR });
}
