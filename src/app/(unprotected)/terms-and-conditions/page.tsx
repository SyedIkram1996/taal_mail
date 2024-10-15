import Banner from "@/components/ui/Home/Banner";
import TermsAndConditions from "@/components/ui/TermsAndConditions/TermsAndConditions";
import { Stack } from "@mui/material";

export default function ContactUsPage() {
  return (
    <Stack
      sx={{ alignItems: "center", overflow: "hidden", position: "relative" }}
    >
      <Banner text="Terms and Conditions" sx={{ top: "16.5rem" }} />
      <TermsAndConditions />
    </Stack>
  );
}
