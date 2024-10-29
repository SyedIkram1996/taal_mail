import { Skeleton, Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";
import AreaIcon from "../SvgIcons/AreaIcon";
import BathroomIcon from "../SvgIcons/BathroomIcon";
import BedroomIcon from "../SvgIcons/BedroomIcon";
import BuyIcon from "../SvgIcons/BuyIcon";
import HouseIcon from "../SvgIcons/HouseIcon";
import LocationIcon from "../SvgIcons/LocationIcon";

interface Props {
  children?: ReactNode;
  sx?: SxProps;
}

const PropertySkeleton = ({ children, sx }: Props) => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        width: { xs: "100%", md: "initial" },
        position: "relative",
      }}
    >
      <Stack
        sx={{
          borderRadius: "0.9375rem",
          border: "1px solid var(--platinum)",
          backgroundColor: "var(--text-white)",
          boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
          width: { xs: "100%", md: "18.5rem" },
          minHeight: "26.8125rem",
          overflow: "hidden",
          cursor: "pointer",
          ...sx,
        }}
      >
        <Skeleton
          sx={{ height: "15.9231rem", transform: "none", borderRadius: "0" }}
        />

        <Stack sx={{ padding: "0.94rem 1.94rem", gap: "1.19rem" }}>
          <Skeleton />
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            {[BedroomIcon, BathroomIcon, AreaIcon].map((Icon) => (
              <Stack
                direction={"row"}
                sx={{ gap: "0.25rem", alignItems: "center" }}
              >
                <Icon />
                <Skeleton sx={{ width: "40px", height: "30px" }} />
              </Stack>
            ))}
          </Stack>

          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            {[BuyIcon, HouseIcon].map((Icon) => (
              <Stack
                direction={"row"}
                sx={{ gap: "0.25rem", alignItems: "center" }}
              >
                <Icon />
                <Skeleton sx={{ width: "40px", height: "30px" }} />
              </Stack>
            ))}
          </Stack>

          <Stack
            direction={"row"}
            sx={{ gap: "0.25rem", alignItems: "center" }}
          >
            <LocationIcon />
            <Skeleton sx={{ width: "100%", height: "30px" }} />
          </Stack>
        </Stack>

        {children}
      </Stack>
    </Stack>
  );
};

export default PropertySkeleton;
