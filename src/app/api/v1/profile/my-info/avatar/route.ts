import { BAD_REQUEST, NOT_FOUND, OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import {
  cloudinaryDestroy,
  cloudinaryUpload,
} from "@/lib/utils/cloudinaryInitialize";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();

    const body = await request.json();

    if (!body.image) {
      return apiResponseError({
        message: "Image required",
        statusCode: BAD_REQUEST,
      });
    }

    let user = await UserModel.findById(decodedToken.userId);

    if (!user) {
      return apiResponseError({
        message: "User not found",
        statusCode: NOT_FOUND,
      });
    }

    if (user.avatar && user.avatar.public_id) {
      await cloudinaryDestroy({ public_id: user.avatar.public_id });
    }

    const uploadedImage = await cloudinaryUpload({
      image: body.image,
      folder: "/Users",
    });

    user.avatar.public_id = uploadedImage.public_id;
    user.avatar.url = uploadedImage.secure_url;

    const updatedUser = await user.save({ validateBeforeSave: false });

    return Response.json({ user: updatedUser, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
