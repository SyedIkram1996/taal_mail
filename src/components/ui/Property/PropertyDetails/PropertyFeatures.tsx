import ShadowCard from "@/components/common/Card/ShadowCard";
import TextLg from "@/components/common/Text/TextLg";
import TextXl from "@/components/common/Text/TextXl";
import { AllotmentLetterImage } from "@/constants/images.routes";
import {
  basicFeatures,
  dues,
  facilities,
  nearbyPlaces,
  secondaryFeatures,
  status as statusArray,
} from "@/constants/property";
import { IPropertyFeatures } from "@/interfaces/IProperty";
import { Grid2, Stack } from "@mui/material";
import Image from "next/image";
import FeaturesFacilitiesNearby from "./FeaturesFacilitiesNearby";

interface Props {
  duesCleared: string;
  status: string;
  location: string;
  features: IPropertyFeatures;
  allotmentLetter: {
    public_id: string;
    url: string;
  };
}

const PropertyFeatures = ({
  duesCleared,
  status,
  location,
  features,
  allotmentLetter,
}: Props) => {
  const propertyStatus = [
    {
      title: "Status:",
      value: statusArray.find((val) => val.value === status)?.title,
    },
    {
      title: "Ownership:",
      value: "Owner Name",
    },
    {
      title: "Dues:",
      value: dues.find((val) => val.value === duesCleared)?.title,
    },
    {
      title: "Location:",
      value: location,
    },
  ];

  return (
    <>
      <ShadowCard
        sx={{
          padding: { xs: "1rem", md: "2.62rem 2.81rem" },
          mt: "8.75rem !important",
        }}
      >
        <Grid2 container spacing={4}>
          {propertyStatus.map(({ title, value }, index) => (
            <Grid2 key={title} size={{ xs: 12, md: 6 }}>
              <Stack
                direction={"row"}
                sx={{ gap: { xs: "0.5rem", md: "1.87rem" } }}
              >
                <TextLg text={title} sx={{ color: "var(--text-secondary)" }} />
                <TextLg
                  text={`${value}`}
                  sx={{
                    fontWeight: 400,
                    color: "var(--text-black)",
                    wordBreak: "break-word",
                    whiteSpace: "pre-line",
                  }}
                />
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </ShadowCard>

      {features.basicFeatures.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Basic Features"
          array={features.basicFeatures}
          constantsArray={basicFeatures}
        />
      )}

      {features.facilities.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Facilities"
          array={features.facilities}
          constantsArray={facilities}
        />
      )}

      {features.nearbyPlaces.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Nearby Places"
          array={features.nearbyPlaces}
          constantsArray={nearbyPlaces}
        />
      )}

      {features.secondaryFeatures.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Secondary Features"
          array={features.secondaryFeatures}
          constantsArray={secondaryFeatures}
        />
      )}

      {allotmentLetter && allotmentLetter.public_id && (
        <Stack
          sx={{
            img: {
              alignSelf: "center",
              width: { xs: "100%", md: "990px" },
              height: { xs: "100%", md: "1276px" },
            },
          }}
        >
          <TextXl
            text={"Allotment Letter"}
            sx={{
              fontSize: "2rem",
              py: "4.69rem",
              textAlign: { xs: "center", md: "start" },
            }}
          />

          <Image
            priority
            src={AllotmentLetterImage}
            alt={"allotment letter"}
            width={990}
            height={1276}
          />
        </Stack>
      )}
    </>
  );
};

export default PropertyFeatures;
