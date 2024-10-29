import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await dbConnect();
  const properties = await PropertyModel.find();

  return Response.json({ properties, error: false }, { status: OK });
}
