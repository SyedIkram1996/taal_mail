import MyInfo from "@/components/ui/Profile/MyInfo/MyInfo";
import { Stack } from "@mui/material";
import { Metadata } from "next";

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
