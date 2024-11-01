import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { Types } from "mongoose";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const offers = await BidModel.aggregate([
      {
        $lookup: {
          from: "properties", // Replace with the actual name of your users collection
          localField: "property",
          foreignField: "_id",
          as: "property",
        },
      },

      {
        $unwind: "$property",
      },
      {
        $addFields: {
          "property.id": "$property._id",
          id: "$_id",
        },
      },
      {
        $match: {
          "property.createdBy": new Types.ObjectId(decodedToken.userId),
        },
      },
      {
        $project: {
          _id: 0,
          "property._id": 0,
        },
      },
    ]);

    return Response.json({ data: { offers }, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
