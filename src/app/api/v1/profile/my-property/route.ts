import { CREATED, NOT_FOUND, OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { apiResponseError } from "@/lib/utils/apiResponseError";
import {
  cloudinaryDestroy,
  cloudinaryUpload,
} from "@/lib/utils/cloudinaryInitialize";
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
    let images = [];

    for (let i = 0; i < data.images.length; i++) {
      const uploadedImage = await cloudinaryUpload({
        image: data.images[i].url,
        folder: "/Properties",
      });

      images.push({
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      });
    }

    const property = await PropertyModel.create({
      ...data,
      images,
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
    const property = await PropertyModel.findOne({
      _id: id,
      createdBy: decodedToken.userId,
    });
    if (property) {
      return Response.json({ property, error: false }, { status: OK });
    } else {
      return apiResponseError({
        message: "Property not found",
        statusCode: NOT_FOUND,
      });
    }
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

    let finalImages = [];
    const images = data.images;
    for (let i = 0; i < images.length; i++) {
      if (images[i].public_id && images[i].delete) {
        await cloudinaryDestroy({ public_id: images[i].public_id as string });
      } else if (!images[i].public_id) {
        const uploadedImage = await cloudinaryUpload({
          image: data.images[i].url,
          folder: "/Properties",
        });

        finalImages.push({
          public_id: uploadedImage.public_id,
          url: uploadedImage.secure_url,
        });
      } else {
        finalImages.push({
          public_id: images[i].public_id,
          url: images[i].url,
        });
      }
    }

    const property = await PropertyModel.findByIdAndUpdate(data.id, {
      ...data,
      images: finalImages,
    });

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

    const property = await PropertyModel.findById(id);
    if (property) {
      for (let i = 0; i < property.images.length; i++) {
        await cloudinaryDestroy({ public_id: property.images[i].public_id });
      }
    }

    await PropertyModel.findByIdAndDelete(id);

    return Response.json({ error: false }, { status: CREATED });
  } else {
    return decodedToken.response;
  }
}
