import { OK, UNAUTHORIZED } from "@/constants/statusCodes";
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

    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const users = await UserModel.find(
      search
        ? {
            name: {
              $regex: search,
              $options: "i",
            },
          }
        : {},
    );
    return Response.json({ users, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}
