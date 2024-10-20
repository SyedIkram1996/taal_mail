import dbConnect from "@/lib/db/dbConnect";
import { User } from "@/lib/models/userModel";
import "@/lib/utils/firebaseAdminInitialize";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();
  const { email, password } = await request.json();

  const users = await User.find();

  console.log(users);

  return Response.json({ data: { status: true, token: "" } });
}
