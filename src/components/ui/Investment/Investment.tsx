"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import IconText from "@/components/common/IconText";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import { areas, baths, beds } from "@/constants/filters";
import {
  CloseGreyIcon,
  FlameGreyIcon,
  PlusIcon,
} from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  desc: string;
}

const TitleDesc = ({ title, desc }: Props) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ alignItems: "center", gap: "0.62rem" }}
    >
      <TextLg
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      <TextSm
        text={desc}
        sx={{ fontWeight: "400", color: "var(--spanish-gray)" }}
      />
    </Stack>
  );
};

const Investment = () => {
  const [areaValue, setAreaValue] = useState<{
    title: string;
    value: string;
  }>({ title: "Marla", value: "marla" });

  const [bathsValue, setBathsValue] = useState<string>("2");

  const [bedsValue, setBedsValue] = useState<string>("1");
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
    <>
      <TextLg
        text="We’ll  find the Perfect Project for you!"
        sx={{
          fontSize: "2rem",
          textAlign: "center",
          color: "var(--text-secondary)",
          mt: { xs: "3rem", md: "6.19rem" },
          px: { xs: "1rem", md: "0" },
        }}
      />
      <TextMd
        text="Enter your preferences! We’ll get in touch with you shortly after."
        sx={{
          fontWeight: "400",
          color: "var(--text-black)",
          textAlign: "center",
          px: { xs: "1rem", md: "0" },
        }}
      />

      <Stack
        sx={{
          gap: "6.25rem",
          mt: "6.25rem",
          width: "100%",
          px: { xs: "1rem", md: "6.37rem" },
        }}
      >
        <Stack>
          <TitleDesc title="Name:" desc="" />
          <LabelTopTextField
            placeholder="John Doe"
            sx={{
              mt: "3.13rem",
              maxWidth: "41rem",
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
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc title="Email:" desc="" />
          <LabelTopTextField
            placeholder="John Doe.@gmail.com"
            sx={{
              mt: "3.13rem",
              maxWidth: "41rem",
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
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc title="Phone Number:" desc="" />
          <LabelTopTextField
            placeholder="+92 3456789012"
            sx={{
              mt: "3.13rem",
              maxWidth: "41rem",
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
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="City:"
            desc="Which city/area is this property located in?"
          />
          <LabelTopTextField
            placeholder="City"
            sx={{
              mt: "3.13rem",
              maxWidth: "41rem",
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
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc title="Area:" desc="What is the size of this property?" />
          <LabelTopTextField
            placeholder="Area"
            endIcon={
              <SelectField
                iconWidth={30}
                iconHeight={30}
                text={areaValue.title ? areaValue.title : "Area"}
                sx={{
                  width: "8.9375rem",
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
                      text={val.title}
                      onClick={() => setAreaValue(val)}
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
              mt: "3.13rem",
              maxWidth: "50.375rem",
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
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Minimum Price:"
            desc="What amount (minimum), do you want to invest?"
          />

          <LabelTopTextField
            placeholder="Min Price"
            endIcon={<TextMd text={"PKR"} sx={{ fontWeight: "400" }} />}
            sx={{
              mt: "3.13rem",
              maxWidth: "52.375rem",
              ".MuiOutlinedInput-root": {
                height: "3",
                "input::placeholder": {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                },
              },

              ".MuiInputBase-root": {
                input: {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />

          <TextMd
            text={"i.e 2 Lac"}
            sx={{ fontWeight: "400", pl: "2.31rem" }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Maximum Price:"
            desc="What amount (maximum), do you want to invest?"
          />

          <LabelTopTextField
            placeholder="Max Price"
            endIcon={<TextMd text={"PKR"} sx={{ fontWeight: "400" }} />}
            sx={{
              mt: "3.13rem",
              maxWidth: "52.375rem",
              ".MuiOutlinedInput-root": {
                height: "3",
                "input::placeholder": {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                },
              },

              ".MuiInputBase-root": {
                input: {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  px: { xs: "1rem", md: "2.31rem" },
                },
              },
            }}
          />

          <TextMd
            text={"i.e 2 Lac"}
            sx={{ fontWeight: "400", pl: "2.31rem" }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Description:"
            desc="Add any description that you would like to include."
          />

          <LabelTopTextField
            placeholder="Description"
            multiline
            rows={10}
            sx={{
              mt: "3.13rem",
              maxWidth: "31.125rem",
              ".MuiOutlinedInput-root": {
                "textArea::placeholder": {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  opacity: 1,
                },
              },

              ".MuiInputBase-root": {
                textArea: {
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  px: { xs: "0.25rem", md: "1.37rem" },
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="No. of Bedrooms:"
            desc="How many bed rooms does this property have?"
          />

          <Stack
            direction={"row"}
            sx={{ gap: "1.44rem", mt: "3.11rem", flexWrap: "wrap" }}
          >
            {beds.map((val, index) => (
              <TextLg
                key={index}
                text={val}
                onClick={() => setBathsValue(val)}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  cursor: "pointer",
                  borderRadius: "0.9375rem",
                  padding: "0.75rem 1.69rem",
                  boxShadow:
                    bathsValue === val
                      ? "0px 0px 0px 4px var(--text-primary) inset"
                      : "0px 0px 0px 1px var(--spanish-gray) inset",
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack>
          <TitleDesc
            title="No. of Bathrooms:"
            desc="How many bathrooms does this property have?"
          />

          <Stack
            direction={"row"}
            sx={{ gap: "1.44rem", mt: "3.11rem", flexWrap: "wrap" }}
          >
            {baths.map((val, index) => (
              <TextLg
                key={index}
                text={val}
                onClick={() => setBedsValue(val)}
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  cursor: "pointer",
                  borderRadius: "0.9375rem",
                  padding: "0.75rem 1.69rem",
                  boxShadow:
                    bedsValue === val
                      ? "0px 0px 0px 4px var(--text-primary) inset"
                      : "0px 0px 0px 1px var(--spanish-gray) inset",
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Stack>
          <TitleDesc
            title="Features:"
            desc="what features does yor property have?"
          />

          <FilledButton
            text="Add Features"
            onClick={() => setOpenFeatures(true)}
            startIcon={
              <Image
                priority
                src={PlusIcon}
                alt={"PlusIcon"}
                width={30}
                height={30}
              />
            }
            sx={{
              mt: "3.12rem",
              padding: "0",
              fontSize: "1.25rem",
              fontWeight: "400",
              gap: "0.62rem",
              width: "13rem",
              height: "3rem",
              boxShadow: "none",
              ":hover": {
                boxShadow: "none",
              },
            }}
          />

          <Stack direction={"row"} sx={{ mt: "1.42rem" }}>
            <Stack
              direction={"row"}
              sx={{
                gap: "1.88rem",
                backgroundColor: "rgba(227, 227, 227, 0.48)",
                padding: "0.56rem 1.37rem",
                borderRadius: "0.625rem",
                alignItems: "center",
                ".closeIcon": {
                  cursor: "pointer",
                },
              }}
            >
              <IconText
                icon={FlameGreyIcon}
                iconWidth={30}
                iconHeight={30}
                text="Gas"
                sxText={{ fontSize: "1.25rem", color: "var(--spanish-gray)" }}
              />

              <Image
                className="closeIcon"
                src={CloseGreyIcon}
                alt="close icon"
                width={30}
                height={30}
              />
            </Stack>
          </Stack>
        </Stack>

        <FilledButton
          text="Inquire"
          sx={{
            mb: "6.21rem",
            alignSelf: "center",
            padding: "0",
            fontSize: "1.25rem",
            fontWeight: "400",
            width: "11rem",
            height: "3rem",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
          }}
        />
      </Stack>
    </>
  );
};

export default Investment;
