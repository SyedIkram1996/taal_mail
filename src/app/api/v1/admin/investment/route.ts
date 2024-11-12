import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
  UNAUTHORIZED,
} from "@/constants/statusCodes";
import { ERoles } from "@/enums/enums";
import dbConnect from "@/lib/db/dbConnect";
import InvestmentModel from "@/lib/models/investmentModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { validateResultError } from "@/lib/utils/validateResultError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { investFollowUpSchema } from "@/validators/investment";
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
      const investment = await InvestmentModel.findById(id);

      if (investment) {
        return Response.json({ investment, error: false }, { status: OK });
      } else {
        return apiResponseError({
          message: "Investor not found",
          statusCode: NOT_FOUND,
        });
      }
    } catch (error) {
      return apiResponseError({
        message: "Something went wrong",
        statusCode: INTERNAL_SERVER_ERROR,
      });
    }
  }
  {
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
      const investment = await InvestmentModel.findById(id, { followUps: 1 });
      const followUpsLength = investment?.followUps?.length;
      if (followUpsLength && followUpsLength > 0) {
        await InvestmentModel.findByIdAndUpdate(id, {
          $set: {
            [`followUps.${followUpsLength - 1}`]: {
              ...investment?.followUps[followUpsLength - 1],
              meeting: body.meeting,
            },
          },
        });
      }
    } else if (body.followUp) {
      const validationResult = investFollowUpSchema.safeParse(body.followUp);
      if (!validationResult.success) {
        return validateResultError(validationResult);
      }
      const data = validationResult.data;
      await InvestmentModel.findByIdAndUpdate(id, {
        $push: {
          followUps: {
            title: data.title,
          },
        },
      });
    }

    return Response.json({ error: false }, { status: OK });
  } else {
    return decodedToken.response;
  }
}
