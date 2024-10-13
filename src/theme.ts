"use client";
import { createTheme } from "@mui/material/styles";
import { Montserrat, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
