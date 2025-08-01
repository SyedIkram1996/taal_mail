import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const CityField = ({ handleChange, value, error }: Props) => {
  return (
    <Stack id="city">
      <FieldTitleDesc
        title="City:"
        desc="Which city is your property located in?"
        error={error}
      />
      <LabelTopTextField
        name="city"
        placeholder="City"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
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
              px: { xs: "1rem", md: "2.31rem" },
            },
          },
        }}
      />
    </Stack>
  );
};

export default memo(CityField);
