import FilledButton from "@/components/common/Button/FilledButton";
import ShadowCard from "@/components/common/Card/ShadowCard";
import IconText from "@/components/common/IconText";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import {
  AreaIcon,
  BathroomIcon,
  BedroomIcon,
  BidIcon,
  HouseIcon,
} from "@/constants/images.routes";
import { basicFeatures, propertyStatus } from "@/constants/property";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Grid2, Stack } from "@mui/material";
import Image from "next/image";
import PropertiesImages from "./PropertiesImages";

interface Props {
  data: IBuyRentProperty;
}

const PropertyDetails = ({ data }: Props) => {
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
      <Stack sx={{ padding: "2rem" }}>
        <Grid2 container>
          <Grid2 size={10}>
            <Stack sx={{ gap: "2rem" }}>
              <TextLg
                text={"10 Marla Villa with a swimming pool"}
                sx={{
                  pt: "1.5rem",
                  fontSize: "1.875rem",
                  color: "var(--text-black)",
                }}
              />
              <Stack direction={"row"} sx={{ gap: "2rem" }}>
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

          <Grid2 size={2}>
            <Stack sx={{ gap: "2.13rem" }}>
              <TextLg
                text={data.title}
                sx={{
                  pt: "1.5rem",
                  fontSize: "1.875rem",
                  color: "var(--text-black)",
                }}
              />
              <FilledButton
                text="Bid"
                startIcon={
                  <Image
                    priority
                    src={BidIcon}
                    alt={"BidIcon"}
                    width={30}
                    height={30}
                  />
                }
                sx={{ gap: "0.62rem", width: "11.875rem", height: "3.125rem" }}
              />
            </Stack>
          </Grid2>
        </Grid2>

        <ShadowCard
          sx={{ padding: "2.62rem 2.81rem", mt: "8.75rem !important" }}
        >
          <Grid2 container spacing={4}>
            {propertyStatus.map(({ title, value }, index) => (
              <Grid2 key={title} size={6}>
                <Stack direction={"row"} sx={{ gap: "1.87rem" }}>
                  <TextLg text={title} />
                  <TextLg
                    text={value}
                    sx={{ fontWeight: 400, color: "var(--text-black)" }}
                  />
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </ShadowCard>

        <ShadowCard
          sx={{ padding: "2.81rem 3.94rem", mt: "6.25rem !important" }}
        >
          <Stack sx={{ alignItems: "center" }}>
            <TextXl
              text="Basic Features"
              sx={{ fontSize: "2rem", alignSelf: "start" }}
            />

            <Grid2 container spacing={8} sx={{ pt: "3.13rem" }}>
              {basicFeatures.map(({ title, icon }, index) => (
                <Grid2 size={2} key={title}>
                  <Stack sx={{ gap: "0.63rem" }}>
                    <Image
                      priority
                      src={icon}
                      alt={"icon"}
                      width={90}
                      height={60}
                    />
                    <TextMd
                      text={title}
                      sx={{ fontWeight: "400", color: "var(--text-black)" }}
                    />
                  </Stack>
                </Grid2>
              ))}
            </Grid2>
          </Stack>
        </ShadowCard>
      </Stack>
    </>
  );
};

export default PropertyDetails;
