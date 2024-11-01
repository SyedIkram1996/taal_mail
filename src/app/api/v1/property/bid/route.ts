import { CREATED } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { validateResultError } from "@/lib/utils/validateResultError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { bidSchema } from "@/validators/bid";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const body = await request.json();

    const validationResult = bidSchema.safeParse(body);

    if (!validationResult.success) {
      return validateResultError(validationResult);
    }

    const data = validationResult.data;

    const bid = await BidModel.create({ ...data, bidBy: decodedToken.userId });

    return Response.json({ data: bid, error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}
