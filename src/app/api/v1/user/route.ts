import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const token = request.headers.get("authorization");

  // const user: IUser = {
  //   id: "1",
  //   name: "Ikram",
  //   age: "27",
  //   email: "ikram96211@gmail.com",
  //   role: "user",
  // };

  return Response.json({ name: "Hello" });
}
