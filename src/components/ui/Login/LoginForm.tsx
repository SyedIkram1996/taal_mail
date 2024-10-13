"use client";

import { loginAction } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextXl from "@/components/common/Text/TextXl";
import TextXs from "@/components/common/Text/TextXs";
import { GoogleColorIcon } from "@/constants/images.routes";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <Stack
      sx={{
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "white",
          borderRadius: "1.875rem",
          width: "80%",
          margin: "6rem !important",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          height: "51.4375rem",
          padding: "3rem 4rem",
        }}
      >
        <TextXl
          text="Login"
          sx={{
            color: "var(--text-black)",
            alignSelf: "center",
            pb: "6.75rem",
          }}
        />

        <LabelTopTextField
          placeholder="Email"
          sx={{
            pb: "2.75rem",
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
          type="password"
          placeholder="Password"
          sx={{
            pb: "0.56rem",
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

        <TextXs
          text="Forgot Password"
          sx={{
            color: "var(--old-silver)",
            alignSelf: "flex-end",
            cursor: "pointer",
            pb: "2.75rem",
            textDecoration: "underLine",
          }}
        />

        <FilledButton
          text="Login"
          onClick={() => loginAction()}
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
            span: {
              cursor: "pointer",
              color: "var(--text-secondary)",
            },
          }}
        >
          Don’t have an account?
          <span> Signup</span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
