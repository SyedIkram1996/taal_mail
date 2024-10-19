import MyProperties from "@/components/ui/Profile/MyProperties/MyProperties";
import { buyRentProperties } from "@/constants/buyRent";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Properties | Taal Mail",
};

export default async function MyPropertiesPage() {
  const data = buyRentProperties;

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
