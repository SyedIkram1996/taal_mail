import { areas } from "@/constants/filters";
import { BannerImage } from "@/constants/images.routes";
import { PROPERTY } from "@/constants/page.routes";
import { IProperty } from "@/interfaces/IProperty";
import { formatAmountToPKR } from "@/utils/maths";
import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import MUILink from "../MUILink/MUILink";
import SvgIconText from "../SvgIconText";
import BuyIcon from "../SvgIcons/BuyIcon";
import HouseIcon from "../SvgIcons/HouseIcon";
import LocationIcon from "../SvgIcons/LocationIcon";
import TextMd from "../Text/TextMd";
import BedsBathsArea from "./BedsBathsArea";

interface Props {
  property: IProperty;
  children?: ReactNode;
  disableLink?: boolean;
  sx?: SxProps;
}

const PropertyCard = ({ property, children, disableLink, sx }: Props) => {
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
      <MUILink
        href={disableLink ? "" : `${PROPERTY}/${id}`}
        sx={{ width: "100%" }}
      >
        <Stack
          sx={{
            borderRadius: "0.9375rem",
            border: "1px solid var(--platinum)",
            backgroundColor: "var(--text-white)",
            boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
            width: { md: "18.5rem" },
            minHeight: images.length > 0 ? "26.8125rem" : "fit-content",
            overflow: "hidden",
            cursor: disableLink ? "initial" : "pointer",
            ...sx,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "15.59231rem",
            }}
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

            <BedsBathsArea
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              area={`${area.totalArea} ${areas.find((val) => val.value === area.type)?.title}`}
            />

            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <SvgIconText
                noWrap
                icon={<BuyIcon sx={{ width: "30px", height: "30px" }} />}
                text={"Buy"}
              />

              <SvgIconText
                noWrap
                icon={<HouseIcon sx={{ width: "22px", height: "22px" }} />}
                text={type}
              />
            </Stack>

            <SvgIconText
              noWrap
              icon={<LocationIcon sx={{ width: "22px", height: "22px" }} />}
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
