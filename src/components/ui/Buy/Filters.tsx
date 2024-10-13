"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { areas, baths, rentBuy } from "@/constants/filters";
import { Stack } from "@mui/material";
import { useState } from "react";

const Filters = () => {
  const [rentBuyValue, setRentBuyValue] = useState<{
    title: string;
    value: string;
  }>({ title: "Rent", value: "rent" });

  const [areaValue, setAreaValue] = useState<{
    title: string;
    value: string;
  }>({ title: "", value: "" });

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

  return (
    <Stack
      sx={{
        backgroundColor: "var(--green-blue)",
        width: "100%",
        padding: "2rem 14.81rem",
        gap: "2.5rem",
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: "3rem",
        }}
      >
        <SelectField text={rentBuyValue?.title} sx={{ width: "8.9375rem" }}>
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

        <SelectField text={"Price"} sx={{ width: "10.625rem" }}>
          <MenuCard
            onClick={(e) => e.stopPropagation()}
            sx={{
              top: "3.8rem",
              width: "35.5625rem",
              padding: "0.88rem 1.25rem 1.55rem 1.31rem ",
              left: "0",
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
          sx={{ width: "8.9375rem" }}
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
      </Stack>

      <Stack
        direction="row"
        sx={{
          gap: "3rem",
        }}
      >
        <SelectField text={"Property Type"} sx={{ width: "15.9375rem" }}>
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
          text={bathsValue ? `Baths (${bathsValue})` : "Baths"}
          sx={{ minWidth: "10.625rem" }}
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
          sx={{ minWidth: "10.625rem" }}
        >
          <MenuCard sx={{ top: "3.8rem", width: "100%", textAlign: "center" }}>
            {baths.map((val, index) => (
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
