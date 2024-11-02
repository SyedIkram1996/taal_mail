"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { Stack, Typography } from "@mui/material";

const FeedbackForm = () => {
  return (
    <Stack sx={{ padding: { xs: "0.5rem", md: "0" } }}>
      <TextLg
        text="We want to hear from you!"
        sx={{
          fontSize: { xs: "1.8rem", md: "2rem" },
          color: "var(--text-secondary)",
          mt: { xs: "3rem", md: "6.19rem" },
          textAlign: "center",
        }}
      />
      <TextMd
        text="Send us your queries and valuable feedback"
        sx={{
          fontWeight: "400",
          color: "var(--text-black)",
          px: { xs: "0.5rem", md: "0" },
          textAlign: "center",
        }}
      />

      <Typography
        component={"a"}
        sx={{
          textAlign: "center",
          a: { color: "var(--text-primary) !important" },
        }}
      >
        <span> Email:</span>{" "}
        <a href="mailto:taalmailpvt@gmail.com">taalmailpvt@gmail.com</a>
      </Typography>

      <LabelTopTextField
        placeholder="Email"
        sx={{
          width: { xs: "100%", md: "40.1875rem" },
          pt: "1.81rem",
          pb: "2.87rem",
          px: "0.5rem",
          ".MuiOutlinedInput-root": {
            backgroundColor: "var(--anti-flash-white)",
            borderRadius: "0.3125rem",
            fieldset: {
              border: "none",
              borderRadius: "0.3125rem",
            },
            "input::placeholder": {
              fontSize: "1rem",
              color: "var(--old-silver)",
              opacity: "1",
            },
          },
        }}
      />

      <LabelTopTextField
        placeholder="Feedback"
        multiline
        rows={10}
        sx={{
          width: { xs: "100%", md: "40.1875rem" },
          px: "0.5rem",
          ".MuiOutlinedInput-root": {
            backgroundColor: "var(--anti-flash-white)",
            borderRadius: "0.3125rem",
            fieldset: {
              border: "none",
              borderRadius: "0.3125rem",
            },
            "input::placeholder": {
              fontSize: "1rem",
              color: "var(--old-silver)",
              opacity: "1",
            },
          },
        }}
      />

      <FilledButton
        text="Send Feedback"
        sx={{
          mt: "2.87rem",
          mb: "5.81rem",
          width: "14.5rem",
          fontSize: "1.25rem",
          padding: "0",
          height: "3.4375rem",
          alignSelf: { xs: "center" },
        }}
      />
    </Stack>
  );
};

export default FeedbackForm;
