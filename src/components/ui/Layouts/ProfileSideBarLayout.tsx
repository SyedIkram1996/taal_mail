"use client";

import IconText from "@/components/common/IconText";
import MUILink from "@/components/common/MUILink/MUILink";
import {
  BidBlueIcon,
  InfoCircleIcon,
  OffersIcon,
  PropertyManagerIcon,
} from "@/constants/images.routes";
import {
  MY_BIDS,
  MY_INFO,
  MY_OFFERS,
  MY_PROPERTY,
} from "@/constants/page.routes";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack,
} from "@mui/material";
import { usePathname } from "next/navigation";

import TextMd from "@/components/common/Text/TextMd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfileSideBarLayout = () => {
  const [value, setValue] = useState(0);
  const pathname = usePathname();
  const items = [
    {
      title: "My Info",
      link: MY_INFO,
      icon: InfoCircleIcon,
    },
    {
      title: "My Properties",
      link: MY_PROPERTY,
      icon: PropertyManagerIcon,
    },
    {
      title: "My Bids",
      link: MY_BIDS,
      icon: BidBlueIcon,
    },
    {
      title: "My Offers",
      link: MY_OFFERS,
      icon: OffersIcon,
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
          width: "14.3125rem",
        }}
      >
        <Stack
          sx={{
            gap: "1.5rem",
            mt: "4.81rem",
          }}
        >
          {items.map(({ title, link, icon }) => (
            <MUILink key={title} href={link}>
              <IconText
                text={title}
                sxRow={{
                  cursor: "pointer",
                  borderRadius: "0.35rem",
                  padding: "0.72rem 0.5rem",
                  backgroundColor:
                    pathname === link ? "var(--alice-blue)" : "transparent",
                }}
                sxText={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontWeight: pathname === link ? "700" : "400",
                }}
                icon={icon}
                iconWidth={30}
                iconHeight={30}
              />
            </MUILink>
          ))}
        </Stack>
      </Stack>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "initial", md: "none" },
          zIndex: "1",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            height: "auto",
            a: { px: "0", py: "0.5rem" },
          }}
        >
          {items.map((item) => (
            <BottomNavigationAction
              key={item.link}
              sx={{
                bgcolor:
                  item.link === pathname
                    ? "var(--anti-flash-white)"
                    : "transparent",
              }}
              label={
                <TextMd
                  text={item.title}
                  sx={{ textAlign: "center", fontSize: "0.75rem" }}
                />
              }
              LinkComponent={Link}
              href={item.link}
              icon={
                <Image
                  priority
                  src={item.icon}
                  alt={"icon"}
                  width={25}
                  height={25}
                />
              }
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ProfileSideBarLayout;
