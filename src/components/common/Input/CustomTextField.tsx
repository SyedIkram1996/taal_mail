import { Stack } from "@mui/material";
import { memo } from "react";
import FieldTitleDesc from "./FieldTitleDesc";
import LabelTopTextField from "./LabelTopTextField";

interface Props {
  id?: string;
  name?: string;
  placeholder: string;
  title: string;
  desc?: string;
  type?: string;
  handleChange: any;
  value: string;
  error: string;
}

const CustomTextField = ({
  id,
  name,
  placeholder,
  title,
  desc,
  type,
  handleChange,
  value,
  error,
}: Props) => {
  return (
    <Stack id={id}>
      <FieldTitleDesc title={title} desc={desc} error={error} />

      <LabelTopTextField
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
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

export default memo(CustomTextField);
