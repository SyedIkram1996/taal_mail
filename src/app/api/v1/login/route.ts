import { TOKEN_SECRET } from "@/constants/environment";
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  OK,
} from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import "@/lib/utils/firebaseAdminInitialize";
import { validateResultError } from "@/lib/utils/validateResultError";
import { loginInIdTokenSchema } from "@/validators/auth";
import admin from "firebase-admin";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  const validationResult = loginInIdTokenSchema.safeParse(body);

  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  const { email, idToken, uid } = validationResult.data;

  const user = await UserModel.findOne({ email });

  if (uid && !user) {
    await admin.auth().deleteUser(uid);
    return apiResponseError({
      message: "User not found",
      statusCode: NOT_FOUND,
    });
  }

  try {
    await admin.auth().verifyIdToken(idToken);
  } catch (error) {
    return apiResponseError({
      message: "Wrong Id Token",
      statusCode: BAD_REQUEST,
    });
  }

  if (TOKEN_SECRET) {
    const token = jwt.sign(
      { email, role: user?.role, id: user?._id },
      TOKEN_SECRET,
    );

    return Response.json({ user, token, error: false }, { status: OK });
  }

  return apiResponseError({
    message: "Something went wrong",
    statusCode: INTERNAL_SERVER_ERROR,
  });
}
