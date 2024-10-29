import PropertyDetails from "@/components/ui/Property/PropertyDetails";
import { buyRentProperties } from "@/constants/buyRent";
import { HOME } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Property | Taal Mail",
};

interface Params {
  params: { id: string };
}

export default function PlotHouseDetails({ params }: Params) {
  const data = buyRentProperties.find((val) => val.id === params.id);

  if (!data) {
    redirect(HOME);
  }

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <PropertyDetails data={data} />
    </Stack>
  );
}
