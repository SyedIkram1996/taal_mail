"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import TextLg from "@/components/common/Text/TextLg";
import TextSm from "@/components/common/Text/TextSm";

import { EPropertyClassification } from "@/enums/enums";
import { IProperty } from "@/interfaces/IProperty";
import { propertySchema } from "@/validators/property";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import { useCallback } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import AreaField from "./AreaField";
import BathroomsSelect from "./BathroomsSelect";
import BedroomsSelect from "./BedroomsSelect";
import CityField from "./CityField";
import DescriptionField from "./DescriptionField";
import DuesSelect from "./DuesSelect";
import FeaturesSelect from "./FeaturesSelect";
import LocationField from "./LocationField";
import NameField from "./NameField";
import PriceField from "./PriceField";
import PurposeSelect from "./PurposeSelect";
import StatusSelect from "./StatusSelect";
import TypeSelect from "./TypeSelect";
import UploadAllotmentSelect from "./UploadAllotmentSelect";
import UploadImagesSelect from "./UploadImagesSelect";

const { RESIDENTIAL_VALUE } = EPropertyClassification;

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
      images: [],
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

  console.log(
    `Values : ${JSON.stringify(formik.values)}\n\nerrors : ${JSON.stringify(
      formik.errors,
    )}\n\n`,
  );

  const formikValues = formik.values;

  const handleChangePurpose = useCallback((value: any) => {
    formik.setFieldValue("purpose", value);
  }, []);

  const handleChangeClassification = useCallback((value: any) => {
    formik.setFieldValue("classification", value);
  }, []);

  const handleChangeType = useCallback((value: any) => {
    formik.setFieldValue("type", value);
  }, []);

  const handleChangeDues = useCallback((value: any) => {
    formik.setFieldValue("duesCleared", value);
  }, []);

  const handleChangeStatus = useCallback((value: any) => {
    formik.setFieldValue("status", value);
  }, []);

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

  const handleChangeAreaType = useCallback((value: any) => {
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

  const handleChangeAddImages = useCallback(
    (e: any) => {
      const files = Array.from(e.target.files);
      let oldImages = [...formikValues.images];

      files.forEach((file: any, index) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          if (reader.readyState === 2) {
            oldImages.push({
              public_id: "",
              url: reader.result as string,
            });
            formik.setFieldValue("images", oldImages);
          }
        };
      });
    },
    [formikValues.images],
  );

  const handleDeleteImage = useCallback(
    (index: number) => {
      let oldImages = [...formikValues.images];
      oldImages.splice(index, 1);

      formik.setFieldValue("images", oldImages);
    },
    [formikValues.images],
  );

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
      <PurposeSelect
        handleChange={handleChangePurpose}
        value={formikValues.purpose}
      />

      <Stack sx={{ gap: "6.25rem", mt: "6.25rem" }}>
        <TypeSelect
          handleChangeClassification={handleChangeClassification}
          handleChangeType={handleChangeType}
          classification={formikValues.classification}
          type={formikValues.type}
        />

        <DuesSelect
          handleChange={handleChangeDues}
          value={formikValues.duesCleared}
        />

        <StatusSelect
          handleChange={handleChangeStatus}
          value={formikValues.status}
        />

        <CityField handleChange={handleChangeCity} value={formikValues.city} />

        <LocationField
          handleChange={handleChangeLocation}
          value={formikValues.location}
        />
        <AreaField
          handleChangeTotalArea={handleChangeTotalArea}
          handleChangeType={handleChangeAreaType}
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

        <FeaturesSelect value={formikValues.features} formik={formik} />

        <NameField handleChange={handleChangeName} value={formikValues.name} />

        <DescriptionField
          handleChange={handleChangeDescription}
          value={formikValues.description}
        />

        <UploadImagesSelect
          handleChange={handleChangeAddImages}
          handleDeleteImage={handleDeleteImage}
          images={formikValues.images}
        />

        <UploadAllotmentSelect />

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
