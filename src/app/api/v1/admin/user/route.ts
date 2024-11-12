import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  UNAUTHORIZED,
} from "@/constants/statusCodes";
import { ERoles } from "@/enums/enums";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
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
      const user = await UserModel.findById(id);
      if (user) {
        return Response.json({ user, error: false }, { status: OK });
      } else {
        return apiResponseError({
          message: "User not found",
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
