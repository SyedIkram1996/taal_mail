import { NOT_FOUND, OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await dbConnect();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const property = await PropertyModel.findById(id);
  if (property) {
    return Response.json({ property, error: false }, { status: OK });
  } else {
    return apiResponseError({
      message: "Property not found",
      statusCode: NOT_FOUND,
    });
  }
}
