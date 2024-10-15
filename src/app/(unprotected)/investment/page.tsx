import Banner from "@/components/ui/Home/Banner";
import Investment from "@/components/ui/Investment/Investment";
import { Stack } from "@mui/material";

export default function InvestmentPage() {
  return (
    <Stack
      sx={{ alignItems: "center", overflow: "hidden", position: "relative" }}
    >
      <Banner text="Investments" sx={{ top: "16.5rem" }} />
      <Investment />
    </Stack>
  );
}
