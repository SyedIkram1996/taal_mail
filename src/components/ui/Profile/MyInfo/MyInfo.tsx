"use client";

import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { ProfileIcon } from "@/constants/images.routes";
import { IUser } from "@/interfaces/IUser";
import { Stack } from "@mui/material";
import Image from "next/image";

interface Props {
  user: IUser;
}

const MyInfo = ({ user }: Props) => {
  return (
    <>
      <Stack
        sx={{
          mt: "2.69rem",
          mb: "4.69rem",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "10rem", md: "15.625rem" },
          height: { xs: "10rem", md: "15.625rem" },
          backgroundColor: "var(--text-secondary)",
          borderRadius: "50%",
          ".profileImage": {
            width: { xs: "100px", md: "150px" },
          },
        }}
      >
        <Image
          className="profileImage"
          src={ProfileIcon}
          alt="profile"
          width={150}
          height={150}
        />
      </Stack>

      <Stack
        sx={{
          maxWidth: { xs: "100%", md: "66rem" },
          width: "100%",
          padding: { xs: "1rem", md: "2.8rem 12.94rem" },
          backgroundColor: "var(--alice-blue)",
          borderRadius: "1.25rem",
          mb: "10.12rem",
        }}
      >
        <LabelTopTextField
          disabled
          placeholder="John Doe"
          label="Name:"
          value={user.name}
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
                px: { xs: "1rem", md: "2.31rem" },
              },
              ".Mui-disabled": {
                WebkitTextFillColor: "var(--old-silver)",
              },
            },
          }}
        />

        <LabelTopTextField
          disabled
          placeholder="John Doe.@gmail.com"
          label="Email:"
          value={user.email}
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
                px: { xs: "1rem", md: "2.31rem" },
              },
              ".Mui-disabled": {
                WebkitTextFillColor: "var(--old-silver)",
              },
            },
          }}
        />

        <LabelTopTextField
          disabled
          placeholder="+92 3456789012"
          label="Phone Number:"
          value={user.phoneNo}
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
                px: { xs: "1rem", md: "2.31rem" },
              },

              ".Mui-disabled": {
                WebkitTextFillColor: "var(--old-silver)",
              },
            },
          }}
        />
      </Stack>
    </>
  );
};

export default MyInfo;
