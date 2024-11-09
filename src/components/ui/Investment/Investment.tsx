"use client";

import { revalidatePage } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import CustomTextField from "@/components/common/Input/CustomTextField";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { baths, beds } from "@/constants/filters";
import { ADMIN_INVESTORS_PAGE } from "@/constants/page.routes";
import { IInvestment } from "@/interfaces/IInvestment";
import { addInvestment } from "@/services/investment.services";
import { investmentSchema } from "@/validators/investment";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import AreaField from "../Property/Sell/AreaField";
import BedBathroomsSelect from "../Property/Sell/BedBathroomsSelect";
import FeaturesSelect from "../Property/Sell/FeaturesSelect";
import PriceField from "../Property/Sell/PriceField";

interface Props {
  title: string;
  desc: string;
}

const Investment = () => {
  const [openModal, setOpenModal] = useState(false);
  const formik = useFormik<IInvestment>({
    initialValues: {
      followUps: [],
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
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(investmentSchema),
  });

  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const mutation = useMutation({
    mutationFn: async () => addInvestment(formikValues),
    onSuccess: (data) => {
      // router.refresh();
      revalidatePage(ADMIN_INVESTORS_PAGE);
      setOpenModal(true);
    },
    onError: (error) => {},
  });

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

  const handleChangeBedrooms = useCallback((value: any) => {
    formik.setFieldValue("bedrooms", value);
  }, []);

  const handleChangeBathrooms = useCallback((value: any) => {
    formik.setFieldValue("bathrooms", value);
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

        <BedBathroomsSelect
          id={"bedrooms"}
          title={"No. of Bedrooms:"}
          desc={"How many bed rooms does this property have?"}
          options={beds}
          handleChange={handleChangeBedrooms}
          value={formikValues.bedrooms}
          error={
            formikErrors.bedrooms && formik.touched.bedrooms
              ? formikErrors.bedrooms
              : ""
          }
        />

        <BedBathroomsSelect
          id={"bathrooms"}
          title={"No. of Bathrooms:"}
          desc={"How many bathrooms does this property have?"}
          options={baths}
          handleChange={handleChangeBathrooms}
          value={formikValues.bathrooms}
          error={
            formikErrors.bathrooms && formik.touched.bathrooms
              ? formikErrors.bathrooms
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
          loading={mutation.isPending}
          disabled={mutation.isPending}
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

      <Dialog
        open={openModal}
        PaperProps={{
          sx: {
            width: "15.625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem",
            pb: "1.19rem",
            alignItems: "center",
          }}
        >
          <TextMd
            text={"Inquiry Sent!"}
            sx={{
              width: "11.875rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />
          <TextMd
            text={"Our agent will get in contact with you shortly."}
            sx={{
              width: "11.875rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />

          <FilledButton
            text="Ok"
            onClick={() => {
              formik.resetForm();
              setOpenModal(false);
            }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
              mt: "1.86rem",
            }}
          />
        </Stack>
      </Dialog>
    </>
  );
};

export default Investment;
