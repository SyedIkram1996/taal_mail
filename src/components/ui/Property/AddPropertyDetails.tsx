"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import MenuCard from "@/components/common/Card/MenuCard";
import IconText from "@/components/common/IconText";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import { propertyTypes, rentSell } from "@/constants/filters";
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
import {
  EPropertyClassification,
  EPropertyDues,
  EPropertyStatus,
} from "@/enums/enums";
import { IProperty } from "@/interfaces/IProperty";
import { propertySchema } from "@/validators/property";
import { Box, Grid2, Stack, Tab, Tabs } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { useCallback, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import AreaField from "./AreaField";
import BathroomsSelect from "./BathroomsSelect";
import BedroomsSelect from "./BedroomsSelect";
import CityField from "./CityField";
import DescriptionField from "./DescriptionField";
import LocationField from "./LocationField";
import NameField from "./NameField";
import PriceField from "./PriceField";

const { RESIDENTIAL_VALUE } = EPropertyClassification;
const { CLEARED } = EPropertyDues;
const { COMPLETION } = EPropertyStatus;

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

const AddPropertyDetails = () => {
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

  const formik = useFormik<IProperty>({
    initialValues: {
      id: "",
      purpose: "",
      classification: RESIDENTIAL_VALUE,
      type: "",
      duesCleared: "",
      status: "",
      city: "",
      location: "",
      area: {
        type: "",
        totalArea: "",
      },
      price: {
        askingPrice: "",
        currency: "PKR",
      },
      bedrooms: "",
      bathrooms: "",
      features: {
        basicFeatures: [],
        facilities: [],
        nearbyPlaces: [],
        secondaryFeatures: [],
      },
      name: "",
      description: "",
      images: [
        {
          public_id: "",
          url: "",
        },
      ],
      allotmentLetter: {
        public_id: "",
        url: "",
      },
    },
    onSubmit: () => {
      // setLoginError("");
      // mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(propertySchema),
  });

  // console.log(
  //   `Values : ${JSON.stringify(formik.values)}\n\nerrors : ${JSON.stringify(
  //     formik.errors
  //   )}\n\n`
  // );

  const formikValues = formik.values;
  const { purpose } = formikValues;

  const handleChangeLocation = useCallback((e: any) => {
    formik.setFieldTouched("location", false);
    formik.handleChange(e);
  }, []);

  const handleChangeCity = useCallback((e: any) => {
    formik.setFieldTouched("city", false);
    formik.handleChange(e);
  }, []);

  const handleChangeTotalArea = useCallback((e: any) => {
    formik.setFieldTouched("area.totalArea", false);
    formik.setFieldValue("area.totalArea", e.target.value);
  }, []);

  const handleChangeType = useCallback((value: any) => {
    formik.setFieldValue("area.type", value);
  }, []);

  const handleChangePrice = useCallback((e: any) => {
    formik.setFieldTouched("price.askingPrice", false);
    formik.setFieldValue("price.askingPrice", e.target.value);
  }, []);

  const handleChangeBedrooms = useCallback((value: any) => {
    formik.setFieldValue("bedrooms", value);
  }, []);

  const handleChangeBathrooms = useCallback((value: any) => {
    formik.setFieldValue("bathrooms", value);
  }, []);

  const handleChangeName = useCallback((e: any) => {
    formik.setFieldTouched("name", false);
    formik.handleChange(e);
  }, []);

  const handleChangeDescription = useCallback((e: any) => {
    formik.setFieldTouched("description", false);
    formik.handleChange(e);
  }, []);

  return (
    <Stack
      component={"form"}
      onSubmit={formik.handleSubmit}
      sx={{
        pt: "2.38rem",
        px: { xs: "1rem", md: "2rem", lg: "8.81rem" },
        maxWidth: "xl",
      }}
    >
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
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {rentSell.map((val) => (
          <IconText
            key={val.title}
            onClick={() => formik.setFieldValue("purpose", val.value)}
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
                purpose === val.value
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
        <Stack
          sx={{
            width: { xs: "100%", md: "46.50206rem" },
            alignItems: { xs: "center", md: "inherit" },
          }}
        >
          <TitleDesc title="Property Type:" desc="Choose you property type." />
          <Box
            sx={{
              borderBottom: "1px solid var(--platinum)",
              mt: "3.12rem",
              // maxWidth: { xs: 350, md: "initial" },
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleChangeTabs}
              // variant="scrollable"
              // allowScrollButtonsMobile
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
                <Tab
                  key={val.type}
                  disableRipple
                  label={val.type}
                  onClick={() =>
                    formik.setFieldValue("classification", val.value)
                  }
                />
              ))}
            </Tabs>
          </Box>

          {propertyTypes.map(
            ({ index, items }) =>
              tabValue === index && (
                <Stack
                  key={index}
                  direction={"row"}
                  sx={{
                    flexWrap: "wrap",
                    gap: "1.62rem",
                    padding: { xs: "2rem 0", md: "3.32rem 1.38rem 1rem 0" },
                  }}
                >
                  {items.map((val) => (
                    <IconText
                      key={val.text}
                      onClick={() => formik.setFieldValue("type", val.text)}
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
                          formikValues.type === val.text
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
            text={
              formikValues.duesCleared
                ? formikValues.duesCleared === CLEARED
                  ? "All dues cleared"
                  : "Not cleared"
                : "Dues"
            }
            sx={{
              mt: "3.12rem",
              minWidth: "10.9375rem",
              width: { md: "fit-content" },
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
                  key={val.title}
                  text={val.title}
                  onClick={() => formik.setFieldValue("duesCleared", val.value)}
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
            text={
              formikValues.status
                ? formikValues.status === COMPLETION
                  ? "Completion"
                  : "Possession"
                : "Status"
            }
            sx={{
              mt: "3.12rem",
              minWidth: "10.9375rem",
              width: { md: "fit-content" },
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
                  key={val.title}
                  text={val.title}
                  onClick={() => formik.setFieldValue("status", val.value)}
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

        <CityField handleChange={handleChangeCity} value={formikValues.city} />

        <LocationField
          handleChange={handleChangeLocation}
          value={formikValues.location}
        />
        <AreaField
          handleChangeTotalArea={handleChangeTotalArea}
          handleChangeType={handleChangeType}
          totalAreaValue={formikValues.area.totalArea}
          areaTypeValue={formikValues.area.type}
        />

        <PriceField
          handleChange={handleChangePrice}
          value={formikValues.price.askingPrice}
          currency={formikValues.price.currency}
        />

        <BedroomsSelect
          handleChange={handleChangeBedrooms}
          value={formikValues.bedrooms}
        />

        <BathroomsSelect
          handleChange={handleChangeBathrooms}
          value={formikValues.bathrooms}
        />

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

        <NameField handleChange={handleChangeName} value={formikValues.name} />

        <DescriptionField
          handleChange={handleChangeDescription}
          value={formikValues.description}
        />

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
              paddingX: { xs: "1rem", md: "2.87rem" },
              paddingY: { xs: "2rem", md: "3.44rem" },
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
              <Grid2
                key={val}
                size={{ xs: 12, md: 4, lg: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#EAE8E8",
                    width: "fit-content",
                    position: "relative",
                    ".propertyImg": {
                      objectFit: "cover",
                      width: { xs: "300px", md: "184px" },
                      height: { xs: "100%", md: "165px" },
                    },
                    ".closeIcon": {
                      position: "absolute",
                      top: { xs: "-10px", md: "-20px" },
                      right: { xs: "-15px", md: "-25px" },
                      cursor: "pointer",
                      width: { xs: "40px", md: "60px" },
                      height: { xs: "40px", md: "60px" },
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

            <Grid2
              size={{ xs: 6, md: 4, lg: 3 }}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
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
            sx={{
              fontWeight: "400",
              color: "var(--text-black)",
              textAlign: "center",
            }}
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
