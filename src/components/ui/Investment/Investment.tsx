"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import CustomTextField from "@/components/common/Input/CustomTextField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import TextSm from "@/components/common/Text/TextSm";
import { IInvestment } from "@/interfaces/IInvestment";
import { investmentSchema } from "@/validators/investment";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useCallback } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import AreaField from "../Property/Sell/AreaField";
import FeaturesSelect from "../Property/Sell/FeaturesSelect";
import PriceField from "../Property/Sell/PriceField";

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
  const formik = useFormik<IInvestment>({
    initialValues: {
      username: "",
      email: "",
      area: {
        type: "sqft",
        totalArea: "",
      },
      price: {
        minPrice: "",
        maxPrice: "",
        currency: "PKR",
      },
      bedrooms: "",
      bathrooms: "",
      phoneNo: "",
      city: "",
      features: {
        basicFeatures: [],
        facilities: [],
        nearbyPlaces: [],
        secondaryFeatures: [],
      },
      description: "",
    },
    onSubmit: (values) => {
      // mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(investmentSchema),
  });

  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const handleChangeTextField = useCallback((e: any) => {
    const { name } = e.target;
    formik.setFieldTouched(name, false);
    formik.handleChange(e);
  }, []);

  const handleChangeTotalArea = useCallback((e: any) => {
    formik.setFieldTouched("area.totalArea", false);
    formik.setFieldValue("area.totalArea", e.target.value);
  }, []);

  const handleChangeAreaType = useCallback((value: any) => {
    formik.setFieldValue("area.type", value);
  }, []);

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
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          gap: "6.25rem",
          mt: "6.25rem",
          width: "100%",
          px: { xs: "1rem", md: "6.37rem" },
        }}
      >
        <CustomTextField
          id="username"
          name="username"
          placeholder="Enter your name"
          title="Name:"
          handleChange={handleChangeTextField}
          value={formikValues.username}
          error={
            formikErrors.username && formik.touched.username
              ? formikErrors.username
              : ""
          }
        />

        <CustomTextField
          id="email"
          name="email"
          placeholder="Enter your email"
          title="Email"
          handleChange={handleChangeTextField}
          value={formikValues.email}
          error={
            formikErrors.email && formik.touched.email ? formikErrors.email : ""
          }
        />

        <CustomTextField
          id="phoneNo"
          name="phoneNo"
          placeholder="Enter your phone number"
          title="Phone Number:"
          handleChange={handleChangeTextField}
          value={formikValues.phoneNo}
          error={
            formikErrors.phoneNo && formik.touched.phoneNo
              ? formikErrors.phoneNo
              : ""
          }
        />

        <CustomTextField
          id="city"
          name="city"
          placeholder="Enter your city"
          title="City:"
          desc="Which city/area is this property located in?"
          handleChange={handleChangeTextField}
          value={formikValues.city}
          error={
            formikErrors.city && formik.touched.city ? formikErrors.city : ""
          }
        />

        <AreaField
          handleChangeTotalArea={handleChangeTotalArea}
          handleChangeType={handleChangeAreaType}
          totalAreaValue={formikValues.area.totalArea}
          areaTypeValue={formikValues.area.type}
          desc="What is the size of this property?"
          error={
            formikErrors.area?.totalArea && formik.touched.area?.totalArea
              ? formikErrors.area?.totalArea
              : ""
          }
        />

        <PriceField
          handleChange={handleChangeTextField}
          value={formikValues.price.minPrice}
          currency={formikValues.price.currency}
          id={"price.minPrice"}
          title={"Minimum Price:"}
          name={"price.minPrice"}
          placeholder="Min Price"
          desc="What amount (minimum), do you want to invest?"
          error={
            formikErrors.price?.minPrice && formik.touched.price?.minPrice
              ? formikErrors.price?.minPrice
              : ""
          }
        />
        <PriceField
          handleChange={handleChangeTextField}
          value={formikValues.price.maxPrice}
          currency={formikValues.price.currency}
          id={"price.maxPrice"}
          title={"Maximum Price:"}
          name={"price.maxPrice"}
          placeholder="Max Price"
          desc="What amount (maximum), do you want to invest?"
          error={
            formikErrors.price?.maxPrice && formik.touched.price?.maxPrice
              ? formikErrors.price?.maxPrice
              : ""
          }
        />

        <CustomTextField
          id="description"
          name="description"
          placeholder="Enter description"
          title="Description:"
          desc="Add any description that you would like to include."
          handleChange={handleChangeTextField}
          value={formikValues.description}
          error={
            formikErrors.description && formik.touched.description
              ? formikErrors.description
              : ""
          }
        />

        <CustomTextField
          id="bedrooms"
          name="bedrooms"
          placeholder="Enter bedrooms"
          title="No. of Bedrooms:"
          desc="How many bed rooms does this property have?"
          handleChange={handleChangeTextField}
          value={formikValues.bedrooms}
          error={
            formikErrors.bedrooms && formik.touched.bedrooms
              ? formikErrors.bedrooms
              : ""
          }
        />
        <CustomTextField
          id="bathrooms"
          name="bathrooms"
          placeholder="Enter bathrooms"
          title="No. of Bathrooms:"
          desc="How many bathrooms does this property have?"
          handleChange={handleChangeTextField}
          value={formikValues.bedrooms}
          error={
            formikErrors.bedrooms && formik.touched.bedrooms
              ? formikErrors.bedrooms
              : ""
          }
        />

        <FeaturesSelect
          value={formikValues.features}
          formik={formik}
          desc="what features does this property have?"
          error={
            formikErrors.features && formik.touched.features
              ? `${formikErrors.features}`
              : ""
          }
        />

        <FilledButton
          type="submit"
          text="Inquire"
          onClick={() => {
            const errorsKeys = Object.keys(formikErrors);
            if (errorsKeys.length) {
              const element = document.getElementById(errorsKeys[0]);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
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
