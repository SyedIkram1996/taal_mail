import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { Stack } from "@mui/material";

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const NameField = ({ handleChange, value, error }: Props) => {
  return (
    <Stack id="name">
      <FieldTitleDesc
        title="Name of Property:"
        desc="Add the Title of your post."
        error={error}
      />

      <LabelTopTextField
        name="name"
        placeholder="Name of Property"
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

export default NameField;
