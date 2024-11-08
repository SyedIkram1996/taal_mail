import { OK, UNAUTHORIZED } from "@/constants/statusCodes";
import { ERoles } from "@/enums/enums";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";
const { ADMIN } = ERoles;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    if (decodedToken.userRole !== ADMIN) {
      return apiResponseError({
        message: "Not Allowed",
        statusCode: UNAUTHORIZED,
      });
    }

    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");

    const bids = await BidModel.aggregate([
      {
        $match: {
          status: "accepted",
        },
      },
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
        $lookup: {
          from: "users", // Replace with the actual name of your users collection
          localField: "property.createdBy",
          foreignField: "_id",
          as: "property.createdBy",
        },
      },

      {
        $unwind: "$property.createdBy",
      },
      {
        $lookup: {
          from: "users", // Replace with the actual name of your users collection
          localField: "bidBy",
          foreignField: "_id",
          as: "bidBy",
        },
      },

      {
        $unwind: "$bidBy",
      },
      {
        $addFields: {
          "property.id": "$property._id",
          id: "$_id",
        },
      },

      {
        $project: {
          _id: 0,
          "property._id": 0,
        },
      },
    ]);

    // const bids = await BidModel.find({ status: "accepted" })

    //   .populate({
    //     path: "bidBy",
    //     model: UserModel,
    //   });
    return Response.json({ bids, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
