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
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";

const ProfileSideBarLayout = () => {
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
    <Stack
      sx={{
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
  );
};

export default ProfileSideBarLayout;
