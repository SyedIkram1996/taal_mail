import { CircularProgress, Grid2, Skeleton, Stack } from "@mui/material";
import ShadowCard from "../Card/ShadowCard";
import AreaIcon from "../SvgIcons/AreaIcon";
import BathroomIcon from "../SvgIcons/BathroomIcon";
import BedroomIcon from "../SvgIcons/BedroomIcon";
import HouseIcon from "../SvgIcons/HouseIcon";
import TextLg from "../Text/TextLg";

const PropertyDetailsSkeleton = () => {
  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "31.625rem",
          backgroundColor: "var(--anti-flash-white)",
        }}
      >
        <CircularProgress />
      </Stack>
      <Stack
        sx={{ padding: { xs: "1rem", md: "2rem" }, paddingBottom: "4.69rem" }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Skeleton
              sx={{
                width: "15rem",
                height: "2rem",
                transform: "none",
              }}
            />
            <Stack
              direction={"row"}
              sx={{
                gap: "2rem",
                mt: "2rem",
                flexWrap: { xs: "wrap", md: "initial" },
              }}
            >
              {[BedroomIcon, BathroomIcon, AreaIcon, HouseIcon].map((Icon) => (
                <Stack
                  direction={"row"}
                  sx={{ gap: "0.25rem", alignItems: "center" }}
                >
                  <Icon />
                  <Skeleton sx={{ width: "60px", height: "30px" }} />
                </Stack>
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }} sx={{ alignItems: "center" }}>
            <Skeleton
              sx={{
                width: "10rem",
                height: "2rem",
                transform: "none",
              }}
            />
            <Skeleton
              sx={{
                width: "10rem",
                height: "3rem",
                transform: "none",
                mt: "2.13em",
              }}
            />
          </Grid2>
        </Grid2>

        <ShadowCard
          sx={{
            padding: { xs: "1rem", md: "2.62rem 2.81rem" },
            mt: "8.75rem !important",
          }}
        >
          <Grid2 container spacing={4}>
            {["Status", "Ownership", "Dues", "Location"].map((title, index) => (
              <Grid2 key={title} size={{ xs: 12, md: 6 }}>
                <Stack
                  direction={"row"}
                  sx={{
                    alignItems: "center",
                    gap: { xs: "0.5rem", md: "1.87rem" },
                  }}
                >
                  <TextLg
                    text={title}
                    sx={{ color: "var(--text-secondary)" }}
                  />
                  <Skeleton
                    sx={{
                      width: "15rem",
                      height: "1.5rem",
                      transform: "none",
                    }}
                  />
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </ShadowCard>
      </Stack>
    </>
  );
};

export default PropertyDetailsSkeleton;
