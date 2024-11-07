"use client";

import { auth } from "@/../firebase";
import { loginAction } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextXl from "@/components/common/Text/TextXl";
import TextXs from "@/components/common/Text/TextXs";
import { GoogleColorIcon, LogoIcon } from "@/constants/images.routes";
import { FORGOT_PASSWORD_PAGE, HOME, SIGN_UP } from "@/constants/page.routes";
import { ILogin } from "@/interfaces/api";
import { login } from "@/services/auth.services";
import { toastError } from "@/utils/toaster";
import { loginInSchema } from "@/validators/auth";
import { Box, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [loginError, setLoginError] = useState("");
  const redirectLink = searchParams.get("redirect");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<ILogin>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email }) => {
      setIsLoading(true);
      setLoginError("");
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(loginInSchema),
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { email, password } = formik.values;

      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password,
        );

        const user = userCredential.user;

        if (!user?.emailVerified) {
          toastError("Email is not verified");
          setLoginError("Email is not verified");
          setIsLoading(false);
          return auth.signOut();
        }

        if (userCredential.user) {
          const idToken = await userCredential.user.getIdToken();
          const uid = userCredential.user.uid;
          return login({ email, idToken, uid });
        }
      } catch (error: any) {
        let message = "Something went wrong";
        switch (error.code) {
          case "auth/invalid-credential":
            message = "Invalid Credentials";
            break;

          default:
            break;
        }

        throw Error(message);
      }
    },
    onSuccess: (data: any) => {
      if (data && data.data) {
        loginAction({ token: data.data.token, redirectLink });
      }
    },
    onError: (error) => {
      setLoginError(error.message);
      setIsLoading(false);
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
        <MUILink href={HOME} sx={{ display: { md: "none" } }}>
          <Image src={LogoIcon} priority alt="Logo" width={200} height={60} />
        </MUILink>

        <TextXl
          text="Login"
          sx={{
            color: "var(--text-black)",
            alignSelf: "center",
            pb: { xs: "2rem", md: "6.75rem" },
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

        <MUILink href={FORGOT_PASSWORD_PAGE} sx={{ alignSelf: "flex-end" }}>
          <TextXs
            text="Forgot Password"
            sx={{
              color: "var(--old-silver)",
              cursor: "pointer",
              pb: "2.75rem",
              textDecoration: "underLine",
            }}
          />
        </MUILink>

        <FilledButton
          text="Login"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
          // onClick={() => loginAction({ redirectLink })}
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

        {loginError && (
          <TextXs
            text={loginError}
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
            text="Or login with"
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
          Don’t have an account?
          <MUILink
            href={SIGN_UP}
            sx={{
              cursor: "pointer",
              color: "var(--text-secondary) !important",
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            {" "}
            Signup
          </MUILink>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
