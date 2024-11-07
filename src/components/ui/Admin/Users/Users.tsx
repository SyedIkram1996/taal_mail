"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import { Grid2, Stack } from "@mui/material";
import AdminSearch from "../AdminSearch";

const Users = () => {
  return (
    <AdminSearch title="USERS">
      <Grid2
        container
        sx={{
          maxWidth: "64.4375rem",
          width: "100%",
          alignItems: "center",
          padding: "1.5rem 2.31rem",
        }}
      >
        <Grid2 size={3}>
          <TextMd text="Name" sx={{ color: "var(--text-black)" }} />
        </Grid2>
        <Grid2 size={3}>
          <TextMd text="Email" sx={{ color: "var(--text-black)" }} />
        </Grid2>
        <Grid2 size={3}>
          <TextMd text="Phone Number" sx={{ color: "var(--text-black)" }} />
        </Grid2>
        <Grid2 size={3}></Grid2>
      </Grid2>

      <Stack
        sx={{
          gap: "2.19rem",
        }}
      >
        {Array.from({ length: 10 }).map((val, index) => (
          <Grid2
            container
            sx={{
              maxWidth: "64.4375rem",
              width: "100%",
              boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.25)",
              borderRadius: "0.625rem",
              alignItems: "center",
              padding: "1.5rem 2.31rem",
            }}
          >
            <Grid2 size={3}>
              <TextSm text="John Doe" sx={{ color: "var(--text-black)" }} />
            </Grid2>
            <Grid2 size={3}>
              <TextSm
                text="John Doe@gmail.com"
                sx={{ color: "var(--text-black)" }}
              />
            </Grid2>
            <Grid2 size={3}>
              <TextSm
                text="+92 1234567890"
                sx={{ color: "var(--text-black)" }}
              />
            </Grid2>
            <Grid2 size={3}>
              <FilledButton
                text="Details"
                sx={{
                  width: "7rem",
                  height: "2.125rem",
                  padding: "0",
                  fontSize: "1rem",
                }}
              />
            </Grid2>
          </Grid2>
        ))}
      </Stack>
    </AdminSearch>
  );
};

export default Users;
