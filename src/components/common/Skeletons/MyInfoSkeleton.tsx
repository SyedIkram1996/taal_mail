import { ProfileIcon } from "@/constants/images.routes";
import { Skeleton, Stack } from "@mui/material";
import Image from "next/image";
import TextXs from "../Text/TextXs";

const MyInfoSkeleton = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        paddingX: "1rem",
      }}
    >
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
        <TextXs
          text={"Name:"}
          sx={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
        />
        <Skeleton
          sx={{
            width: "100%",
            height: "3rem",
            mb: "1.75rem",
            transform: "none",
          }}
        />

        <TextXs
          text={"Email:"}
          sx={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
        />
        <Skeleton
          sx={{
            width: "100%",
            height: "3rem",
            mb: "1.75rem",
            transform: "none",
          }}
        />

        <TextXs
          text={"Phone Number:"}
          sx={{
            fontSize: "1.125rem",
            color: "var(--old-silver)",
            fontWeight: "400",
          }}
        />
        <Skeleton
          sx={{
            width: "100%",
            height: "3rem",
            mb: "1.75rem",
            transform: "none",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MyInfoSkeleton;
