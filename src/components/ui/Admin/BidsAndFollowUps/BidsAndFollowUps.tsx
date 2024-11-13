"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextXl from "@/components/common/Text/TextXl";
import { CircularProgress, Grid2, Stack, Typography } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AdminSearch from "../AdminSearch";

interface Props {
  data: any;
  token?: RequestCookie;
}

const BidsAndFollowUps = ({ data, token }: Props) => {
  const pathname = usePathname();
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    setIsTyping(false);
  }, [data]);

  return (
    <AdminSearch title="BIDS AND FOLLOW UPS" setIsTyping={setIsTyping}>
      {!isTyping ? (
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
                    alignItems: "center",
                    width: { xs: "100%", md: "initial" },
                    position: "relative",
                  }}
                >
                  <PropertyCard
                    property={val.property}
                    disableLink
                    sx={{ pb: "1rem", cursor: "initial" }}
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

                    <MUILink
                      href={`${pathname}/${val.id}`}
                      sx={{ alignSelf: "center" }}
                    >
                      <FilledButton
                        text="Details"
                        sx={{
                          fontSize: "1rem",
                          width: "6.52163rem",
                          height: "2.0625rem",
                          padding: "0",
                          mt: "0.5rem",
                        }}
                      />
                    </MUILink>
                  </PropertyCard>
                </Stack>
              </Grid2>
            ))
          ) : (
            <TextXl text="No Bids and Follow Ups Found" />
          )}
        </Grid2>
      ) : (
        <Stack
          maxWidth={"lg"}
          sx={{
            minHeight: "8rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Stack>
      )}
    </AdminSearch>
  );
};

export default BidsAndFollowUps;
