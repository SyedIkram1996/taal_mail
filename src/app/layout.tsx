import ResponsiveAppBar from "@/components/common/AppBar/AppBar";
import Footer from "@/components/common/Footer/Footer";
import "@/styles/globals.css";
import theme from "@/theme";
import { Container, Stack } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { cookies } from "next/headers";
import * as React from "react";
import "swiper/css";

export default function RootLayout(props: { children: React.ReactNode }) {
  const user = cookies().get("user");
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ResponsiveAppBar user={user} />
            <Stack sx={{ alignItems: "center" }}>
              <Container
                maxWidth="xl"
                sx={{
                  padding: "0 !important",
                }}
              >
                {props.children}
              </Container>
            </Stack>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
