import ProfileSideBarLayout from "@/components/ui/Layouts/ProfileSideBarLayout";
import { Box, Stack } from "@mui/material";
import * as React from "react";

export default function ProfileLayout(props: { children: React.ReactNode }) {
  return (
    <Stack direction={"row"} sx={{ mt: { md: "6.5rem" } }}>
      <ProfileSideBarLayout />

      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
    </Stack>
  );
}
