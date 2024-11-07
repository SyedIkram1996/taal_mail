import TextXs from "@/components/common/Text/TextXs";
import { Box, Stack } from "@mui/material";
import * as React from "react";

export default function ProfileLayout(props: { children: React.ReactNode }) {
  return (
    <Stack direction={"row"} sx={{ mt: { md: "6.5rem" } }}>
      {/* <ProfileSideBarLayout /> */}
      <TextXs text="Admin layout" />
      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
    </Stack>
  );
}
