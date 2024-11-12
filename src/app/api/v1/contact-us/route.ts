import { EMAIL } from "@/constants/environment";
import { BAD_REQUEST, OK } from "@/constants/statusCodes";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { sendEmail } from "@/lib/utils/sendEmail";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.email) {
    return apiResponseError({
      message: "Email Required",
      statusCode: BAD_REQUEST,
    });
  }

  if (!body.feedback) {
    return apiResponseError({
      message: "Feedback Required",
      statusCode: BAD_REQUEST,
    });
  }

  if (EMAIL) {
    await sendEmail({
      sentTo: EMAIL,
      subject: `${body.email} sent a Feedback`,
      body: body.feedback,
    });
  }

  return Response.json({}, { status: OK });
}
