import { TOKEN_SECRET } from "@/constants/environment";
import { IJWT } from "@/interfaces/api";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { tokenInvalidError, tokenRequiredError } from "./apiResponseError";

export const verifyJwtToken = (request: NextRequest) => {
  let token = request.headers.get("authorization");

  if (!token) {
    return { error: true, response: tokenRequiredError() };
  }

  token = token.split(" ")[1];

  if (token && TOKEN_SECRET) {
    const decodedJwt = jwt.verify(token, TOKEN_SECRET) as IJWT;

    if (decodedJwt) {
      return {
        userEmail: decodedJwt.email,
        userId: decodedJwt.id,
        userRole: decodedJwt.role,
      };
    } else {
      return { error: true, response: tokenInvalidError() };
    }
  } else {
    return { error: true, response: tokenInvalidError() };
  }
};
