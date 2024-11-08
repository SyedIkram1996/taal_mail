"use client";

import MUILink from "@/components/common/MUILink/MUILink";
import BidIcon from "@/components/common/SvgIcons/BidIcon";
import InvestorIcon from "@/components/common/SvgIcons/InvestorIcon";
import UserIcon from "@/components/common/SvgIcons/UserIcon";
import SvgIconText from "@/components/common/SvgIconText";
import { LogoIcon } from "@/constants/images.routes";
import {
  ADMIN_BID_AND_FOLLOW_UP_PAGE,
  ADMIN_INVESTORS_PAGE,
  ADMIN_USERS_PAGE,
} from "@/constants/page.routes";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AdminSideBarLayout = () => {
  const [value, setValue] = useState(0);
  const pathname = usePathname();

  const items = [
    {
      title: "Users",
      link: ADMIN_USERS_PAGE,
      icon: UserIcon,
    },
    {
      title: "Bids and Follow Ups",
      link: ADMIN_BID_AND_FOLLOW_UP_PAGE,
      icon: BidIcon,
    },
    {
      title: "Investors",
      link: ADMIN_INVESTORS_PAGE,
      icon: InvestorIcon,
    },
  ];

  return (
    <>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: "white",
          px: "1.5rem",
          boxShadow: "-4px 0px 4px 0px rgba(0, 0, 0, 0.25) inset",
          gap: "1.5rem",
          width: "15.125rem",
          height: "100vh",
        }}
      >
        <Box
          sx={{ position: "relative", width: "11.6875rem", height: "4.125rem" }}
        >
          <Image src={LogoIcon} priority alt="Logo" fill />
        </Box>

        <Stack
          sx={{
            gap: "1.5rem",
          }}
        >
          {items.map(({ title, link, icon: Icon }, index) => (
            <MUILink key={title} href={link}>
              <SvgIconText
                text={title}
                sxRow={{
                  gap: "0.94rem",
                  cursor: "pointer",
                  borderRadius: "0.35rem",
                  padding: "0.72rem 0.5rem",
                  width: "12rem",
                  backgroundColor: pathname.includes(link)
                    ? "var(--alice-blue)"
                    : "transparent",
                }}
                sxText={{
                  fontSize: "1.25rem",
                  color: "var(--text-secondary)",
                  fontWeight: "400",
                }}
                icon={
                  <Icon
                    //@ts-ignore
                    sx={{
                      width: "30px",
                      height: "30px",
                      path: {
                        fill: index === 1 && "var(--text-secondary)",
                      },
                    }}
                  />
                }
              />
            </MUILink>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default AdminSideBarLayout;
