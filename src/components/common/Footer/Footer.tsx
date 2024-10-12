"use client";

import { followUs } from "@/constants/footer";
import { Logo2Icon } from "@/constants/images.routes";
import { navbarPages } from "@/constants/navbar";
import { montserrat } from "@/theme";
import { Stack } from "@mui/material";
import Image from "next/image";
import MUILink from "../MUILink/MUILink";
import TextSm from "../Text/TextSm";
import TextXs from "../Text/TextXs";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--light-blue)",
        padding: "3.88rem 4.31rem",
        gap: "1.69rem",
      }}
    >
      <Image src={Logo2Icon} priority alt="Logo2" width={245} height={118} />
      <Stack direction={"row"} sx={{ gap: "1.5rem" }}>
        {navbarPages.map(({ title, menu }) => (
          <Stack
            key={title}
            sx={{
              width: "8.25rem",
              gap: "0.94rem",
            }}
          >
            <TextSm
              text={title}
              sx={{
                fontWeight: "600",
                fontFamily: montserrat.style.fontFamily,
                color: "var(--text-black)",
              }}
            />
            {menu.map(({ title: menuTitle, link }, index) => (
              <MUILink key={index} href={link}>
                <TextXs
                  text={menuTitle}
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    textDecoration: "underLine",
                    color: "var(--text-black)",
                  }}
                />
              </MUILink>
            ))}
          </Stack>
        ))}
      </Stack>

      <Stack>
        <TextSm
          text={"Follow Us"}
          sx={{
            fontWeight: "600",
            fontFamily: montserrat.style.fontFamily,
            color: "var(--text-black)",
          }}
        />

        <Stack direction={"row"} sx={{ gap: "1.25rem" }}>
          {followUs.map(({ icon, link }, index) => (
            <MUILink key={index} href={link} target="_blank">
              <Image src={icon} priority alt="Logo2" width={30} height={30} />
            </MUILink>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
