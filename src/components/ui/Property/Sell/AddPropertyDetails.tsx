"use client";

import FilledButton from "@/components/common/Button/FilledButton";

import { revalidatePage } from "@/app/actions";
import TextMd from "@/components/common/Text/TextMd";
import { MY_PROPERTIES_PAGE } from "@/constants/page.routes";
import { EPropertyClassification } from "@/enums/enums";
import { IProperty } from "@/interfaces/IProperty";
import { addProperty, updateProperty } from "@/services/property.services";
import { propertySchema } from "@/validators/property";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
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
  token?: RequestCookie;
  data?: IProperty;
}

const AddPropertyDetails = ({ token, data }: Props) => {
  const [openPropertyAdded, setOpenPropertyAdded] = useState(false);
  const router = useRouter();
  const formik = useFormik<IProperty>({
    initialValues: {
      createdBy: data ? data.createdBy : "",
      id: data ? data.id : "",
      purpose: data ? data.purpose : "",
      classification: data ? data.classification : RESIDENTIAL_VALUE,
      type: data ? data.type : "",
      duesCleared: data ? data.duesCleared : "",
      status: data ? data.status : "",
      city: data ? data.city : "",
      location: data ? data.location : "",
      area: {
        type: data ? data.area.type : "sqft",
        totalArea: data ? data.area.totalArea : "",
      },
      price: {
        askingPrice: data ? data.price.askingPrice : "",
        currency: data ? data.price.currency : "PKR",
      },
      bedrooms: data ? data.bedrooms : "",
      bathrooms: data ? data.bathrooms : "",
      features: {
        basicFeatures: data ? data.features.basicFeatures : [],
        facilities: data ? data.features.facilities : [],
        nearbyPlaces: data ? data.features.nearbyPlaces : [],
        secondaryFeatures: data ? data.features.secondaryFeatures : [],
      },
      name: data ? data.name : "",
      description: data ? data.description : "",
      images: data ? data.images : [],
      allotmentLetter: {
        public_id: data ? data.allotmentLetter.public_id : "",
        url: data ? data.allotmentLetter.url : "",
      },
    },
    onSubmit: (values) => {
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(propertySchema),
  });

  const formikValues = formik.values;
  const formikErrors = formik.errors;

  const mutation = useMutation({
    mutationFn: async () => {
      if (formikValues.id) {
        return updateProperty(formikValues, token);
      }

      return addProperty(formikValues, token);
    },
    onSuccess: (data) => {
      // router.refresh();
      revalidatePage(MY_PROPERTIES_PAGE());
      setOpenPropertyAdded(true);
    },
    onError: (error) => {},
  });

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

  const handleChangeAddImages = (e: any) => {
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
            delete: false,
          });
          formik.setFieldValue("images", oldImages);
        }
      };
    });
  };

  const handleDeleteImage = useCallback(
    (index: number) => {
      let oldImages = [...formikValues.images];
      if (oldImages[index].public_id) {
        oldImages[index].delete = true;
      } else {
        oldImages.splice(index, 1);
      }

      formik.setFieldValue("images", oldImages);
    },
    [formikValues.images],
  );

  const handleChangeAllotmentLetter = useCallback(
    (e: any) => {
      const files = Array.from(e.target.files);

      files.forEach((file: any, index) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          if (reader.readyState === 2) {
            formik.setFieldValue("allotmentLetter", {
              public_id: "",
              url: reader.result as string,
            });
          }
        };
      });
    },
    [formikValues.allotmentLetter],
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
        error={
          formikErrors.purpose && formik.touched.purpose
            ? formikErrors.purpose
            : ""
        }
      />

      <Stack sx={{ gap: "6.25rem", mt: "6.25rem" }}>
        <TypeSelect
          handleChangeClassification={handleChangeClassification}
          handleChangeType={handleChangeType}
          classification={formikValues.classification}
          type={formikValues.type}
          error={
            formikErrors.type && formik.touched.type ? formikErrors.type : ""
          }
        />

        <DuesSelect
          handleChange={handleChangeDues}
          value={formikValues.duesCleared}
          error={
            formikErrors.duesCleared && formik.touched.duesCleared
              ? formikErrors.duesCleared
              : ""
          }
        />

        <StatusSelect
          handleChange={handleChangeStatus}
          value={formikValues.status}
          error={
            formikErrors.status && formik.touched.status
              ? formikErrors.status
              : ""
          }
        />

        <CityField
          handleChange={handleChangeCity}
          value={formikValues.city}
          error={
            formikErrors.city && formik.touched.city ? formikErrors.city : ""
          }
        />

        <LocationField
          handleChange={handleChangeLocation}
          value={formikValues.location}
          error={
            formikErrors.location && formik.touched.location
              ? formikErrors.location
              : ""
          }
        />
        <AreaField
          handleChangeTotalArea={handleChangeTotalArea}
          handleChangeType={handleChangeAreaType}
          totalAreaValue={formikValues.area.totalArea}
          areaTypeValue={formikValues.area.type}
          error={
            formikErrors.area?.totalArea && formik.touched.area?.totalArea
              ? formikErrors.area?.totalArea
              : ""
          }
        />

        <PriceField
          handleChange={handleChangePrice}
          value={formikValues.price.askingPrice}
          currency={formikValues.price.currency}
          error={
            formikErrors.price?.askingPrice && formik.touched.price?.askingPrice
              ? formikErrors.price?.askingPrice
              : ""
          }
        />

        <BedroomsSelect
          handleChange={handleChangeBedrooms}
          value={formikValues.bedrooms}
          error={
            formikErrors.bedrooms && formik.touched.bedrooms
              ? formikErrors.bedrooms
              : ""
          }
        />

        <BathroomsSelect
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
          error={
            formikErrors.features && formik.touched.features
              ? `${formikErrors.features}`
              : ""
          }
        />

        <NameField
          handleChange={handleChangeName}
          value={formikValues.name}
          error={
            formikErrors.name && formik.touched.name ? formikErrors.name : ""
          }
        />

        <DescriptionField
          handleChange={handleChangeDescription}
          value={formikValues.description}
          error={
            formikErrors.description && formik.touched.description
              ? formikErrors.description
              : ""
          }
        />

        <UploadImagesSelect
          handleChange={handleChangeAddImages}
          handleDeleteImage={handleDeleteImage}
          images={formikValues.images}
          error={
            formikErrors.images && formik.touched.images
              ? `${formikErrors.images}`
              : ""
          }
        />

        <UploadAllotmentSelect
          handleChange={handleChangeAllotmentLetter}
          allotmentLetter={formikValues.allotmentLetter}
        />

        <FilledButton
          text={formikValues.id ? "Update Property" : "Add Property"}
          type="submit"
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
            width: "13.25rem",
            height: "3rem",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
            },
          }}
        />
      </Stack>

      <Dialog
        open={openPropertyAdded}
        PaperProps={{
          sx: {
            width: "11.0625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem 0.81rem 1.87rem 0.81rem",
            alignItems: "center",
            gap: "1.87rem",
          }}
        >
          <TextMd
            text={formikValues.id ? "Property Updated" : "Property Added!"}
            sx={{
              width: "8.43rem",
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
              setOpenPropertyAdded(false);
            }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
            }}
          />
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default AddPropertyDetails;
