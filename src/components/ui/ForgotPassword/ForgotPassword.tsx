"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import ShadowCard from "@/components/common/Card/ShadowCard";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextSm from "@/components/common/Text/TextSm";
import { LogoIcon } from "@/constants/images.routes";
import { HOME } from "@/constants/page.routes";
import { forgotPassword } from "@/services/auth.services";
import { toastError, toastSuccess } from "@/utils/toaster";
import { forgotPasswordSchema } from "@/validators/auth";
import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { toFormikValidationSchema } from "zod-formik-adapter";

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(forgotPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: async () => forgotPassword(formik.values.email),
    onSuccess: (data) => {
      toastSuccess("Reset password link sent to your email");
      formik.resetForm();
    },
    onError: (error) => {
      toastError(error.message);
    },
  });

  return (
    <>
      <MUILink
        href={HOME}
        sx={{ position: "absolute", left: { md: "1rem" }, top: "1rem" }}
      >
        <Image src={LogoIcon} priority alt="Logo" width={257} height={85} />
      </MUILink>

      <Stack
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{ width: "100%", paddingX: "1rem", alignItems: "center" }}
      >
        <ShadowCard
          sx={{
            padding: { xs: "1rem", md: "2rem" },
            width: { xs: "100%", md: "30rem" },
          }}
        >
          <TextSm
            text="Enter your email"
            sx={{ color: "var(--text-black)", mb: "1rem" }}
          />
          <LabelTopTextField
            placeholder="Email"
            sx={{
              minHeight: "5.38rem",
              ".MuiOutlinedInput-root": {
                height: "3rem",
                backgroundColor: "var(--anti-flash-white)",
                borderRadius: "0.3125rem",
                fieldset: {
                  border: "none",
                  borderRadius: "0.3125rem",
                },
                input: {
                  height: "1.9rem",
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
            {...formik.getFieldProps("email")}
            onChange={(e) => {
              formik.setFieldTouched("email", false);
              formik.handleChange(e);
            }}
          />

          <FilledButton
            text="Send Email"
            type="submit"
            loading={mutation.isPending}
            disabled={mutation.isPending}
            sx={{
              height: "3.0625rem",
              fontSize: "1rem",
              borderRadius: "0.3125rem",
              boxShadow: "none",
              backgroundColor: "var(--text-secondary)",
              ":hover": {
                boxShadow: "none",
                backgroundColor: "var(--text-secondary)",
              },
            }}
          />
        </ShadowCard>
      </Stack>
    </>
  );
};

export default ForgotPassword;
