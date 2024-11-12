import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import SvgIconText from "@/components/common/SvgIconText";
import {
  basicFeatures,
  facilities,
  features,
  nearbyPlaces,
  secondaryFeatures,
} from "@/constants/property";
import { EPropertyFeatures } from "@/enums/enums";
import { IPropertyFeature, IPropertyFeatures } from "@/interfaces/IProperty";
import { Box, Dialog, Grid2, Stack, Tab, Tabs } from "@mui/material";
import { clone } from "ramda";
import { useMemo, useState } from "react";
import FeatureItem from "./FeatureItem";

const {
  BASIC_FEATURES_VALUE,
  FACILITIES_VALUE,
  NEARBY_PLACES_VALUE,
  SECONDARY_FEATURES_VALUE,
} = EPropertyFeatures;

interface SelectedFeatureProps {
  icon: any;
  title: string;
  tab: string;
  count: number;
  pathFill?: boolean;
  handleRemoveFeature: (tab: string, title: string) => void;
}

const SelectedFeature = ({
  icon: Icon,
  title,
  tab,
  count,
  pathFill,
  handleRemoveFeature,
}: SelectedFeatureProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: "1.88rem",
        backgroundColor: "rgba(227, 227, 227, 0.48)",
        padding: "0.56rem 1.37rem",
        borderRadius: "0.625rem",
        alignItems: "center",
      }}
    >
      <SvgIconText
        text={`${title}${count > 1 ? ` (${count})` : ""}`}
        icon={
          <Icon
            sx={{
              path: {
                stroke: "var(--spanish-gray)",
                fill: pathFill ? "var(--spanish-gray)" : "none",
              },
            }}
          />
        }
        sxRow={{
          cursor: "pointer",
          gap: "0.63rem",
        }}
        sxText={{
          fontSize: "1.25rem",
          color: "var(--spanish-gray)",
        }}
      />

      <CrossIcon
        onClick={() => handleRemoveFeature(tab, title)}
        sx={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
          path: { fill: "#9E9E9E" },
        }}
      />
    </Stack>
  );
};

interface Props {
  value: IPropertyFeatures;
  formik: any;
  error: string;
  desc: string;
}

const getFeatureTabAndIcon = (
  tab: EPropertyFeatures,
  selectedItemsArray: IPropertyFeature[],
  constantsArray: any[],
) => {
  return selectedItemsArray.map((val) => {
    return {
      ...val,
      tab,
      icon: constantsArray.find((feature) => feature.title === val.title)?.icon,
      pathFill: constantsArray.find((feature) => feature.title === val.title)
        ?.pathFill,
    };
  });
};

const FeaturesSelect = ({ value, formik, error, desc }: Props) => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [tabValue, setTabValue] = useState<string>(BASIC_FEATURES_VALUE);
  const [tempValues, setTempValues] = useState<any>(clone(value));

  const handleChangeTab = (val: string) => {
    setTabValue(val);
  };

  const handleIncrement = (title: string) => {
    let temp = clone(tempValues);
    const featureIndex = temp[tabValue]
      .map((val: any) => val.title)
      .indexOf(title);

    if (featureIndex !== -1) {
      temp[tabValue][featureIndex].count =
        temp[tabValue][featureIndex].count + 1;
    } else {
      temp[tabValue].push({ title, count: 1, time: Date.now() });
    }

    setTempValues(temp);
  };

  const handleDecrement = (title: string) => {
    let temp = clone(tempValues);
    const featureIndex = temp[tabValue]
      .map((val: any) => val.title)
      .indexOf(title);

    if (featureIndex === -1) {
      return;
    }

    if (temp[tabValue][featureIndex].count !== 0) {
      temp[tabValue][featureIndex].count =
        temp[tabValue][featureIndex].count - 1;
    } else {
      temp[tabValue].splice(featureIndex, 1);
    }

    setTempValues(temp);
  };

  const handleClickCheckBox = (title: string) => {
    let temp = clone(tempValues);
    temp[tabValue].push({ title, count: 1, time: Date.now() });
    setTempValues(temp);
  };

  const handleClickUnCheckBox = (title: string) => {
    const filteredValue = tempValues[tabValue].filter(
      (val: IPropertyFeature) => val.title !== title,
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

  const handleRemoveFeature = (tab: string, title: string) => {
    //@ts-ignore
    const filteredValue = value[tab].filter((val: any) => val.title !== title);
    const newValue = { ...value, [tab]: filteredValue };
    formik.setFieldValue("features", newValue);
    setTempValues(newValue);
  };

  const currentArray = tempValues[tabValue];

  const selectedFeatures = useMemo(
    () =>
      [
        ...getFeatureTabAndIcon(
          BASIC_FEATURES_VALUE,
          value.basicFeatures,
          basicFeatures,
        ),
        ...getFeatureTabAndIcon(FACILITIES_VALUE, value.facilities, facilities),
        ...getFeatureTabAndIcon(
          NEARBY_PLACES_VALUE,
          value.nearbyPlaces,
          nearbyPlaces,
        ),
        ...getFeatureTabAndIcon(
          SECONDARY_FEATURES_VALUE,
          value.secondaryFeatures,
          secondaryFeatures,
        ),
      ].sort((a, b) => a.time - b.time),
    [value],
  );

  return (
    <Stack id="features">
      <FieldTitleDesc title="Features:" desc={desc} error={error} />

      <FilledButton
        text="Add Features"
        onClick={() => setOpenFeatures(true)}
        startIcon={<PlusIcon sx={{ width: "30px", height: "30px" }} />}
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
        sx={{
          mt: "1.42rem",
          gap: "1rem",
          flexWrap: "wrap",
          maxWidth: "53.375rem",
        }}
      >
        {selectedFeatures.map((val, index) => (
          <SelectedFeature
            key={index}
            icon={val.icon}
            title={val.title}
            tab={val.tab}
            count={val.count}
            pathFill={val.pathFill}
            handleRemoveFeature={handleRemoveFeature}
          />
        ))}
      </Stack>

      <Dialog
        scroll="body"
        open={openFeatures}
        maxWidth="md"
        PaperProps={{
          sx: {
            width: "55.625rem",
            margin: { xs: "1rem", md: "2rem" },
            maxWidth: {
              xs: "calc(100% - 32px) !important",
              md: "calc(100% - 64px) !important",
            },
          },
        }}
      >
        <Stack
          sx={{
            paddingTop: { xs: "1rem", md: "2rem" },
            position: "relative",
            px: { xs: "0.5rem", md: "2.31rem" },
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
              mt: { xs: "1rem", md: "2rem" },
              mx: { md: "2.44rem" },
              // maxWidth: { xs: 350, md: "initial" },
            }}
          >
            <Tabs
              value={tabValue}
              variant="scrollable"
              scrollButtons={false}
              sx={{
                ".MuiTabs-flexContainer": {
                  justifyContent: "space-between",
                  gap: "1rem",
                  // flexWrap: "wrap",
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
              height: { xs: "calc(100vh - 230px)", md: "280px" },
              overflow: "auto",
              pr: "0.38rem",
              mt: { xs: "1rem", md: "2.21rem" },
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
                    {items.map(({ icon: Icon, ...val }) => (
                      <FeatureItem
                        key={val.title}
                        currentArray={currentArray}
                        val={val}
                        Icon={Icon}
                        tabValue={tabValue}
                        handleClickCheckBox={handleClickCheckBox}
                        handleClickUnCheckBox={handleClickUnCheckBox}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                      />
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
              mt: { xs: "0.5rem", md: "3.25rem" },
              mb: { xs: "0.5rem", md: "2.31rem" },
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
