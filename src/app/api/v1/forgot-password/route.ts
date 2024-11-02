import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
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

  await resetPasswordEmail(email);

  return Response.json({ error: false }, { status: OK });
}
