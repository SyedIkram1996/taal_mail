import TextLg from "@/components/common/Text/TextLg";
import PropertyDetails from "@/components/ui/Property/PropertyDetails/PropertyDetails";
import { PROPERTY } from "@/constants/api.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property | Taal Mail",
};

interface Params {
  params: { id: string };
}

export default async function PropertyDetailsPage({ params }: Params) {
  const id = params.id;

  const response = await fetch(`${PROPERTY}?id=${id}`, {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {data && !data.error ? (
        <PropertyDetails property={data.property} />
      ) : (
        <TextLg text={data.message} sx={{ mt: "3rem" }} />
      )}
    </Stack>
  );
}
