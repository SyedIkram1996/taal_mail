import { CREATED, OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { validateResultError } from "@/lib/utils/validateResultError";
import { verifyJwtToken } from "@/lib/utils/verifyJwtToken";
import { propertySchema } from "@/validators/property";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const body = await request.json();

    const validationResult = propertySchema.safeParse(body);

    if (!validationResult.success) {
      return validateResultError(validationResult);
    }

    const data = validationResult.data;

    const property = await PropertyModel.create({
      ...data,
      createdBy: decodedToken.userId,
    });

    return Response.json({ property, error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}

export async function GET(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    const property = await PropertyModel.findById(id);
    return Response.json({ property, error: false }, { status: OK });
  }
  {
    return decodedToken.response;
  }
}

export async function PUT(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const body = await request.json();

    const validationResult = propertySchema.safeParse(body);

    if (!validationResult.success) {
      return validateResultError(validationResult);
    }

    const data = validationResult.data;

    const property = await PropertyModel.findByIdAndUpdate(data.id, data);

    return Response.json({ property, error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}

export async function DELETE(request: NextRequest) {
  const decodedToken = verifyJwtToken(request);

  if (!decodedToken.error) {
    await dbConnect();
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    await PropertyModel.findByIdAndDelete(id);

    return Response.json({ error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}
