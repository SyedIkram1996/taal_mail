import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const LocationField = ({ handleChange, value, error }: Props) => {
  console.log("rerender Location");
  return (
    <Stack id="location">
      <FieldTitleDesc
        title="Location:"
        desc="What is the location of your property?"
        error={error}
      />
      <LabelTopTextField
        name="location"
        placeholder="Location"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        sx={{
          mt: "3.13rem",
          maxWidth: "53.375rem",
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

export default memo(LocationField);
