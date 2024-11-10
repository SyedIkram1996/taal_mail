import ResponsiveAppBar from "@/components/common/AppBar/AppBar";
import Footer from "@/components/common/Footer/Footer";
import ReactHotToaster from "@/components/common/ReactHotToaster/ReactHotToaster";
import Logout from "@/components/ui/Logout/Logout";
import {
  EMAIL_TEMPLATE_LOGO,
  WEBSITE_TITLE,
  WEBSITE_URL,
} from "@/constants/environment";
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
  metadataBase: new URL(WEBSITE_URL),
  title: WEBSITE_TITLE,
  openGraph: {
    type: "website",
    siteName: WEBSITE_TITLE,
    images: [
      {
        url: EMAIL_TEMPLATE_LOGO,
        width: 1200,
        height: 630,
        alt: "taal-mail",
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
  applicationName: WEBSITE_TITLE,
  appleWebApp: {
    title: WEBSITE_TITLE,
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
            <Logout />
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
