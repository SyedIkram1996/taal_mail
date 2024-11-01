import { CREATED } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    await BidModel.findOneAndDelete({ _id: id, bidBy: decodedToken.userId });

    return Response.json({ error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}
