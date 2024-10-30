import { OK } from "@/constants/statusCodes";
import dbConnect from "@/lib/db/dbConnect";
import PropertyModel from "@/lib/models/propertyModel";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await dbConnect();
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location");
  const properties = await PropertyModel.find({
    location: { $regex: location, $options: "i" },
  });

  const filteredProperties = properties.map((property) => {
    return {
      id: property.id,
      name: property.name,
      location: property.location,
    };
  });

  return Response.json(
    { data: { properties: filteredProperties }, error: false },
    { status: OK },
  );
}
