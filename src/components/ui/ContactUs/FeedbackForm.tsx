"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { contactUs } from "@/services/contactUs.services";
import { contactUsSchema } from "@/validators/contactUs";
import { Dialog, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

const FeedbackForm = () => {
  const [openFeedbackSentModal, setOpenFeedbackSentModal] = useState(false);
  const formik = useFormik<{ email: string; feedback: string }>({
    initialValues: {
      email: "",
      feedback: "",
    },

    onSubmit: () => {
      mutation.mutate();
    },

    validationSchema: toFormikValidationSchema(contactUsSchema),
  });

  const mutation = useMutation({
    mutationFn: async () =>
      contactUs(formik.values.email, formik.values.feedback),
    onSuccess: (data) => {
      setOpenFeedbackSentModal(true);
      formik.resetForm();
    },
    onError: (error) => {},
  });

  return (
    <>
      <Stack
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{ padding: { xs: "0.5rem", md: "0" } }}
      >
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
          sx={{
            textAlign: "center",
            a: { color: "var(--text-primary) !important" },
          }}
        >
          <span> Email:</span>{" "}
          <a href="mailto:taalmailpvt@gmail.com">taalmailpvt@gmail.com</a>
        </Typography>

        <LabelTopTextField
          name="email"
          value={formik.values.email}
          onChange={(e) => {
            formik.setFieldTouched("email", false);
            formik.handleChange(e);
          }}
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
          error={Boolean(formik.errors.email && formik.touched.email)}
          helperText={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""
          }
        />

        <LabelTopTextField
          name="feedback"
          value={formik.values.feedback}
          onChange={(e) => {
            formik.setFieldTouched("feedback", false);
            formik.handleChange(e);
          }}
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
          error={Boolean(formik.errors.feedback && formik.touched.feedback)}
          helperText={
            formik.errors.feedback && formik.touched.feedback
              ? formik.errors.feedback
              : ""
          }
        />

        <FilledButton
          loading={mutation.isPending}
          disabled={mutation.isPending}
          type="submit"
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

      <Dialog
        open={openFeedbackSentModal}
        PaperProps={{
          sx: {
            width: "10.625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem",
            pb: "1.19rem",
            alignItems: "center",
          }}
        >
          <TextMd
            text={"Feedback sent!"}
            sx={{
              width: "7rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />

          <FilledButton
            text="Ok"
            onClick={() => {
              setOpenFeedbackSentModal(false);
            }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
              mt: "1.86rem",
            }}
          />
        </Stack>
      </Dialog>
    </>
  );
};

export default FeedbackForm;
