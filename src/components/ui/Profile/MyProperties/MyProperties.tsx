"use client";

import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import { propertyTypes } from "@/constants/filters";
import { PROPERTY } from "@/constants/page.routes";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Box, Grid2, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface Props {
  data: IBuyRentProperty[];
}

const MyProperties = ({ data }: Props) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Box
        sx={{
          borderBottom: "1px solid var(--platinum)",
          mt: "3.12rem",
          px: "2rem",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChangeTabs}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: "4rem",
            },

            button: {
              fontSize: "1.25rem",
              color: "var(--text-black)",
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
          {propertyTypes.map((val, index) => (
            <Tab key={val.type} disableRipple label={val.type} />
          ))}
        </Tabs>
      </Box>

      <Grid2
        maxWidth={"lg"}
        container
        spacing={4}
        rowSpacing={12}
        sx={{ padding: "2rem", py: "6.25rem" }}
      >
        {data.map((val, index) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={index}>
            <Stack sx={{ alignItems: "center" }}>
              <MUILink href={`${PROPERTY}/${val.id}`}>
                <PropertyCard
                  id={val.id}
                  title={val.title}
                  bedRooms={val.bedRooms}
                  bathRooms={val.bathRooms}
                  area={val.area}
                  type={val.type}
                  location={val.location}
                  showActions
                />
              </MUILink>
            </Stack>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default MyProperties;
