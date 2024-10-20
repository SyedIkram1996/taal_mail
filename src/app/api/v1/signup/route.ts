import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/lib/models/userModel";

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

    return Response.json({ data: { user }, error: false });
  } catch (error) {
    return Response.json({
      data: { message: "User already exist", error: true },
    });
  }
}
