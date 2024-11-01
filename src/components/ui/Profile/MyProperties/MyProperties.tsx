"use client";

import MUILink from "@/components/common/MUILink/MUILink";
import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import TextLg from "@/components/common/Text/TextLg";
import { propertyTypes } from "@/constants/filters";
import { MY_PROPERTIES_PAGE } from "@/constants/page.routes";
import { EPropertyClassification } from "@/enums/enums";
import { IProperty } from "@/interfaces/IProperty";
import { Box, Grid2, Stack, Tab, Tabs } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import MyProperty from "./MyProperty";
const { RESIDENTIAL_VALUE } = EPropertyClassification;

interface Props {
  data: IProperty[];
  token?: RequestCookie;
}

const MyProperties = ({ data, token }: Props) => {
  const searchParams = useSearchParams();
  const [tabValue, setTabValue] = useState(
    searchParams.get("classification") ?? RESIDENTIAL_VALUE,
  );
  const [showMessage, setShowMessage] = useState(false);

  const timeoutRef = useRef<any>(null);

  const startTimeout = () => {
    setShowMessage(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
  };

  const handleChangeTabs = (newValue: string) => {
    setTabValue(newValue);
    startTimeout();
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
          {propertyTypes.map((val, index) => (
            <Tab
              key={val.value}
              value={val.value}
              disableRipple
              label={val.type}
              LinkComponent={MUILink}
              href={MY_PROPERTIES_PAGE(val.value)}
              onClick={() => handleChangeTabs(val.value)}
            />
          ))}
        </Tabs>
      </Box>

      {data.length ? (
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
      ) : !showMessage ? (
        <PropertiesSkeleton />
      ) : (
        showMessage && (
          <TextLg
            text={`No ${tabValue} Property Added`}
            sx={{ textAlign: "center", mt: "5rem" }}
          />
        )
      )}
    </Stack>
  );
};

export default MyProperties;
