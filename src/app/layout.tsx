import ResponsiveAppBar from "@/components/common/AppBar/AppBar";
import "@/styles/globals.css";
import theme from "@/theme";
import { Container, Stack } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import "swiper/css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ResponsiveAppBar />
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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
