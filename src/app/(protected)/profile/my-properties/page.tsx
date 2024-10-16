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

export default function MyPropertiesPage() {
  const user = cookies().get("user");
  if (!user) {
    redirect(LOGIN);
  }

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
