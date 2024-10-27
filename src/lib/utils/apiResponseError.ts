import { INTERNAL_SERVER_ERROR } from "@/constants/statusCodes";

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
    statusCode: INTERNAL_SERVER_ERROR,
  });
};
export const tokenInvalidError = () => {
  return apiResponseError({
    message: "Invalid Token",
    statusCode: INTERNAL_SERVER_ERROR,
  });
};
