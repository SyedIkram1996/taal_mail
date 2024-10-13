import Filters from "@/components/ui/Buy/Filters";
import { BUY_PLOT } from "@/constants/page.routes";
import { EPropertyType } from "@/enums/enums";
import { Stack } from "@mui/material";
import { redirect } from "next/navigation";
const { PLOT, HOUSE } = EPropertyType;

interface Params {
  params: { plotHouse: string };
  searchParams: { query?: string; page?: string };
}

export default function Buy({ params, searchParams }: Params) {
  if (
    params.plotHouse.toLowerCase() === PLOT ||
    params.plotHouse.toLowerCase() === HOUSE
  ) {
  } else {
    redirect(BUY_PLOT);
  }
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Filters />
    </Stack>
  );
}
