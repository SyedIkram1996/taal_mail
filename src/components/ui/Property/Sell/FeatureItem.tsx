import FilledButton from "@/components/common/Button/FilledButton";
import CircleCheckBoxFilledIcon from "@/components/common/SvgIcons/CircleCheckBoxFilledIcon";
import CircleCheckboxOutlinedIcon from "@/components/common/SvgIcons/CircleCheckboxOutlinedIcon";
import SvgIconText from "@/components/common/SvgIconText";
import TextXs from "@/components/common/Text/TextXs";

import { EPropertyFeaturesType } from "@/enums/enums";
import { arrayContainObject } from "@/utils/helperFunctions";
import { Grid2, Stack } from "@mui/material";

const { MULTIPLE, SINGLE } = EPropertyFeaturesType;

interface Props {
  currentArray: any;
  val: { title: string; type: string };
  Icon: any;
  tabValue: string;
  handleIncrement: (value: string) => void;
  handleDecrement: (value: string) => void;
  handleClickUnCheckBox: (value: string) => void;
  handleClickCheckBox: (value: string) => void;
}

const FeatureItem = ({
  currentArray,
  val,
  Icon,
  tabValue,
  handleIncrement,
  handleDecrement,
  handleClickUnCheckBox,
  handleClickCheckBox,
}: Props) => {
  const selectedItem = currentArray.find(
    (curr: any) => val.title === curr.title,
  );

  return (
    <Grid2
      size={6}
      sx={{
        border: "1px solid var(--spanish-gray)",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        borderRadius: "0.9375rem",
        padding: "0.75rem 1.69rem",
        height: { xs: "auto", md: "fit-content" },
      }}
    >
      <SvgIconText
        text={val.title}
        icon={<Icon sx={{ width: "30px", height: "30px" }} />}
        sxRow={{
          flexDirection: { xs: "column", md: "row" },

          gap: "0.63rem",
        }}
        sxText={{
          fontSize: "1.25rem",
          color: "var(--text-primary)",
          textAlign: { xs: "center", md: "start" },
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
          <FilledButton
            disableRipple
            text="-"
            onClick={() => handleDecrement(val.title)}
          />
          <TextXs
            text={selectedItem ? selectedItem.count : "0"}
            sx={{ color: "var(--text-black)" }}
          />
          <FilledButton
            disableRipple
            text="+"
            onClick={() => handleIncrement(val.title)}
          />
        </Stack>
      ) : arrayContainObject(
          currentArray,
          {
            title: val.title,
            count: 1,
            tabValue,
            icon: Icon,
          },
          "title",
        ) ? (
        <CircleCheckBoxFilledIcon
          onClick={() => handleClickUnCheckBox(val.title)}
          sx={{ width: "26px", height: "26px", cursor: "pointer" }}
        />
      ) : (
        <CircleCheckboxOutlinedIcon
          onClick={() => handleClickCheckBox(val.title)}
          sx={{ width: "26px", height: "26px", cursor: "pointer" }}
        />
      )}
    </Grid2>
  );
};

export default FeatureItem;
