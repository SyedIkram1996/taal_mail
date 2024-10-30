import MyProperties from "@/components/ui/Profile/MyProperties/MyProperties";
import { MY_PROPERTIES } from "@/constants/api.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "My Properties | Taal Mail",
};

interface Params {
  searchParams: { classification: string };
}

export default async function MyPropertiesPage({ searchParams }: Params) {
  const { classification } = searchParams;
  const token = cookies().get("token");

  const response = await fetch(MY_PROPERTIES(classification), {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <MyProperties data={!data.error ? data.properties : []} token={token} />
    </Stack>
  );
}
