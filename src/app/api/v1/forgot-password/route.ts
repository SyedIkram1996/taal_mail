import { NOT_FOUND, OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import "@/lib/utils/firebaseAdminInitialize";
import { resetPasswordEmail } from "@/lib/utils/sendEmail";
import { validateResultError } from "@/lib/utils/validateResultError";
import { forgotPasswordSchema } from "@/validators/auth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  const validationResult = forgotPasswordSchema.safeParse(body);

  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  const { email } = validationResult.data;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return apiResponseError({
      message: "User not found",
      statusCode: NOT_FOUND,
    });
  }

  await resetPasswordEmail(email);

  return Response.json({ error: false }, { status: OK });
}
