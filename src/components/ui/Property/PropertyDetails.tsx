import ShadowCard from "@/components/common/Card/ShadowCard";
import IconText from "@/components/common/IconText";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import {
  AllotmentLetterImage,
  AreaIcon,
  BathroomIcon,
  BedroomIcon,
  HouseIcon,
} from "@/constants/images.routes";
import {
  basicFeatures,
  facilities,
  nearbyPlaces,
  propertyStatus,
} from "@/constants/property";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Grid2, Stack } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import BidButton from "./BidButton";
import PropertiesImages from "./PropertiesImages";

interface FeaturesFacilitiesNearbyProps {
  heading: string;
  array: { title: string; icon: string }[];
}

const FeaturesFacilitiesNearby = ({
  heading,
  array,
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
        {array.map(({ title, icon }, index) => (
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
              <Image priority src={icon} alt={"icon"} width={90} height={60} />
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
        ))}
      </Grid2>
    </ShadowCard>
  );
};

interface Props {
  data: IBuyRentProperty;
}

const PropertyDetails = ({ data }: Props) => {
  const user = cookies().get("session");

  const descIcon = [
    {
      icon: BedroomIcon,
      text: data.bedRooms,
    },
    {
      icon: BathroomIcon,
      text: data.bathRooms,
    },
    {
      icon: BedroomIcon,
      text: data.bedRooms,
    },
    {
      icon: AreaIcon,
      text: data.area,
    },
    {
      icon: HouseIcon,
      text: data.type,
    },
  ];
  return (
    <>
      <PropertiesImages />
      <Stack
        sx={{ padding: { xs: "1rem", md: "2rem" }, paddingBottom: "4.69rem" }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Stack sx={{ gap: "2rem" }}>
              <TextLg
                text={"10 Marla Villa with a swimming pool"}
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
                {descIcon.map(({ icon, text }, index) => (
                  <IconText
                    icon={icon}
                    text={text}
                    iconWidth={30}
                    iconHeight={30}
                    sxText={{ fontSize: "1.5625rem", fontWeight: "300" }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 2 }}>
            <Stack sx={{ gap: "2.13rem", alignItems: "center" }}>
              <TextLg
                text={data.title}
                sx={{
                  pt: "1.5rem",
                  fontSize: "1.875rem",
                  color: "var(--text-black)",
                }}
              />
              <BidButton user={user} />
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
                    text={value}
                    sx={{ fontWeight: 400, color: "var(--text-black)" }}
                  />
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </ShadowCard>

        <FeaturesFacilitiesNearby
          heading="Basic Features"
          array={basicFeatures}
        />

        <FeaturesFacilitiesNearby heading="Facilities" array={facilities} />

        <FeaturesFacilitiesNearby
          heading="Nearby Places"
          array={nearbyPlaces}
        />

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
      </Stack>
    </>
  );
};

export default PropertyDetails;
