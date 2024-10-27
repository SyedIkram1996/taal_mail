import MenuCard from "@/components/common/Card/MenuCard";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import { areas } from "@/constants/filters";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChangeTotalArea: any;
  handleChangeType: any;
  totalAreaValue: string;
  areaTypeValue: string;
  error: string;
}

const AreaField = ({
  handleChangeTotalArea,
  handleChangeType,
  totalAreaValue,
  areaTypeValue,
  error,
}: Props) => {
  console.log("render area");
  return (
    <Stack id="area">
      <FieldTitleDesc
        title="Area:"
        desc="What is the size of your property?"
        error={error}
      />
      <LabelTopTextField
        name="area"
        placeholder="Area"
        value={totalAreaValue}
        onChange={(e) => {
          handleChangeTotalArea(e);
        }}
        endIcon={
          <SelectField
            iconWidth={30}
            iconHeight={30}
            text={areaTypeValue ? areaTypeValue : "Area"}
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
                  key={val.title}
                  text={val.title}
                  onClick={() => handleChangeType(val.value)}
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
  );
};

export default memo(AreaField);
