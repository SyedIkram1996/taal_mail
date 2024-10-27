import { INVALID_TOKEN, TOKEN_REQUIRED } from "@/constants/statusCodes";

export const apiResponseError = ({
  message,
  statusCode,
}: {
  message: string;
  statusCode: number;
}) => {
  return Response.json(
    {
      message: message,
      error: true,
    },
    { status: statusCode },
  );
};

export const tokenRequiredError = () => {
  return apiResponseError({
    message: "Token Required",
    statusCode: TOKEN_REQUIRED,
  });
};
export const tokenInvalidError = () => {
  return apiResponseError({
    message: "Invalid Token",
    statusCode: INVALID_TOKEN,
  });
};
