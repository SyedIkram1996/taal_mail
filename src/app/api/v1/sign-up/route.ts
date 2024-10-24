import {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  INTERNAL_SERVER_ERROR,
} from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import "@/lib/utils/firebaseAdminInitialize";
import { verifyEmail } from "@/lib/utils/sendEmail";
import { validateResultError } from "@/lib/utils/validateResultError";
import { signUpSchema } from "@/validators/auth";
import admin from "firebase-admin";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  const validationResult = signUpSchema.safeParse(body);

  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  const { name, email, password, phoneNo } = validationResult.data;

  try {
    const firebaseUser = await admin
      .auth()
      .createUser({ email, password, emailVerified: false });

    const uid = firebaseUser.uid;

    const verifyCode = Math.floor(100000 + Math.random() * 900000);

    const user = await UserModel.create({
      name,
      email,
      phoneNo,
      uid,
      verifyCode,
    });

    await verifyEmail(email);

    return Response.json({ user, error: false }, { status: CREATED });
  } catch (error: any) {
    let message = "Something went wrong";
    let statusCode = INTERNAL_SERVER_ERROR;

    if (error.code) {
      switch (error.code) {
        case "auth/email-already-exists":
          message = "The email address is already in use.";
          statusCode = CONFLICT;
          break;
        case "auth/invalid-email":
          message = "The email address is not valid.";
          statusCode = BAD_REQUEST;
          break;
        case "auth/invalid-password":
          message =
            "The password is not valid. It should meet the required criteria.";
          statusCode = BAD_REQUEST;
          break;
        case "auth/weak-password":
          message = "The password is too weak.";
          statusCode = BAD_REQUEST;
          break;
        default:
          message = "An unknown error occurred during user creation.";
      }
    }

    return apiResponseError({ message, statusCode });
  }
}
