import FeedbackForm from "@/components/ui/ContactUs/FeedbackForm";
import Banner from "@/components/ui/Home/Banner";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Taal Mail",
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
