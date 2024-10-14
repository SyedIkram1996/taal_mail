import {
  AreaIcon,
  BannerImage,
  BathroomIcon,
  BedroomIcon,
  BuyIcon,
  HouseIcon,
  LocationIcon,
  PencilBlueIcon,
  TrashRedIcon,
} from "@/constants/images.routes";
import { SELL_PLOT } from "@/constants/page.routes";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import IconText from "../IconText";
import TextMd from "../Text/TextMd";

interface Props {
  id: string;
  title: string;
  bedRooms: string;
  bathRooms: string;
  area: string;
  type: string;
  location: string;
  showActions?: boolean;
}

const PropertyCard = ({
  id,
  title,
  bedRooms,
  bathRooms,
  area,
  type,
  location,
  showActions,
}: Props) => {
  return (
    <Stack
      sx={{
        borderRadius: "0.9375rem",
        border: "1px solid var(--platinum)",
        backgroundColor: "var(--text-white)",
        boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
        width: "18.5rem",
        minHeight: "26.8125rem",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "15.59231rem" }}>
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

      {showActions && (
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mb: "1.12rem",
            gap: "2.5rem",
          }}
        >
          <Stack
            href={`${SELL_PLOT}/${id}`}
            component={Link}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.9375rem",
              border: "1px solid var(--spanish-gray)",
              backgroundColor: "white",
              boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
              padding: "0.75rem",
              width: "fit-content",
            }}
          >
            <Image
              src={PencilBlueIcon}
              alt="pencilIcon"
              width={30}
              height={30}
            />
          </Stack>

          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.9375rem",
              border: "1px solid var(--spanish-gray)",
              backgroundColor: "white",
              boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
              padding: "0.75rem",
              width: "fit-content",
            }}
          >
            <Image src={TrashRedIcon} alt="pencilIcon" width={30} height={30} />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default PropertyCard;
