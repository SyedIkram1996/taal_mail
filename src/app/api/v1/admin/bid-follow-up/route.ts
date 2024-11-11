import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  UNAUTHORIZED,
} from "@/constants/statusCodes";
import { ERoles } from "@/enums/enums";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { validateResultError } from "@/lib/utils/validateResultError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { bidFollowUpSchema } from "@/validators/bid";
import { Types } from "mongoose";
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

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return apiResponseError({
        message: "id required",
        statusCode: BAD_REQUEST,
      });
    }

    await dbConnect();

    try {
      const bid = await BidModel.aggregate([
        {
          $match: {
            _id: new Types.ObjectId(id),
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

      if (bid[0]) {
        return Response.json(
          { bid: bid[0] || null, error: false },
          { status: OK },
        );
      } else {
        return apiResponseError({
          message: "Bid not found",
          statusCode: NOT_FOUND,
        });
      }
    } catch (error) {
      return apiResponseError({
        message: "Something went wrong",
        statusCode: INTERNAL_SERVER_ERROR,
      });
    }
  } else {
    return decodedToken.response;
  }
}

export async function PUT(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    if (decodedToken.userRole !== ADMIN) {
      return apiResponseError({
        message: "Not Allowed",
        statusCode: UNAUTHORIZED,
      });
    }

    await dbConnect();
    const body = await request.json();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id") || "";

    if (body.meeting) {
      const bid = await BidModel.findById(id, { followUps: 1 });
      const followUpsLength = bid?.followUps?.length;
      if (followUpsLength && followUpsLength > 0) {
        await BidModel.findByIdAndUpdate(id, {
          $set: {
            [`followUps.${followUpsLength - 1}`]: {
              ...bid?.followUps[followUpsLength - 1],
              meeting: body.meeting,
            },
          },
        });
      }
    } else if (body.followUp) {
      console.log(body.followUp);
      const validationResult = bidFollowUpSchema.safeParse(body.followUp);

      if (!validationResult.success) {
        return validateResultError(validationResult);
      }

      const data = validationResult.data;

      await BidModel.findByIdAndUpdate(id, {
        $push: {
          followUps: {
            title: data.title,
            sellerOffer: data.sellerOffer,
            bidderBid: data.bidderBid,
          },
        },
      });
    }

    return Response.json({ error: false }, { status: OK });
  } else {
    return decodedToken.response;
  }
}
