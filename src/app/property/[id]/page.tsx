import PropertyDetails from "@/components/ui/Property/PropertyDetails";
import { buyRentProperties } from "@/constants/buyRent";
import { HOME } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { redirect } from "next/navigation";

interface Params {
  params: { id: string };
}

export default function PlotHouseDetails({ params }: Params) {
  console.log(params);

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
