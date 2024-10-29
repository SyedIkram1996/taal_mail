import ResponsiveAppBar from "@/components/common/AppBar/AppBar";
import Footer from "@/components/common/Footer/Footer";
import ReactHotToaster from "@/components/common/ReactHotToaster/ReactHotToaster";
import UserState from "@/context/userContext";
import { useGetUserServer } from "@/hooks/useGetUserServer";
import "@/styles/globals.css";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Metadata } from "next";
import { cookies } from "next/headers";
import * as React from "react";
import "swiper/css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Taal Mail",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const session = cookies().get("token");
  const { data } = await useGetUserServer(session);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ReactHotToaster />
            <UserState>
              <ResponsiveAppBar userSession={session} userData={data} />
            </UserState>
            <Providers>
              <>{props.children}</>
            </Providers>

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
