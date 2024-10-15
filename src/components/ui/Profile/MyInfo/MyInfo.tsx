"use client";

import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { ProfileIcon } from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";

const MyInfo = () => {
  return (
    <>
      <Stack
        sx={{
          mt: "2.69rem",
          mb: "4.69rem",
          justifyContent: "center",
          alignItems: "center",
          width: "15.625rem",
          height: "15.625rem",
          backgroundColor: "var(--text-secondary)",
          borderRadius: "50%",
        }}
      >
        <Image src={ProfileIcon} alt="profile" width={150} height={150} />
      </Stack>

      <Stack
        sx={{
          maxWidth: "66rem",
          width: "100%",
          padding: "2.8rem 12.94rem",
          backgroundColor: "var(--alice-blue)",
          borderRadius: "1.25rem",
          mb: "10.12rem",
        }}
      >
        <LabelTopTextField
          placeholder="John Doe"
          label="Name:"
          sxLabel={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
          sx={{
            pb: "1.75rem",
            ".MuiOutlinedInput-root": {
              height: "3rem",
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
            ".MuiInputBase-root": {
              input: {
                px: "2.31rem",
              },
            },
          }}
        />

        <LabelTopTextField
          placeholder="John Doe.@gmail.com"
          label="Email:"
          sxLabel={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
          sx={{
            pb: "1.75rem",
            ".MuiOutlinedInput-root": {
              height: "3rem",
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
            ".MuiInputBase-root": {
              input: {
                px: "2.31rem",
              },
            },
          }}
        />

        <LabelTopTextField
          placeholder="+92 3456789012"
          label="Phone Number:"
          sxLabel={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
          sx={{
            pb: "1.75rem",
            ".MuiOutlinedInput-root": {
              height: "3rem",
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
            ".MuiInputBase-root": {
              input: {
                px: "2.31rem",
              },
            },
          }}
        />
      </Stack>
    </>
  );
};

export default MyInfo;
