"use client";

import { CircularProgress, Skeleton, Stack } from "@mui/material";
import TextLg from "../Text/TextLg";

interface Props {
  title: string;
}

const AdminSearchSkeleton = ({ title }: Props) => {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: "var(--text-secondary)",
          padding: { xs: "1rem", md: "2.31rem 2.31rem 2.31rem 4.12rem" },
        }}
      >
        <TextLg
          text={title}
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "var(--text-white)",
            mb: { xs: "1rem", md: "3.31rem" },
            ml: { md: "2.38rem" },
          }}
        />

        <Skeleton
          sx={{
            height: "3.5rem",
            transform: "none",
            backgroundColor: "white",
          }}
        />
      </Stack>

      <Stack
        maxWidth={"900px"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "15rem",
        }}
      >
        <CircularProgress />
      </Stack>
    </Stack>
  );
};

export default AdminSearchSkeleton;
