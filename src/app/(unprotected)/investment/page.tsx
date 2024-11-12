import Banner from "@/components/ui/Home/Banner";
import Investment from "@/components/ui/Investment/Investment";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "Invest | Taal Mail",
    description:
      "Submit a property inquiry to receive more details about buying or renting real estate. Our team is ready to assist you with any questions.",
  }),
  keywords: [
    "property inquiry form",
    "real estate inquiries",
    "request property info",
    "buyer inquiries",
    "property questions",
  ],
};

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
