"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";

const FeedbackForm = () => {
  return (
    <>
      <TextLg
        text="We want to hear from you!"
        sx={{ fontSize: "2rem", color: "var(--text-secondary)", mt: "6.19rem" }}
      />
      <TextMd
        text="Send us your queries and valuable feedback."
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />

      <LabelTopTextField
        placeholder="Email"
        sx={{
          width: "40.1875rem",
          pt: "1.81rem",
          pb: "2.87rem",
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
          width: "40.1875rem",
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
        }}
      />
    </>
  );
};

export default FeedbackForm;
