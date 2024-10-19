import { IUser } from "@/interfaces/IUser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.headers.get("authorization");

  const user: IUser = {
    id: "1",
    name: "Ikram",
    age: "27",
    email: "ikram96211@gmail.com",
    role: "user",
  };

  return NextResponse.json({ data: { user, status: true } });
}
