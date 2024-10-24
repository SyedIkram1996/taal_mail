"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextXl from "@/components/common/Text/TextXl";
import TextXs from "@/components/common/Text/TextXs";
import { GoogleColorIcon } from "@/constants/images.routes";
import { LOGIN } from "@/constants/page.routes";
import { ISignUp } from "@/interfaces/api";
import { signUp } from "@/services/auth.services";
import { toastSuccess } from "@/utils/toaster";
import { signUpSchema } from "@/validators/auth";
import { Box, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

const SignUpForm = () => {
  const [signUpError, setSignUpError] = useState("");
  const router = useRouter();

  const formik = useFormik<ISignUp>({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      setSignUpError("");
      router.prefetch(LOGIN);
      mutation.mutate();
    },

    validationSchema: toFormikValidationSchema(signUpSchema),
  });

  const mutation = useMutation({
    mutationFn: async () => signUp(formik.values),
    onSuccess: (data) => {
      toastSuccess("Account created! Verify your email address");
      router.replace(LOGIN);
    },
    onError: (error) => {
      console.log("error", error);
      setSignUpError(error.message);
    },
  });

  return (
    <Stack
      sx={{
        alignItems: "center",
      }}
    >
      <Stack
        onSubmit={formik.handleSubmit}
        component={"form"}
        sx={{
          backgroundColor: "white",
          borderRadius: "1.875rem",
          width: {
            xs: "90%",
            md: "25rem",
            lg: "35.125rem",
            xl: "38.125rem",
          },
          margin: { xs: "1rem", md: "3rem" },
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          height: { md: "51.4375rem" },
          padding: { xs: "1rem", md: "3rem 4rem" },
          boxSizing: "border-box",
        }}
      >
        <TextXl
          text="Signup"
          sx={{
            color: "var(--text-black)",
            alignSelf: "center",
            pb: { xs: "2rem", md: "3rem" },
          }}
        />

        <LabelTopTextField
          placeholder="Name"
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
              "input::placeholder": {
                fontSize: "1rem",
                color: "var(--old-silver)",
                opacity: "1",
              },
            },
          }}
          error={Boolean(formik.errors.name && formik.touched.name)}
          helperText={
            formik.errors.name && formik.touched.name ? formik.errors.name : ""
          }
          {...formik.getFieldProps("name")}
          onChange={(e) => {
            formik.setFieldTouched("name", false);
            formik.handleChange(e);
          }}
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

        <LabelTopTextField
          placeholder="+92 Phone Number"
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
              "input::placeholder": {
                fontSize: "1rem",
                color: "var(--old-silver)",
                opacity: "1",
              },
            },
          }}
          error={Boolean(formik.errors.phoneNo && formik.touched.phoneNo)}
          helperText={
            formik.errors.phoneNo && formik.touched.phoneNo
              ? formik.errors.phoneNo
              : ""
          }
          {...formik.getFieldProps("phoneNo")}
          onChange={(e) => {
            formik.setFieldTouched("phoneNo", false);
            formik.handleChange(e);
          }}
        />

        <LabelTopTextField
          type="password"
          placeholder="Password"
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
              "input::placeholder": {
                fontSize: "1rem",
                color: "var(--old-silver)",
                opacity: "1",
              },
            },
          }}
          error={Boolean(formik.errors.password && formik.touched.password)}
          helperText={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : ""
          }
          {...formik.getFieldProps("password")}
          onChange={(e) => {
            formik.setFieldTouched("password", false);
            formik.handleChange(e);
          }}
        />

        <LabelTopTextField
          type="password"
          placeholder="Confirm Password"
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
              "input::placeholder": {
                fontSize: "1rem",
                color: "var(--old-silver)",
                opacity: "1",
              },
            },
          }}
          error={Boolean(
            formik.errors.confirmPassword && formik.touched.confirmPassword,
          )}
          helperText={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
          {...formik.getFieldProps("confirmPassword")}
          onChange={(e) => {
            formik.setFieldTouched("confirmPassword", false);
            formik.handleChange(e);
          }}
        />

        <FilledButton
          text="Signup"
          type="submit"
          // onClick={() => loginAction({ redirectLink })}
          loading={mutation.isPending}
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

        {signUpError && (
          <TextXs
            text={signUpError}
            sx={{ color: "var(--error)", textAlign: "center", mt: "0.5rem" }}
          />
        )}

        <Stack
          direction={"row"}
          sx={{ gap: "1.11rem", alignItems: "center", py: "2.75rem" }}
        >
          <Box
            sx={{
              flex: "1",
              height: "0.0625rem",
              backgroundColor: "var(--spanish-gray)",
            }}
          />
          <TextXs
            text="Or Signup with"
            sx={{
              fontSize: "0.75rem",
              color: "var(--spanish-gray)",
            }}
          />
          <Box
            sx={{
              flex: "1",
              height: "0.0625rem",
              backgroundColor: "var(--spanish-gray)",
            }}
          />
        </Stack>

        <FilledButton
          secondary
          text="Google"
          startIcon={
            <Image
              priority
              src={GoogleColorIcon}
              alt={"google icon"}
              width={30}
              height={30}
            />
          }
          sx={{
            height: "3.125rem",
            gap: "0.63rem",
            fontSize: "1rem",
            borderRadius: "0.3125rem",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
          }}
        />

        <Typography
          sx={{
            pt: "2.75rem",
            fontSize: "0.75rem",
            color: "var(--spanish-gray)",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Already have an account?
          <MUILink
            href={LOGIN}
            sx={{
              cursor: "pointer",
              color: "var(--text-secondary) !important",
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            {" "}
            Login
          </MUILink>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUpForm;
