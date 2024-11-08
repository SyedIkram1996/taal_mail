"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextXl from "@/components/common/Text/TextXl";
import { Grid2, Stack, Typography } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import AdminSearch from "../AdminSearch";

interface Props {
  data: any;
  token?: RequestCookie;
}

const BidsAndFollowUps = ({ data, token }: Props) => {
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
              <Stack sx={{ position: "relative" }}>
                <PropertyCard
                  property={val.property}
                  disableLink
                  sx={{ pb: "3.5rem", cursor: "initial" }}
                >
                  <Stack sx={{ paddingX: "2rem" }}>
                    {[
                      {
                        title: "Title",
                        value: val.title,
                      },
                      { title: "Seller", value: val.property.createdBy.name },
                      { title: "Bidder", value: val.bidBy.name },
                    ].map((value, idx) => (
                      <Typography
                        noWrap
                        key={value.title}
                        sx={{
                          fontSize: "1rem",
                          color: "var(--text-black)",
                          fontWeight: "600",
                          span: { fontWeight: "400" },
                          mb: "0.94rem",
                        }}
                      >
                        {value.title}: <span>{value.value}</span>
                      </Typography>
                    ))}
                  </Stack>
                </PropertyCard>

                <FilledButton
                  text="Details"
                  sx={{
                    alignSelf: "center",
                    fontSize: "1rem",
                    width: "6.52163rem",
                    height: "2.0625rem",
                    padding: "0",
                    position: "absolute",
                    bottom: "1.2rem",
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

export default BidsAndFollowUps;
