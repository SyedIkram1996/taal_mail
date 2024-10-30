import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const classification = searchParams.get("classification");
    const properties = await PropertyModel.find({
      createdBy: decodedToken.userId,
      classification,
    });
    return Response.json({ properties, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
