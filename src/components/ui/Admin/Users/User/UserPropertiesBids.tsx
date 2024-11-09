"use client";
import FilledButton from "@/components/common/Button/FilledButton";
import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextLg from "@/components/common/Text/TextLg";
import MyProperty from "@/components/ui/Profile/MyProperties/MyProperty";
import { ADMIN_BIDS_AND_FOLLOW_UPS_PAGE } from "@/constants/page.routes";
import { IBid } from "@/interfaces/IBid";
import { IProperty } from "@/interfaces/IProperty";
import { Box, Grid2, Stack, Tab, Tabs, Typography } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  properties: IProperty[];
  bids: IBid[];
  token?: RequestCookie;
}

const UserPropertiesBids = ({ properties, token, bids }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { userId } = useParams();
  const [tabValue, setTabValue] = useState(
    searchParams.get("filter") ?? "properties",
  );

  const filters = [
    {
      type: "Properties",
      value: "properties",
    },
    {
      type: "Bids",
      value: "bids",
    },
  ];

  const handleChangeTabs = (newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Stack sx={{ alignItems: "center", width: "100%" }}>
      <Box
        sx={{
          borderBottom: "1px solid var(--platinum)",
          mt: "3.12rem",
          px: { xs: "1rem", md: "2rem" },
        }}
      >
        <Tabs
          value={tabValue}
          variant="scrollable"
          scrollButtons={false}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: { xs: "1rem", md: "4rem" },
            },

            a: {
              fontSize: "1.25rem",
              color: "var(--text-black)",
              paddingX: { xs: "0", md: "1rem" },
            },
            ".Mui-selected": {
              color: "var(--text-black)  !important",
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "var(--myrtle-green)",
              height: "0.25rem",
            },
          }}
        >
          {filters.map((val, index) => (
            <Tab
              key={val.value}
              value={val.value}
              disableRipple
              label={val.type}
              LinkComponent={MUILink}
              href={`${pathname}?filter=${val.value}`}
              onClick={() => handleChangeTabs(val.value)}
            />
          ))}
        </Tabs>
      </Box>

      {tabValue === "properties" && (
        <>
          {properties.length ? (
            <Grid2
              maxWidth={"lg"}
              container
              spacing={4}
              rowSpacing={12}
              sx={{ padding: "2rem", py: "6.25rem", width: "100%" }}
            >
              {properties.map((val, index) => (
                <Grid2
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  <MyProperty val={val} token={token} showDetails />
                </Grid2>
              ))}
            </Grid2>
          ) : (
            <TextLg
              text={`No ${tabValue} Property Added`}
              sx={{ textAlign: "center", mt: "5rem" }}
            />
          )}
        </>
      )}

      {tabValue === "bids" && (
        <>
          {bids.length ? (
            <Grid2
              maxWidth={"lg"}
              container
              spacing={4}
              rowSpacing={12}
              sx={{ padding: "2rem", py: "6.25rem", width: "100%" }}
            >
              {bids.map((val, index) => (
                <Grid2
                  size={{ xs: 12, sm: 6, lg: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                  key={index}
                >
                  <Stack sx={{ position: "relative" }}>
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
                          {
                            title: "Seller",
                            value: val.property.createdBy.name,
                          },
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
                        href={`${ADMIN_BIDS_AND_FOLLOW_UPS_PAGE}/${val.id}?user=${userId}`}
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
              ))}
            </Grid2>
          ) : (
            <TextLg
              text={`No ${tabValue} Property Added`}
              sx={{ textAlign: "center", mt: "5rem" }}
            />
          )}
        </>
      )}
    </Stack>
  );
};

export default UserPropertiesBids;
