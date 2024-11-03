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
import { formatAmountToPKR } from "@/utils/maths";
import { Box, Grid2, Stack, SxProps } from "@mui/material";
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

  const coverImage = images.length ? images.find((val) => val.coverImage) : "";

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
              src={
                coverImage
                  ? coverImage.url
                  : images.length
                    ? images[0].url
                    : BannerImage
              }
              alt="Property"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Stack sx={{ padding: "0.94rem 1.94rem", gap: "1.19rem" }}>
            <TextMd
              noWrap
              text={`${price.currency} ${formatAmountToPKR(Number(price.askingPrice))}`}
              sx={{ color: "var(--text-black)" }}
            />
            <Grid2 container>
              <Grid2 size={4}>
                <IconText
                  noWrap
                  icon={BedroomIcon}
                  iconWidth={20}
                  iconHeight={20}
                  text={bedrooms}
                />
              </Grid2>
              <Grid2 size={4}>
                <IconText
                  noWrap
                  icon={BathroomIcon}
                  iconWidth={20}
                  iconHeight={20}
                  text={bathrooms}
                />
              </Grid2>
              <Grid2 size={4}>
                <IconText
                  noWrap
                  icon={AreaIcon}
                  iconWidth={20}
                  iconHeight={20}
                  text={`${area.totalArea} ${area.type}`}
                />
              </Grid2>
            </Grid2>

            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <IconText
                noWrap
                icon={BuyIcon}
                iconWidth={30}
                iconHeight={30}
                text={"Buy"}
              />
              <IconText
                noWrap
                icon={HouseIcon}
                iconWidth={20}
                iconHeight={20}
                text={type}
              />
            </Stack>

            <IconText
              noWrap
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
