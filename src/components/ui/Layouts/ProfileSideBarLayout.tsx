"use client";

import MUILink from "@/components/common/MUILink/MUILink";

import {
  MY_BIDS_PAGE,
  MY_INFO,
  MY_OFFERS,
  MY_PROPERTIES_PAGE,
} from "@/constants/page.routes";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Stack,
} from "@mui/material";
import { usePathname } from "next/navigation";

import SvgIconText from "@/components/common/SvgIconText";
import BidIcon from "@/components/common/SvgIcons/BidIcon";
import InfoCircleIcon from "@/components/common/SvgIcons/InfoCircleIcon";
import OfferIcon from "@/components/common/SvgIcons/OfferIcon";
import PropertyManagerIcon from "@/components/common/SvgIcons/PropertyManagerIcon";
import TextMd from "@/components/common/Text/TextMd";
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
      link: MY_PROPERTIES_PAGE(),
      icon: PropertyManagerIcon,
    },
    {
      title: "My Bids",
      link: MY_BIDS_PAGE,
      icon: BidIcon,
    },
    {
      title: "My Offers",
      link: MY_OFFERS,
      icon: OfferIcon,
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
          {items.map(({ title, link, icon: Icon }) => (
            <MUILink key={title} href={link}>
              <SvgIconText
                text={title}
                sxRow={{
                  cursor: "pointer",
                  borderRadius: "0.35rem",
                  padding: "0.72rem 0.5rem",
                  backgroundColor: link.includes(pathname)
                    ? "var(--alice-blue)"
                    : "transparent",
                }}
                sxText={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontWeight: link.includes(pathname) ? "700" : "400",
                }}
                icon={
                  <Icon
                    sx={{
                      width: "30px",
                      height: "30px",
                      path: { fill: "var(--text-secondary)" },
                    }}
                  />
                }
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
          {items.map(({ icon: Icon, ...item }) => (
            <BottomNavigationAction
              key={item.link}
              sx={{
                bgcolor: item.link.includes(pathname)
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
              icon={<Icon sx={{ width: "25px", height: "25px" }} />}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ProfileSideBarLayout;
