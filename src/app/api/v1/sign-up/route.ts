import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";

import "@/lib/utils/firebaseAdminInitialize";
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

    return Response.json({ user, error: false }, { status: 201 });
  } catch (error: any) {
    let message = "Something went wrong";
    let statusCode = 500;

    if (error.code) {
      switch (error.code) {
        case "auth/email-already-exists":
          message = "The email address is already in use.";
          statusCode = 409;
          break;
        case "auth/invalid-email":
          message = "The email address is not valid.";
          statusCode = 400;
          break;
        case "auth/invalid-password":
          message =
            "The password is not valid. It should meet the required criteria.";
          statusCode = 400;
          break;
        case "auth/weak-password":
          message = "The password is too weak.";
          statusCode = 400;
          break;
        default:
          message = "An unknown error occurred during user creation.";
      }
    }

    return apiResponseError({ message, statusCode });
  }
}
