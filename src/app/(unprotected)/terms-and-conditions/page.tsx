import Banner from "@/components/ui/Home/Banner";
import TermsAndConditions from "@/components/ui/TermsAndConditions/TermsAndConditions";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "Terms & Conditions | Taal Mail",
    description:
      "Review our terms and conditions for using this property buying and selling platform. Understand the policies governing transactions and site use.",
  }),
  keywords: [
    "terms and conditions",
    "website policies",
    "property transaction policies",
    "user terms",
    "real estate terms",
  ],
};

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
