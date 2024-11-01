import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import PropertyModel from "@/lib/models/propertyModel";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const bids = await BidModel.find({
      bidBy: decodedToken.userId,
    }).populate({ path: "property", model: PropertyModel });
    return Response.json({ data: { bids }, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
