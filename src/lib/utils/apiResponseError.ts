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
