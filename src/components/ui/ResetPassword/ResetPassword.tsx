"use client";

import { auth } from "@/../firebase";
import FilledButton from "@/components/common/Button/FilledButton";
import ShadowCard from "@/components/common/Card/ShadowCard";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextSm from "@/components/common/Text/TextSm";
import { LogoIcon } from "@/constants/images.routes";
import { HOME, LOGIN } from "@/constants/page.routes";
import { toastSuccess } from "@/utils/toaster";
import { resetPasswordSchema } from "@/validators/auth";
import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Props {
  oobCode: string;
}

const ResetPassword = ({ oobCode }: Props) => {
  const [isInvalidCode, setIsInvalidCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {
      setIsInvalidCode("");
      setLoading(true);
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(resetPasswordSchema),
  });

  const mutation = useMutation({
    mutationFn: async () => {
      try {
        await auth.confirmPasswordReset(oobCode, formik.values.password);
      } catch (error: any) {
        if (error.code === "auth/invalid-action-code") {
          setIsInvalidCode("Invalid code / Code Expired");
        }

        throw Error();
      }
    },
    onSuccess: (data) => {
      toastSuccess("Password reset successfully");
      router.replace(LOGIN);
    },
    onError: (error) => {
      setLoading(false);
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
            text="Create a new password"
            sx={{ color: "var(--text-black)", mb: "1rem" }}
          />

          <LabelTopTextField
            type="password"
            placeholder="New Password"
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
            placeholder="Confirm New Password"
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
            text="Reset Password"
            type="submit"
            loading={loading}
            disabled={loading}
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

          {isInvalidCode && (
            <TextSm
              text={`Error: (${isInvalidCode})`}
              sx={{ color: "var(--error)", mt: "0.25rem" }}
            />
          )}
        </ShadowCard>
      </Stack>
    </>
  );
};

export default ResetPassword;
