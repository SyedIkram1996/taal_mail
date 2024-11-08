"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import BedsBathsArea from "@/components/common/PropertyCard/BedsBathsArea";
import SvgIconText from "@/components/common/SvgIconText";
import HouseIcon from "@/components/common/SvgIcons/HouseIcon";
import LocationIcon from "@/components/common/SvgIcons/LocationIcon";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import { areas } from "@/constants/filters";
import { formatAmountToPKR } from "@/utils/maths";
import { Grid2, Stack } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import AdminSearch from "../AdminSearch";

interface Props {
  data: any;
  token?: RequestCookie;
}

const Investors = ({ data, token }: Props) => {
  data.map((val: any) => {
    val.images = [];
    return val;
  });

  return (
    <AdminSearch title="BIDS AND FOLLOW UPS">
      <Grid2
        maxWidth={"lg"}
        container
        spacing={4}
        rowSpacing={12}
        sx={{ width: "100%" }}
      >
        {data.length ? (
          data.map((val: any, index: number) => (
            <Grid2
              size={{ xs: 12, sm: 6, lg: 4 }}
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
            >
              <Stack
                sx={{
                  borderRadius: "0.9375rem",
                  border: "1px solid var(--platinum)",
                  backgroundColor: "var(--text-white)",
                  boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
                  width: { md: "18.5rem" },
                  padding: "0.94rem 1.94rem",
                  gap: "1.19rem",
                }}
              >
                <TextMd
                  noWrap
                  text={`${val.price.currency} ${formatAmountToPKR(Number(val.price.minPrice))} - ${formatAmountToPKR(Number(val.price.maxPrice))}`}
                  sx={{ color: "var(--text-black)" }}
                />

                <BedsBathsArea
                  bedrooms={val.bedrooms}
                  bathrooms={val.bathrooms}
                  area={`${val.area.totalArea} ${areas.find((value) => value.value === val.area.type)?.title}`}
                />

                <Grid2 container>
                  <Grid2 size={6}>
                    <SvgIconText
                      noWrap
                      icon={
                        <LocationIcon sx={{ width: "22px", height: "22px" }} />
                      }
                      text={val.city}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <SvgIconText
                      noWrap
                      icon={
                        <HouseIcon sx={{ width: "22px", height: "22px" }} />
                      }
                      text={"House"}
                      sxRow={{ justifyContent: "flex-end" }}
                    />
                  </Grid2>
                </Grid2>

                <TextMd
                  text={`Investor: John Doe`}
                  sx={{
                    fontSize: "1rem",
                    paddingX: "0.5rem",
                    color: "var(--text-black)",
                  }}
                />

                <FilledButton
                  text="Details"
                  sx={{
                    alignSelf: "center",
                    fontSize: "1rem",
                    width: "6.52163rem",
                    height: "2.0625rem",
                    padding: "0",
                  }}
                />
              </Stack>
            </Grid2>
          ))
        ) : (
          <TextXl text="No Bids and Follow Ups" />
        )}
      </Grid2>
    </AdminSearch>
  );
};

export default Investors;
