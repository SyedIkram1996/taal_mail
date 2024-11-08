import ShadowCard from "@/components/common/Card/ShadowCard";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import { IPropertyFeature } from "@/interfaces/IProperty";
import { Grid2, Stack } from "@mui/material";

interface FeaturesFacilitiesNearbyProps {
  heading: string;
  array: IPropertyFeature[];
  constantsArray: any[];
}

const FeaturesFacilitiesNearby = ({
  heading,
  array,
  constantsArray,
}: FeaturesFacilitiesNearbyProps) => {
  return (
    <ShadowCard
      sx={{
        padding: { xs: "1rem", md: "2.81rem 3.94rem" },
        mt: "6.25rem !important",
      }}
    >
      <TextXl
        text={heading}
        sx={{ fontSize: "2rem", alignSelf: { xs: "center", md: "start" } }}
      />

      <Grid2 container spacing={8} sx={{ pt: "3.13rem", pl: { md: "2rem" } }}>
        {array.map(({ title }, index) => {
          const Icon = constantsArray.find(
            (feature) => feature.title === title,
          )?.icon;
          return (
            <Grid2 size={{ xs: 6, md: 2 }} key={title}>
              <Stack
                sx={{
                  gap: { xs: "0.25rem", md: "0.63rem" },
                  alignItems: "center",
                  img: {
                    width: { xs: "45px", md: "90px" },
                    height: { xs: "45px", md: "90px" },
                  },
                }}
              >
                <Icon sx={{ width: "90px", height: "60px" }} />
                <TextMd
                  text={title}
                  sx={{
                    fontWeight: "400",
                    color: "var(--text-black)",
                    textAlign: "center",
                  }}
                />
              </Stack>
            </Grid2>
          );
        })}
      </Grid2>
    </ShadowCard>
  );
};

export default FeaturesFacilitiesNearby;
