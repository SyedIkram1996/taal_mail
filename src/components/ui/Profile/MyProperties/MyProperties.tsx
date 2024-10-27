"use client";

import { propertyTypes } from "@/constants/filters";
import { IProperty } from "@/interfaces/IProperty";
import { Box, Grid2, Stack, Tab, Tabs } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useState } from "react";
import MyProperty from "./MyProperty";

interface Props {
  data: IProperty[];
  token?: RequestCookie;
}

const MyProperties = ({ data, token }: Props) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
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
          onChange={handleChangeTabs}
          sx={{
            ".MuiTabs-flexContainer": {
              gap: { xs: "1rem", md: "4rem" },
            },

            button: {
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
        sx={{ padding: "2rem", py: "6.25rem", width: "100%" }}
      >
        {data.map((val, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <MyProperty val={val} token={token} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default MyProperties;
