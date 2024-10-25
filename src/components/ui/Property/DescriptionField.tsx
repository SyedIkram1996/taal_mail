import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import { Stack } from "@mui/material";

interface Props {
  handleChange: any;
  value: string;
}

const DescriptionField = ({ handleChange, value }: Props) => {
  return (
    <Stack>
      <FieldTitleDesc
        title="Description:"
        desc="Add any description required."
      />

      <LabelTopTextField
        name="description"
        placeholder="Description"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        multiline
        rows={10}
        sx={{
          mt: "3.13rem",
          maxWidth: { md: "31.125rem" },
          ".MuiOutlinedInput-root": {
            "textArea::placeholder": {
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              opacity: 1,
            },
          },

          ".MuiInputBase-root": {
            textArea: {
              fontSize: "1.25rem",
              color: "var(--text-primary)",
              px: { xs: "0.25rem", md: "1.37rem" },
            },
          },
        }}
      />
    </Stack>
  );
};

export default DescriptionField;
