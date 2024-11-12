import MyProperties from "@/components/ui/Profile/MyProperties/MyProperties";
import { MY_PROPERTIES } from "@/constants/api.routes";
import { META_DATA } from "@/utils/seo";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  ...META_DATA({
    title: "My Properties | Taal Mail",
    description:
      "View and manage all properties you have listed for sale or rent. Easily update property details and track engagement.",
  }),
  keywords: [
    "my listed properties",
    "view my properties",
    "listed property details",
    "property management dashboard",
  ],
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
