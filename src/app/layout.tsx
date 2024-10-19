import ResponsiveAppBar from "@/components/common/AppBar/AppBar";
import Footer from "@/components/common/Footer/Footer";
import UserState from "@/context/userContext";
import "@/styles/globals.css";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import { cookies } from "next/headers";
import * as React from "react";
import "swiper/css";

export const metadata: Metadata = {
  title: "Taal Mail",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = cookies().get("session");
  // const { data } = await useGetUserServer(session);
  const data = null;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <UserState>
              <ResponsiveAppBar userSession={session} userData={data} />
            </UserState>
            {props.children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
