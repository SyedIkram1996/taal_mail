import {
  AreaIcon,
  BannerImage,
  BathroomIcon,
  BedroomIcon,
  BuyIcon,
  HouseIcon,
  LocationIcon,
} from "@/constants/images.routes";
import { PROPERTY } from "@/constants/page.routes";
import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import IconText from "../IconText";
import MUILink from "../MUILink/MUILink";
import TextMd from "../Text/TextMd";

interface Props {
  id: string;
  title: string;
  bedRooms: string;
  bathRooms: string;
  area: string;
  type: string;
  location: string;
  children?: ReactNode;
  sx?: SxProps;
}

const PropertyCard = ({
  id,
  title,
  bedRooms,
  bathRooms,
  area,
  type,
  location,
  children,
  sx,
}: Props) => {
  return (
    <MUILink href={`${PROPERTY}/${id}`} sx={{ width: "100%" }}>
      <Stack
        sx={{
          borderRadius: "0.9375rem",
          border: "1px solid var(--platinum)",
          backgroundColor: "var(--text-white)",
          boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
          width: { md: "18.5rem" },
          minHeight: "26.8125rem",
          overflow: "hidden",
          cursor: "pointer",
          ...sx,
        }}
      >
        <Box
          sx={{ position: "relative", width: "100%", height: "15.59231rem" }}
        >
          <Image
            priority
            src={BannerImage}
            alt="Property"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Stack sx={{ padding: "0.94rem 1.94rem", gap: "1.19rem" }}>
          <TextMd text={title} sx={{ color: "var(--text-black)" }} />
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <IconText
              icon={BedroomIcon}
              iconWidth={20}
              iconHeight={20}
              text={bedRooms}
            />
            <IconText
              icon={BathroomIcon}
              iconWidth={20}
              iconHeight={20}
              text={bathRooms}
            />
            <IconText
              icon={AreaIcon}
              iconWidth={20}
              iconHeight={20}
              text={area}
            />
          </Stack>

          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <IconText
              icon={BuyIcon}
              iconWidth={30}
              iconHeight={30}
              text={"Buy"}
            />
            <IconText
              icon={HouseIcon}
              iconWidth={20}
              iconHeight={20}
              text={type}
            />
          </Stack>

          <IconText
            icon={LocationIcon}
            iconWidth={20}
            iconHeight={20}
            text={location}
          />
        </Stack>

        {children}
      </Stack>
    </MUILink>
  );
};

export default PropertyCard;
