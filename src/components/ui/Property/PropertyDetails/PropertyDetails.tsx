import ShadowCard from "@/components/common/Card/ShadowCard";
import AreaIcon from "@/components/common/SvgIcons/AreaIcon";
import BathroomIcon from "@/components/common/SvgIcons/BathroomIcon";
import BedroomIcon from "@/components/common/SvgIcons/BedroomIcon";
import HouseIcon from "@/components/common/SvgIcons/HouseIcon";
import SvgIconText from "@/components/common/SvgIconText";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
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
import { IProperty, IPropertyFeature } from "@/interfaces/IProperty";
import { formatAmountToPKR } from "@/utils/maths";
import { Grid2, Stack } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import BidButton from "./BidButton";
import PropertiesImages from "./PropertiesImages";

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

interface Props {
  property: IProperty;
}

const PropertyDetails = ({ property }: Props) => {
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

  const userSession = cookies().get("token");

  const descIcon = [
    {
      icon: BedroomIcon,
      text: bedrooms,
    },
    {
      icon: BathroomIcon,
      text: bathrooms,
    },
    {
      icon: AreaIcon,
      text: `${area.totalArea} ${area.type}`,
    },
    {
      icon: HouseIcon,
      text: type,
    },
  ];

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
      <PropertiesImages images={images} />
      <Stack
        sx={{ padding: { xs: "1rem", md: "2rem" }, paddingBottom: "4.69rem" }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Stack sx={{ gap: "2rem" }}>
              <TextLg
                text={name}
                sx={{
                  pt: "1.5rem",
                  fontSize: { xs: "1.5rem", md: "1.875rem" },
                  color: "var(--text-black)",
                }}
              />
              <Stack
                direction={"row"}
                sx={{ gap: "2rem", flexWrap: { xs: "wrap", md: "initial" } }}
              >
                {descIcon.map(({ icon: Icon, text }, index) => (
                  <SvgIconText
                    key={text}
                    icon={
                      <Icon
                        sx={{
                          width: { xs: "20px", sm: "30px" },
                          height: { xs: "20px", sm: "30px" },
                        }}
                      />
                    }
                    text={text}
                    sxText={{ fontSize: "1.5625rem", fontWeight: "300" }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 2 }}>
            <Stack
              sx={{
                gap: { xs: "1rem", sm: "2.13rem" },
                alignItems: { xs: "flex-start", sm: "center" },
              }}
            >
              <TextLg
                text={`${price.currency} ${formatAmountToPKR(Number(price.askingPrice))}`}
                sx={{
                  pt: { xs: "3rem", sm: "1.5rem" },
                  fontSize: "1.875rem",
                  color: "var(--text-black)",
                }}
              />
              <BidButton userSession={userSession} />
            </Stack>
          </Grid2>
        </Grid2>

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
                  <TextLg
                    text={title}
                    sx={{ color: "var(--text-secondary)" }}
                  />
                  <TextLg
                    text={`${value}`}
                    sx={{ fontWeight: 400, color: "var(--text-black)" }}
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
      </Stack>
    </>
  );
};

export default PropertyDetails;
