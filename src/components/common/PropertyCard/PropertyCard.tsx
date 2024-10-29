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
import { IProperty } from "@/interfaces/IProperty";
import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import IconText from "../IconText";
import MUILink from "../MUILink/MUILink";
import TextMd from "../Text/TextMd";

interface Props {
  property: IProperty;
  children?: ReactNode;
  sx?: SxProps;
}

const PropertyCard = ({ property, children, sx }: Props) => {
  const {
    id,
    purpose,
    classification,
    type,
    duesCleared,
    status,
    city,
    location,
    area,
    price,
    bedrooms,
    bathrooms,
    features,
    name,
    description,
    images,
    allotmentLetter,
  } = property;

  return (
    <Stack
      sx={{
        alignItems: "center",
        width: { xs: "100%", md: "initial" },
        position: "relative",
      }}
    >
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
              src={images.length ? images[0].url : BannerImage}
              alt="Property"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Stack sx={{ padding: "0.94rem 1.94rem", gap: "1.19rem" }}>
            <TextMd noWrap text={name} sx={{ color: "var(--text-black)" }} />
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <IconText
                icon={BedroomIcon}
                iconWidth={20}
                iconHeight={20}
                text={bedrooms}
              />
              <IconText
                icon={BathroomIcon}
                iconWidth={20}
                iconHeight={20}
                text={bathrooms}
              />
              <IconText
                icon={AreaIcon}
                iconWidth={20}
                iconHeight={20}
                text={`${area.totalArea} ${area.type}`}
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
    </Stack>
  );
};

export default PropertyCard;
