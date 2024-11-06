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
import "react-advanced-cropper/dist/style.css";
import "swiper/css";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://taal-mail.vercel.app"),
  title: "Taal Mail",
  openGraph: {
    type: "website",
    siteName: "Taal Mail",
    images: [
      {
        url: "https://res.cloudinary.com/taalmail/image/upload/v1730311074/taalmaillogo_khjusc.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Taal Mail",
  appleWebApp: {
    title: "Taal Mail",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const token = cookies().get("token");
  const { data } = await useGetUserServer(token);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ReactHotToaster />
            <UserState>
              <>
                <ResponsiveAppBar
                  userSession={token}
                  //   @ts-ignore
                  userData={data ? data.user : null}
                />

                <Providers>
                  <>{props.children}</>
                </Providers>
              </>
            </UserState>

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
