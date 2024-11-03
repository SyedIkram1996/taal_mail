"use client";

import ImageCropperDialog from "@/components/common/ImageCropperDialog/ImageCropperDialog";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { ProfileIcon } from "@/constants/images.routes";
import { IUser } from "@/interfaces/IUser";
import { Stack } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface Props {
  user: IUser;
  token?: RequestCookie;
}

const MyInfo = ({ user, token }: Props) => {
  const [tempAvatar, setTempAvatar] = useState("");
  const [openChangeImage, setOpenChangeImage] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar ? user.avatar.url : "");

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setTempAvatar(URL.createObjectURL(file));
      setOpenChangeImage(true);
    }
    event.target.value = "";
  };

  return (
    <>
      <Stack
        component={"label"}
        sx={{
          mt: "2.69rem",
          mb: "4.69rem",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "10rem", md: "15.625rem" },
          height: { xs: "10rem", md: "15.625rem" },
          backgroundColor: "var(--text-secondary)",
          borderRadius: "50%",
          cursor: "pointer",
          ".profileImage": {
            width: {
              xs: avatar ? "100%" : "100px",
              md: avatar ? "100%" : "150px",
            },
            height: avatar ? "100%" : "150px",
            borderRadius: avatar ? "50%" : "0",
          },
          input: {
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            bottom: 0,
            left: 0,
            whiteSpace: "nowrap",
            width: 1,
          },
        }}
      >
        <Image
          className="profileImage"
          src={avatar ? avatar : ProfileIcon}
          alt="profile"
          width={150}
          height={150}
        />
        <input
          type="file"
          onChange={handleChangeImage}
          multiple
          accept="image/*"
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

      <ImageCropperDialog
        openChangeImage={openChangeImage}
        setOpenChangeImage={setOpenChangeImage}
        setAvatar={setAvatar}
        tempAvatar={tempAvatar}
        token={token}
      />
    </>
  );
};

export default MyInfo;
