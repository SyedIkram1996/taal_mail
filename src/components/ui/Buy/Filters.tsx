"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import IconText from "@/components/common/IconText";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import {
  areas,
  baths,
  beds,
  propertyTypes,
  rentBuy,
} from "@/constants/filters";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Filters = () => {
  const [rentBuyValue, setRentBuyValue] = useState<{
    title: string;
    value: string;
  }>({ title: "Rent", value: "rent" });

  const [location, setLocation] = useState("");

  const [areaValue, setAreaValue] = useState<{
    title: string;
    value: string;
  }>({ title: "", value: "" });

  const [keyword, setKeyword] = useState("");

  const [bathsValue, setBathsValue] = useState<string>("");

  const [bedsValue, setBedsValue] = useState<string>("");

  const [priceValue, setPriceValue] = useState<{
    minAmount: number;
    maxAmount: number;
    currency: string;
  }>({
    minAmount: 200000,
    maxAmount: 200000,
    currency: "PKR",
  });

  const [propertyTypeValue, setPropertyTypeValue] = useState<{
    type: string;
    category: string;
  }>({ type: "Residential", category: "" });

  const [tabValue, setTabValue] = useState(0);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "var(--green-blue)",
        padding: { xs: "1rem", md: "2rem" },
        gap: "2.5rem",
        alignItems: "center",
        width: "98.8vw",
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: { xs: "1rem", md: "3rem" },
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        <SelectField
          text={rentBuyValue?.title}
          sx={{ width: { xs: "100%", md: "8.9375rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%" }}>
            {rentBuy.map((val, index) => (
              <TextLg
                text={val.title}
                onClick={() => setRentBuyValue(val)}
                sx={{
                  color: "var(--text-black)",
                  fontWeight: "400",
                  padding: "0.5rem",
                  borderBottom:
                    index !== rentBuy.length - 1
                      ? "1px solid var(--platinum)"
                      : "none",
                }}
              />
            ))}
          </MenuCard>
        </SelectField>

        <Stack sx={{ width: { xs: "100%", md: "23.6875rem" } }}>
          <LabelTopTextField
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{
              width: "100%",
              ".MuiOutlinedInput-root": {
                height: "3.125rem",
                "& fieldset": {
                  border: "none",
                },
                "input::placeholder": {
                  fontSize: "1.5rem",
                  color: "var(--text-black)",
                },
              },
              ".MuiInputBase-root": {
                input: {
                  fontSize: "1.5rem",
                  color: "var(--text-black)",
                },
              },
            }}
          />
        </Stack>

        <SelectField
          text={"Price"}
          sx={{ width: { xs: "100%", md: "10.625rem" } }}
        >
          <MenuCard
            onClick={(e) => e.stopPropagation()}
            sx={{
              top: "3.8rem",
              width: { xs: "100%", md: "35.5625rem" },
              padding: "0.88rem 1.25rem 1.55rem 1.31rem ",
              cursor: "initial",
            }}
          >
            {[
              {
                title: "Minimum Amount:",
                amount: priceValue.minAmount,
                key: "minAmount",
              },
              {
                title: "Maximum Amount:",
                amount: priceValue.maxAmount,
                key: "maxAmount",
              },
            ].map((val, index) => (
              <Stack
                sx={{
                  pt: index === 1 ? "1.87rem" : "0",
                  pb: index === 1 ? "0.44rem" : "0",
                }}
              >
                <TextMd
                  text={val.title}
                  sx={{ fontWeight: "400", color: "var(--text-black)" }}
                />

                <LabelTopTextField
                  type="number"
                  value={`${val.amount}`}
                  endIcon={
                    <TextMd
                      text={priceValue.currency}
                      sx={{ fontWeight: "400" }}
                    />
                  }
                  onChange={(e) =>
                    setPriceValue({
                      ...priceValue,
                      [val.key]: e.target.value,
                    })
                  }
                  sx={{
                    pt: "1.5rem",
                    ".MuiInputBase-root": {
                      input: {
                        fontSize: "1.25rem",
                        color: "var(--text-primary)",
                      },
                    },
                  }}
                />
                <TextMd
                  text={"i.e 2 Lac"}
                  sx={{ fontWeight: "400", pl: "2.31rem", pt: "0.35rem" }}
                />
              </Stack>
            ))}

            <FilledButton
              text="Confirm"
              sx={{ width: "11rem", alignSelf: "center" }}
            />
          </MenuCard>
        </SelectField>

        <SelectField
          text={areaValue.title ? areaValue.title : "Area"}
          sx={{ width: { xs: "100%", md: "8.9375rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%" }}>
            {areas.map((val, index) => (
              <TextLg
                text={val.title}
                onClick={() => setAreaValue(val)}
                sx={{
                  color: "var(--text-black)",
                  fontWeight: "400",
                  padding: "0.5rem",
                  borderBottom:
                    index !== areas.length - 1
                      ? "1px solid var(--platinum)"
                      : "none",
                }}
              />
            ))}
          </MenuCard>
        </SelectField>

        <SelectField
          text={"Property Type"}
          sx={{ width: { xs: "100%", md: "15.9375rem" } }}
        >
          <MenuCard
            onClick={(e) => e.stopPropagation()}
            sx={{
              top: "3.8rem",
              width: { xs: "100%", md: "49rem" },
              textAlign: "center",
              left: 0,
              cursor: "initial",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid var(--platinum)",
                marginX: "1rem !important",
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleChangeTabs}
                // allowScrollButtonsMobile
                variant="scrollable"
                sx={{
                  ".MuiTabs-flexContainer": {
                    gap: { xs: "0", md: "4rem" },
                  },

                  button: {
                    fontSize: "1.25rem",
                    color: "var(--text-black)",
                    padding: { xs: "0", md: "inherit" },
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

            {propertyTypes.map(
              ({ index, items, type }) =>
                tabValue === index && (
                  <Stack
                    key={index}
                    direction={"row"}
                    sx={{
                      flexWrap: "wrap",
                      gap: "1.62rem",
                      padding: "3.32rem 1.38rem 1rem 1.38rem",
                    }}
                  >
                    {items.map((val) => (
                      <IconText
                        onClick={() =>
                          setPropertyTypeValue({ type, category: val.text })
                        }
                        text={val.text}
                        icon={val.icon}
                        iconWidth={30}
                        iconHeight={30}
                        sxRow={{
                          cursor: "pointer",
                          gap: "0.63rem",
                          borderRadius: "0.9375rem",
                          padding: "0.75rem 1.69rem",
                          boxShadow:
                            propertyTypeValue.category === val.text
                              ? "0px 0px 0px 4px var(--text-primary) inset"
                              : "0px 0px 0px 1px var(--spanish-gray) inset",
                        }}
                        sxText={{
                          fontSize: "1.25rem",
                          color: "var(--text-primary)",
                        }}
                      />
                    ))}
                  </Stack>
                ),
            )}
          </MenuCard>
        </SelectField>

        <Stack sx={{ width: { xs: "100%", md: "16.125rem" } }}>
          <LabelTopTextField
            placeholder="Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            sx={{
              width: "100%",
              ".MuiOutlinedInput-root": {
                height: "3.125rem",
                "& fieldset": {
                  border: "none",
                },
                "input::placeholder": {
                  fontSize: "1.5rem",
                  color: "var(--text-black)",
                },
              },
              ".MuiInputBase-root": {
                input: {
                  fontSize: "1.5rem",
                  color: "var(--text-black)",
                },
              },
            }}
          />
        </Stack>

        <SelectField
          text={bathsValue ? `Baths (${bathsValue})` : "Baths"}
          sx={{ minWidth: { xs: "100%", md: "10.625rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%", textAlign: "center" }}>
            {baths.map((val, index) => (
              <TextLg
                text={val}
                onClick={() => setBathsValue(val)}
                sx={{
                  color: "var(--text-black)",
                  fontWeight: "400",
                  padding: "0.5rem",
                  borderBottom:
                    index !== areas.length - 1
                      ? "1px solid var(--platinum)"
                      : "none",
                }}
              />
            ))}
          </MenuCard>
        </SelectField>

        <SelectField
          text={bedsValue ? `Beds (${bedsValue})` : "Beds"}
          sx={{ minWidth: { xs: "100%", md: "10.625rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%", textAlign: "center" }}>
            {beds.map((val, index) => (
              <TextLg
                text={val}
                onClick={() => setBedsValue(val)}
                sx={{
                  color: "var(--text-black)",
                  fontWeight: "400",
                  padding: "0.5rem",
                  borderBottom:
                    index !== areas.length - 1
                      ? "1px solid var(--platinum)"
                      : "none",
                }}
              />
            ))}
          </MenuCard>
        </SelectField>
      </Stack>
    </Stack>
  );
};

export default Filters;
