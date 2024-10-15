import FeedbackForm from "@/components/ui/ContactUs/FeedbackForm";
import Banner from "@/components/ui/Home/Banner";
import { Stack } from "@mui/material";

export default function ContactUsPage() {
  return (
    <Stack
      sx={{ alignItems: "center", overflow: "hidden", position: "relative" }}
    >
      <Banner text="Contact US" sx={{ top: "16.5rem" }} />
      <FeedbackForm />
      {/* <Image
        src={BannerImage}
        alt="Banner"
        priority
        width={1440}
        height={647}
      />

      <Stack
        sx={{
          position: "absolute",
          top: "16.5rem",
          gap: "4.81rem",
          alignItems: "center",
        }}
      >
        <TextXl
          text="Contact US"
          sx={{
            width: "48.625rem",
            textAlign: "center",
            color: "white",
            textShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 6px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
          }}
        />
      </Stack> */}
    </Stack>
  );
}
