import { INTERNAL_SERVER_ERROR } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import { validateResultError } from "@/lib/utils/validateResultError";
import { propertySchema } from "@/validators/property";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let token = request.headers.get("authorization");

  if (!token) {
    return apiResponseError({
      message: "Token Required",
      statusCode: INTERNAL_SERVER_ERROR,
    });
  }

  // token = token.split(" ")[1];

  await dbConnect();
  const body = await request.json();

  const validationResult = propertySchema.safeParse(body);

  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  // const { email, idToken, uid } = validationResult.data;

  console.log(body);

  // const validationResult =

  return apiResponseError({ message: "", statusCode: INTERNAL_SERVER_ERROR });
}
