import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import IconText from "@/components/common/IconText";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import TextXs from "@/components/common/Text/TextXs";
import {
  CircleCheckboxFilledIcon,
  CircleCheckboxOutlinedIcon,
  CloseGreyIcon,
  FlameGreyIcon,
  PlusIcon,
} from "@/constants/images.routes";
import { features } from "@/constants/property";
import { EPropertyFeatures, EPropertyFeaturesType } from "@/enums/enums";
import { arrayContainObject } from "@/utils/helperFunctions";
import { Box, Dialog, Grid2, Stack, Tab, Tabs } from "@mui/material";
import Image from "next/image";
import { clone } from "ramda";
import { useMemo, useState } from "react";

const { BASIC_FEATURES_VALUE } = EPropertyFeatures;
const { MULTIPLE, SINGLE } = EPropertyFeaturesType;

interface SelectedFeatureProps {
  icon: string;
  text: string;
}

const SelectedFeature = ({ icon, text }: SelectedFeatureProps) => {
  return (
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
        icon={icon}
        iconWidth={30}
        iconHeight={30}
        text={text}
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
  );
};

interface Props {
  value: any;
  formik: any;
}

const FeaturesSelect = ({ value, formik }: Props) => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [tabValue, setTabValue] = useState<string>(BASIC_FEATURES_VALUE);
  const [tempValues, setTempValues] = useState<any>(clone(value));

  const handleChangeTab = (val: string) => {
    setTabValue(val);
  };

  const handleClickCheckBox = (title: string) => {
    let temp = clone(tempValues);
    temp[tabValue].push({ title, count: 1 });
    setTempValues(temp);
  };

  const handleClickUnCheckBox = (title: string) => {
    const filteredValue = tempValues[tabValue].filter(
      (val: any) => val.title !== title,
    );
    const newValue = { ...tempValues, [tabValue]: filteredValue };
    setTempValues(newValue);
  };

  const handleClickConfirm = () => {
    formik.setFieldValue("features", tempValues);
    setOpenFeatures(false);
  };

  const handleClickClose = () => {
    setTempValues(clone(value));
  };

  const currentArray = tempValues[tabValue];

  const selectedFeatures = useMemo(
    () => [
      ...value.basicFeatures,
      ...value.facilities,
      ...value.nearbyPlaces,
      ...value.secondaryFeatures,
    ],
    [openFeatures],
  );

  console.log("tempValues=====>", tempValues);
  console.log("value=====>", value);

  return (
    <Stack>
      <FieldTitleDesc
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

      <Stack
        direction={"row"}
        sx={{ mt: "1.42rem", gap: "1rem", flexWrap: "wrap" }}
      >
        {selectedFeatures.map((val: any, index: any) => (
          <SelectedFeature key={index} icon={FlameGreyIcon} text={val.title} />
        ))}
      </Stack>

      <Dialog
        scroll="body"
        open={openFeatures}
        onClose={handleClickClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            width: "55.625rem",
          },
        }}
      >
        <Stack
          sx={{
            paddingTop: "2rem",
            position: "relative",
            px: "2.31rem",
          }}
        >
          <DialogHeader
            title={"Features"}
            setOpen={setOpenFeatures}
            onClose={handleClickClose}
          />

          <Box
            sx={{
              borderBottom: "1px solid var(--platinum)",
              mt: "2rem",
              mx: "2.44rem",
              // maxWidth: { xs: 350, md: "initial" },
            }}
          >
            <Tabs
              value={tabValue}
              // variant="scrollable"
              // allowScrollButtonsMobile
              sx={{
                ".MuiTabs-flexContainer": {
                  gap: { xs: "1rem", md: "2rem" },
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
              {features.map((val, index) => (
                <Tab
                  key={val.title}
                  disableRipple
                  label={val.title}
                  value={val.value}
                  onClick={() => handleChangeTab(val.value)}
                />
              ))}
            </Tabs>
          </Box>

          <Box
            sx={{
              paddingY: { xs: "2rem 0", md: "0" },
              height: "280px",
              overflow: "auto",
              pr: "0.38rem",
              mt: "2.21rem",
            }}
          >
            {features.map(
              ({ title, items, value }) =>
                tabValue === value && (
                  <Grid2
                    spacing={2}
                    container
                    key={title}
                    sx={
                      {
                        // gap: "1.62rem",
                      }
                    }
                  >
                    {items.map((val) => (
                      <Grid2
                        size={{ xs: 12, md: 6 }}
                        sx={{
                          border: "1px solid var(--spanish-gray)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          borderRadius: "0.9375rem",
                          padding: "0.75rem 1.69rem",
                          height: "fit-content",
                          ".checkBox": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        <IconText
                          key={val.title}
                          //   onClick={() => handleChangeType(val.text)}
                          text={val.title}
                          icon={val.icon}
                          iconWidth={30}
                          iconHeight={30}
                          sxRow={{
                            cursor: "pointer",
                            gap: "0.63rem",
                          }}
                          sxText={{
                            fontSize: "1.25rem",
                            color: "var(--text-primary)",
                          }}
                        />

                        {val.type === MULTIPLE ? (
                          <Stack
                            direction={"row"}
                            sx={{
                              gap: "0.76rem",
                              button: {
                                width: "1.36rem",
                                height: "1.36rem",
                                padding: "0",
                                minWidth: "1rem",
                                borderRadius: "0.375rem",
                                backgroundColor: "var(--text-secondary)",
                                ":hover": {
                                  backgroundColor: "var(--text-secondary)",
                                },
                              },
                            }}
                          >
                            <FilledButton disableRipple text="-" />
                            <TextXs
                              text="0"
                              sx={{ color: "var(--text-black)" }}
                            />
                            <FilledButton disableRipple text="+" />
                          </Stack>
                        ) : arrayContainObject(
                            currentArray,
                            { title: val.title, count: 1 },
                            "title",
                          ) ? (
                          <Image
                            className="checkBox"
                            onClick={() => handleClickUnCheckBox(val.title)}
                            alt="tick"
                            src={CircleCheckboxFilledIcon}
                            width={26}
                            height={26}
                          />
                        ) : (
                          <Image
                            className="checkBox"
                            onClick={() => handleClickCheckBox(val.title)}
                            alt="tick"
                            src={CircleCheckboxOutlinedIcon}
                            width={26}
                            height={26}
                          />
                        )}
                      </Grid2>
                    ))}
                  </Grid2>
                ),
            )}
          </Box>

          <FilledButton
            text="Confirm"
            onClick={() => {
              handleClickConfirm();
            }}
            sx={{
              mt: "3.25rem",
              mb: "2.31rem",
              width: "14.5rem",
              fontSize: "1.25rem",
              padding: "0",
              height: "3.4375rem",
              alignSelf: { xs: "center" },
            }}
          />
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default FeaturesSelect;
