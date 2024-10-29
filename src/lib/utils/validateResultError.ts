export const validateResultError = (validationResult: any) => {
  return Response.json(
    { error: validationResult.error.errors },
    { status: 400 },
  );
};
