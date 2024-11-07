import AdminSideBarLayout from "@/components/ui/Layouts/AdminSideBarLayout";
import { Box, Stack } from "@mui/material";
import * as React from "react";

export default function ProfileLayout(props: { children: React.ReactNode }) {
  return (
    <Stack direction={"row"}>
      <AdminSideBarLayout />
      <Box sx={{ flexGrow: 1, height: "100vh", overflowY: "auto" }}>
        {props.children}
      </Box>
    </Stack>
  );
}
