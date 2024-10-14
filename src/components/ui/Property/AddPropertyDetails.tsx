"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import IconText from "@/components/common/IconText";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import {
  areas,
  baths,
  beds,
  propertyTypes,
  rentSell,
} from "@/constants/filters";
import {
  BannerImage,
  CloseGreyIcon,
  CloseRoundedIcon,
  FlameGreyIcon,
  PlusGreyIcon,
  PlusIcon,
  Property1Image,
  Property2Image,
  UploadImageIcon,
} from "@/constants/images.routes";
import { dues, status } from "@/constants/property";
import { Box, Grid2, Stack, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  desc: string;
}

const TitleDesc = ({ title, desc }: Props) => {
  return (
    <Stack direction={"row"} sx={{ alignItems: "center", gap: "0.62rem" }}>
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

const AddPropertyDetails = () => {
  const [propertyPurpose, setPropertyPurpose] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [propertyTypeValue, setPropertyTypeValue] = useState<{
    type: string;
    category: string;
  }>({ type: "Residential", category: "" });
  const [duesValue, setDuesValues] = useState({ title: "Dues", value: "" });
  const [statusValue, setStatusValue] = useState({
    title: "Status",
    value: "",
  });
  const [areaValue, setAreaValue] = useState<{
    title: string;
    value: string;
  }>({ title: "Marla", value: "marla" });
  const [bathsValue, setBathsValue] = useState<string>("2");

  const [bedsValue, setBedsValue] = useState<string>("1");
  const [openFeatures, setOpenFeatures] = useState(false);

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Stack sx={{ pt: "2.38rem", px: "8.81rem" }}>
      <TitleDesc
        title="Purpose:"
        desc="What do you do to with your property?"
      />

      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          gap: "2.69rem",
          mt: "3.13rem",
        }}
      >
        {rentSell.map((val) => (
          <IconText
            onClick={() => setPropertyPurpose(val.value)}
            text={val.title}
            icon={val.icon}
            iconWidth={30}
            iconHeight={30}
            sxRow={{
              cursor: "pointer",
              gap: "0.63rem",
              borderRadius: "0.9375rem",
              padding: "0.75rem 1.69rem",
              boxShadow:
                propertyPurpose === val.value
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

      <Stack sx={{ gap: "6.25rem", mt: "6.25rem" }}>
        <Stack sx={{ width: "46.50206rem" }}>
          <TitleDesc title="Property Type:" desc="Choose you property type." />
          <Box
            sx={{
              borderBottom: "1px solid var(--platinum)",
              mt: "3.12rem",
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

          {propertyTypes.map(
            ({ index, items, type }) =>
              tabValue === index && (
                <Stack
                  key={index}
                  direction={"row"}
                  sx={{
                    flexWrap: "wrap",
                    gap: "1.62rem",
                    padding: "3.32rem 1.38rem 1rem 0",
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
        </Stack>

        <Stack>
          <TitleDesc title="Dues:" desc="Are all your dues cleared?" />
          <SelectField
            iconWidth={30}
            iconHeight={30}
            text={duesValue.title}
            sx={{
              mt: "3.12rem",
              minWidth: "10.9375rem",
              width: "fit-content",
              border: "1px solid var(--platinum)",
              borderRadius: "0.3125rem",
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
              {dues.map((val, index) => (
                <TextLg
                  text={val.title}
                  onClick={() => setDuesValues(val)}
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    padding: "0.5rem",
                    borderBottom:
                      index !== dues.length - 1
                        ? "1px solid var(--platinum)"
                        : "none",
                  }}
                />
              ))}
            </MenuCard>
          </SelectField>
        </Stack>

        <Stack>
          <TitleDesc
            title="Status:"
            desc="What is the status of your property?"
          />
          <SelectField
            iconWidth={30}
            iconHeight={30}
            text={statusValue.title}
            sx={{
              mt: "3.12rem",
              minWidth: "10.9375rem",
              width: "fit-content",
              border: "1px solid var(--platinum)",
              borderRadius: "0.3125rem",
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
              {status.map((val, index) => (
                <TextLg
                  text={val.title}
                  onClick={() => setStatusValue(val)}
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "400",
                    padding: "0.5rem",
                    borderBottom:
                      index !== status.length - 1
                        ? "1px solid var(--platinum)"
                        : "none",
                  }}
                />
              ))}
            </MenuCard>
          </SelectField>
        </Stack>

        <Stack>
          <TitleDesc
            title="City:"
            desc="Which city is your property located in?"
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
                  px: "2.31rem",
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Location:"
            desc="What is the location of your property?"
          />
          <LabelTopTextField
            placeholder="Location"
            sx={{
              mt: "3.13rem",
              maxWidth: "53.375rem",
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
                  px: "2.31rem",
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc title="Area:" desc="Wat is the size of your property?" />
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
                  px: "2.31rem",
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Asking Price:"
            desc="How much do you want for your property?"
          />

          <LabelTopTextField
            placeholder="Price"
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
                  px: "2.31rem",
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
            title="No. of Bedrooms:"
            desc="How many bed rooms does your property have?"
          />

          <Stack direction={"row"} sx={{ gap: "1.44rem", mt: "3.11rem" }}>
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
            desc="How many bathrooms does your property have?"
          />

          <Stack direction={"row"} sx={{ gap: "1.44rem", mt: "3.11rem" }}>
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

        <Stack>
          <TitleDesc
            title="Name of Property:"
            desc="Add the Title of your post."
          />

          <LabelTopTextField
            placeholder="Name of Property"
            sx={{
              mt: "3.13rem",
              maxWidth: "53.375rem",
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
                  px: "2.31rem",
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Description:"
            desc="Add any description required."
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
                  px: "1.37rem",
                },
              },
            }}
          />
        </Stack>

        <Stack>
          <TitleDesc
            title="Upload Images:"
            desc="what features does yor property have?"
          />

          <Grid2
            container
            spacing={4}
            sx={{
              mt: "2.3rem",
              border: "1px solid var(--spanish-gray)",
              borderRadius: "0.9375rem",
              paddingX: "2.87rem",
              paddingY: "3.44rem",
            }}
          >
            {[
              BannerImage,
              Property1Image,
              Property2Image,
              BannerImage,
              Property1Image,
              Property2Image,
            ].map((val) => (
              <Grid2 size={{ xs: 6, md: 4, lg: 3 }}>
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#EAE8E8",
                    width: "fit-content",
                    position: "relative",
                    ".propertyImg": { objectFit: "contain" },
                    ".closeIcon": {
                      position: "absolute",
                      top: "-20px",
                      right: "-25px",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Image
                    className="propertyImg"
                    src={val}
                    alt="property image"
                    width={184}
                    height={165}
                  />
                  <Image
                    className="closeIcon"
                    src={CloseRoundedIcon}
                    alt="close icon"
                    width={60}
                    height={60}
                  />
                </Stack>
              </Grid2>
            ))}

            <Grid2 size={{ xs: 6, md: 4, lg: 3 }}>
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EAE8E8",
                  padding: "2.69rem 3.25rem",
                  width: "11.5rem",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={PlusGreyIcon}
                  alt="property image"
                  width={80}
                  height={80}
                />
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>

        <Stack>
          <TitleDesc title="Upload Allotment Letter:" desc="" />
          <TextLg
            text={"(Optional)"}
            sx={{ fontWeight: "400", color: "var(--text-black)" }}
          />

          <Stack
            sx={{
              mt: "2.5rem",
              border: "1px solid var(--spanish-gray)",
              borderRadius: "0.9375rem",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "3.14rem",
            }}
          >
            <Stack sx={{ alignItems: "center" }}>
              <Image
                src={UploadImageIcon}
                alt="upload image"
                width={100}
                height={100}
              />
              <TextMd
                text="Click here to upload images"
                sx={{ fontWeight: "400" }}
              />
            </Stack>
          </Stack>
        </Stack>

        <FilledButton
          text="Add Property"
          sx={{
            mb: "6.21rem",
            alignSelf: "center",
            padding: "0",
            fontSize: "1.25rem",
            fontWeight: "400",
            width: "13.25rem",
            height: "3rem",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default AddPropertyDetails;
