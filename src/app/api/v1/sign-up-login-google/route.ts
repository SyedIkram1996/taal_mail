import { TOKEN_SECRET } from "@/constants/environment";
import {
  BAD_REQUEST,
  CONFLICT,
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK,
} from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import "@/lib/utils/firebaseAdminInitialize";
import { validateResultError } from "@/lib/utils/validateResultError";
import { googleLoginSchema } from "@/validators/auth";
import admin from "firebase-admin";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  const validationResult = googleLoginSchema.safeParse(body);

  if (!validationResult.success) {
    return validateResultError(validationResult);
  }

  const { email, idToken } = validationResult.data;

  try {
    await admin.auth().verifyIdToken(idToken);
  } catch (error) {
    return apiResponseError({
      message: "Wrong Id Token",
      statusCode: BAD_REQUEST,
    });
  }

  const user = await UserModel.findOne({ email });

  if (user) {
    const token = jwt.sign(
      { email, role: user?.role, id: user?._id },
      TOKEN_SECRET!,
    );
    return Response.json({ user, token, error: false }, { status: OK });
  }

  try {
    if (!user) {
      const firebaseUser = await admin.auth().getUserByEmail(email);

      const uid = firebaseUser.uid;

      const user = await UserModel.create({
        name: firebaseUser.displayName,
        email,
        phoneNo: "+92",
        uid,
      });

      const token = jwt.sign(
        { email, role: user?.role, id: user?._id },
        TOKEN_SECRET!,
      );

      return Response.json({ user, token, error: false }, { status: CREATED });
    } else {
    }
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
