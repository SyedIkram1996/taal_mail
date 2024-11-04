"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import IconText from "@/components/common/IconText";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import MUILink from "@/components/common/MUILink/MUILink";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import {
  areas,
  baths,
  beds,
  propertyTypes,
  rentBuy,
} from "@/constants/filters";
import { BUY_HOUSE, RENT_HOUSE } from "@/constants/page.routes";
import useTextFieldPropertyFiltersDebounce from "@/hooks/useTextFieldPropertyFiltersDebounce";
import { formatAmountToPKR } from "@/utils/maths";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const Filters = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [areaType, setAreaType] = useState(
    searchParams.get("areaType")
      ? `${areas.find((val) => val.value === searchParams.get("areaType"))?.title}`
      : "Sq.ft",
  );

  const { handleTextFieldChange } = useTextFieldPropertyFiltersDebounce({
    searchParams,
    replace,
    pathname,
  });

  const [rentBuyValue, setRentBuyValue] = useState<{
    title: string;
    value: string;
  }>({ title: "", value: "" });

  const [areaValue, setAreaValue] = useState<{
    title: string;
    value: string;
  }>({ title: "", value: "" });

  const [bathsValue, setBathsValue] = useState<string>("");

  const [bedsValue, setBedsValue] = useState<string>("");

  const [priceValue, setPriceValue] = useState<{
    minPrice: string;
    maxPrice: string;
    currency: string;
  }>({
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    currency: "PKR",
  });

  const [propertyTypeValue, setPropertyTypeValue] = useState<{
    type: string;
    category: string;
  }>({ type: "Residential", category: "" });

  const [tabValue, setTabValue] = useState(
    searchParams.get("classification") || "",
  );

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const handleFilterChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (priceValue.minPrice) {
      params.set("minPrice", priceValue.minPrice);
    } else {
      params.delete("minPrice");
    }

    if (priceValue.maxPrice) {
      params.set("maxPrice", priceValue.maxPrice);
    } else {
      params.delete("maxPrice");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const getPriceLink = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (priceValue.minPrice) {
      params.set("minPrice", priceValue.minPrice);
    } else {
      params.delete("minPrice");
    }

    if (priceValue.maxPrice) {
      params.set("maxPrice", priceValue.maxPrice);
    } else {
      params.delete("maxPrice");
    }

    return `${pathname}?${params.toString()}`;
  };

  const getClassificationTabsLink = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("classification", value);
    return `${pathname}?${params.toString()}`;
  };

  const getTypeLink = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("type", value);
    return `${pathname}?${params.toString()}`;
  };

  const getBedroomsLink = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("bedrooms", value);
    return `${pathname}?${params.toString()}`;
  };

  const getBathroomsLink = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("bathrooms", value);
    return `${pathname}?${params.toString()}`;
  };

  const getBuyRentLinkUrl = (val: any) => {
    const params = new URLSearchParams(searchParams);
    let newPathname = "";
    if (pathname.includes("house") && val.value === "rent") {
      newPathname = RENT_HOUSE;
    } else if (pathname.includes("house") && val.value === "buy") {
      newPathname = BUY_HOUSE;
    } else {
      newPathname = val.value === "rent" ? RENT_HOUSE : BUY_HOUSE;
    }

    return `${newPathname}?${params.toString()}`;
  };

  const handleAreaChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");
      if (value) {
        params.set("totalArea", value);
        params.set(
          "areaType",
          areas.find((val) => val.title === areaType)?.value || "",
        );
      } else {
        params.delete("totalArea");
        params.delete("areaType");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    500,
  );

  const handleAreaType = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("areaType", value);
    replace(`${pathname}?${params.toString()}`);
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
          text={
            rentBuyValue.title || pathname?.includes("/buy") ? "Buy" : "Rent"
          }
          sx={{ width: { xs: "100%", md: "8.9375rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%" }}>
            {rentBuy.map((val: any, index) => (
              <MUILink key={val.title} href={getBuyRentLinkUrl(val)}>
                <TextLg
                  text={val.title}
                  onClick={() => {
                    setRentBuyValue(val);
                  }}
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
              </MUILink>
            ))}
          </MenuCard>
        </SelectField>

        <Stack sx={{ width: { xs: "100%", md: "23.6875rem" } }}>
          <LabelTopTextField
            name={"location"}
            placeholder="Location"
            defaultValue={searchParams.get("location") || ""}
            onChange={(e) => {
              handleTextFieldChange(e);
            }}
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
                amount: priceValue.minPrice,
                key: "minPrice",
              },
              {
                title: "Maximum Amount:",
                amount: priceValue.maxPrice,
                key: "maxPrice",
              },
            ].map((val, index) => (
              <Stack
                key={val.title}
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
                  defaultValue={val.amount}
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
                  text={`i.e ${formatAmountToPKR(Number(val.amount))}`}
                  sx={{ fontWeight: "400", pl: "2.31rem", pt: "0.35rem" }}
                />
              </Stack>
            ))}

            <MUILink href={getPriceLink()} sx={{ alignSelf: "center" }}>
              <FilledButton
                text="Confirm"
                sx={{ width: "11rem" }}
                onClick={handlePriceFilter}
              />
            </MUILink>
          </MenuCard>
        </SelectField>

        <SelectField
          text={areaValue.title ? areaValue.title : "Area"}
          sx={{ width: { xs: "100%", md: "8.9375rem" }, position: "relative" }}
        >
          <Stack
            sx={{
              top: "3.8rem",
              width: "18rem",
              position: "absolute",
              right: "0",
              padding: "0.5rem 1.19rem",
              backgroundColor: "white",
              borderRadius: "0.9375rem",
              zIndex: "1",
              gap: "0.5rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* {areas.map((val, index) => (
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
            ))} */}
            <TextLg
              text={"Area:"}
              sx={{ color: "var(--text-black)", fontWeight: "400", flex: 1 }}
            />
            <LabelTopTextField
              type="number"
              name="area"
              placeholder="Area"
              // value={totalAreaValue}
              defaultValue={searchParams.get("totalArea") || ""}
              onChange={(e) => {
                handleAreaChange(e);
              }}
              endIcon={
                <SelectField
                  iconWidth={30}
                  iconHeight={30}
                  text={areaType}
                  sx={{
                    width: "8.9375rem",
                    height: "100%",
                    ">p": {
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                    },
                  }}
                >
                  <MenuCard
                    sx={{
                      top: "3.8rem",
                      width: "100%",
                      borderRadius: "0rem 0rem 0.3125rem 0.3125rem",
                    }}
                  >
                    {areas.map((val, index) => (
                      <TextLg
                        key={val.title}
                        text={val.title}
                        onClick={() => {
                          setAreaType(val.title);
                          if (searchParams.get("totalArea")) {
                            handleAreaType(val.value);
                          }
                        }}
                        sx={{
                          fontSize: "1.25rem",
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
              }
              sx={{
                ".MuiOutlinedInput-root": {
                  height: "3rem",
                  "input::placeholder": {
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                  },
                },

                ".MuiInputBase-root": {
                  input: {
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                  },
                  pr: "0",
                },
              }}
            />
          </Stack>
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

                  a: {
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
                  <Tab
                    LinkComponent={MUILink}
                    href={getClassificationTabsLink(val.value)}
                    key={val.type}
                    disableRipple
                    value={val.value}
                    label={val.type}
                  />
                ))}
              </Tabs>
            </Box>

            {propertyTypes.map(
              ({ index, items, type, value }) =>
                (tabValue === value ||
                  (!tabValue && value === "residential")) && (
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
                      <MUILink href={getTypeLink(val.text)}>
                        <IconText
                          key={val.text}
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
                      </MUILink>
                    ))}
                  </Stack>
                ),
            )}
          </MenuCard>
        </SelectField>

        <Stack sx={{ width: { xs: "100%", md: "16.125rem" } }}>
          <LabelTopTextField
            name={"keyword"}
            placeholder="Keyword"
            defaultValue={searchParams.get("keyword") || ""}
            onChange={(e) => {
              handleTextFieldChange(e);
            }}
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
              <MUILink key={val} href={getBathroomsLink(val)}>
                <TextLg
                  text={val}
                  onClick={() => setBathsValue(val)}
                  sx={{
                    color: "var(--text-black)",
                    fontWeight: "400",
                    padding: "0.5rem",
                    borderBottom:
                      index !== baths.length - 1
                        ? "1px solid var(--platinum)"
                        : "none",
                  }}
                />
              </MUILink>
            ))}
          </MenuCard>
        </SelectField>

        <SelectField
          text={bedsValue ? `Beds (${bedsValue})` : "Beds"}
          sx={{ minWidth: { xs: "100%", md: "10.625rem" } }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%", textAlign: "center" }}>
            {beds.map((val, index) => (
              <MUILink key={val} href={getBedroomsLink(val)}>
                <TextLg
                  text={val}
                  onClick={() => setBedsValue(val)}
                  sx={{
                    color: "var(--text-black)",
                    fontWeight: "400",
                    padding: "0.5rem",
                    borderBottom:
                      index !== beds.length - 1
                        ? "1px solid var(--platinum)"
                        : "none",
                  }}
                />
              </MUILink>
            ))}
          </MenuCard>
        </SelectField>
      </Stack>
    </Stack>
  );
};

export default Filters;
