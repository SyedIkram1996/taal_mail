import { CREATED } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import InvestmentModel from "@/lib/models/investmentModel";
import { validateResultError } from "@/lib/utils/validateResultError";
import { investmentSchema } from "@/validators/investment";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  const validationResult = investmentSchema.safeParse(body);
  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  const data = validationResult.data;

  const investment = await InvestmentModel.create(data);

  return Response.json({ investment, error: false }, { status: CREATED });
}
