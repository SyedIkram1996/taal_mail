import MyInfo from "@/components/ui/Profile/MyInfo/MyInfo";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Info | Taal Mail",
};

export default function MyInfoPage() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        paddingX: "1rem",
      }}
    >
      <MyInfo />
    </Stack>
  );
}
