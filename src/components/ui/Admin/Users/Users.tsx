"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MUILink from "@/components/common/MUILink/MUILink";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import TextXl from "@/components/common/Text/TextXl";
import { IUser } from "@/interfaces/IUser";
import { Grid2, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import AdminSearch from "../AdminSearch";

interface Props {
  users: IUser[];
}

const Users = ({ users }: Props) => {
  const pathname = usePathname();
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
        {users.length ? (
          users.map((val, index) => (
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
                <TextSm text={val.name} sx={{ color: "var(--text-black)" }} />
              </Grid2>
              <Grid2 size={3}>
                <TextSm text={val.email} sx={{ color: "var(--text-black)" }} />
              </Grid2>
              <Grid2 size={3}>
                <TextSm
                  text={val.phoneNo}
                  sx={{ color: "var(--text-black)" }}
                />
              </Grid2>
              <Grid2 size={3}>
                <MUILink href={`${pathname}/${val.id}`}>
                  <FilledButton
                    text="Details"
                    sx={{
                      width: "7rem",
                      height: "2.125rem",
                      padding: "0",
                      fontSize: "1rem",
                    }}
                  />
                </MUILink>
              </Grid2>
            </Grid2>
          ))
        ) : (
          <TextXl text="No User Found" />
        )}
      </Stack>
    </AdminSearch>
  );
};

export default Users;
