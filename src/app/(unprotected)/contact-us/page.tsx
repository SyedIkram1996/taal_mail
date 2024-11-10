import FeedbackForm from "@/components/ui/ContactUs/FeedbackForm";
import Banner from "@/components/ui/Home/Banner";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...META_DATA({
    title: "Contact Us | Taal Mail",
    description:
      "Contact us for assistance with property listings, buying, selling, and renting inquiries. Our team is here to help with all your real estate needs.",
  }),
  keywords: [
    "contact real estate agent",
    "property inquiries",
    "contact support",
    "real estate contact info",
    "property assistance",
  ],
};

export default function ContactUsPage() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Banner text="Contact US" sx={{ top: "16.5rem" }} />
      <FeedbackForm />
    </Stack>
  );
}
