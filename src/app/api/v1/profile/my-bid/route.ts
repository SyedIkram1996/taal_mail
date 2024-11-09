import { CREATED, OK, UNAUTHORIZED } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import BidModel from "@/lib/models/BidModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { Types } from "mongoose";
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

export async function PUT(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id") || "";

    const offer = await BidModel.aggregate([
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
        $match: {
          "property.createdBy": new Types.ObjectId(decodedToken.userId),
          _id: new Types.ObjectId(id),
        },
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
    ]);

    console.log(offer);

    if (!offer.length) {
      return apiResponseError({
        message: "Not allowed",
        statusCode: UNAUTHORIZED,
      });
    }

    await BidModel.findByIdAndUpdate(id, {
      status: "accepted",
      $push: {
        followUps: {
          title: `${offer[0].property.createdBy.name} accepted ${offer[0].bidBy.name} Bid`,
          sellerOffer: offer[0].property.price.askingPrice,
          bidderBid: offer[0].bidderBid.price,
        },
      },
    });

    return Response.json({ error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
