import MyProperties from "@/components/ui/Profile/MyProperties/MyProperties";
import { buyRentProperties } from "@/constants/buyRent";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Properties | Taal Mail",
};

export default async function MyPropertiesPage() {
  const data = buyRentProperties;
  // let dataFetch = await fetch("https://api.vercel.app/blog");
  // let posts = await dataFetch.json();

  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <MyProperties data={data} />
    </Stack>
  );
}
