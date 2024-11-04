import { OK } from "@/constants/statusCodes";
import { IProperty } from "@/interfaces/IProperty";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import ApiFeatures from "@/lib/utils/apifeatures";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await dbConnect();
  const searchParams = request.nextUrl.searchParams;
  const purpose = searchParams.get("purpose") || undefined;
  const page = searchParams.get("page") || undefined;
  const classification = searchParams.get("classification") || undefined;
  const type = searchParams.get("type") || undefined;
  const minPrice = searchParams.get("minPrice") || undefined;
  const maxPrice = searchParams.get("maxPrice") || undefined;
  const location = searchParams.get("location") || undefined;
  const totalArea = searchParams.get("totalArea") || undefined;
  const areaType = searchParams.get("areaType") || undefined;
  const bedrooms = searchParams.get("bedrooms") || undefined;
  const bathrooms = searchParams.get("bathrooms") || undefined;
  const keyword = searchParams.get("keyword") || undefined;

  const apiFeatures = new ApiFeatures<IProperty>(PropertyModel.find(), {
    purpose,
    page,
    classification,
    type,
    minPrice,
    maxPrice,
    location,
    totalArea,
    areaType,
    bedrooms,
    bathrooms,
    keyword,
  })
    .search()
    .searchKeyword()
    .filter();

  const properties = await apiFeatures.query;

  return Response.json({ properties, error: false }, { status: OK });
}
