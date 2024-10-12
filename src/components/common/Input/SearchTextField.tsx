import { SxProps, TextField, styled } from "@mui/material";
import { ChangeEventHandler, ReactNode } from "react";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    minWidth: "19.8125rem",
    backgroundColor: "var(--gray-100)",
    borderRadius: "0.5rem",
    "& fieldset": {
      borderColor: "var(--gray-200, #EAECF0)",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      borderRadius: "0.5rem",
    },
    "&:hover fieldset": {
      borderColor: "var(--gray-200, #EAECF0)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--gray-200, #EAECF0)",
    },

    "input::placeholder": {
      fontSize: "0.8125rem",
      color: "var(--text-secondary)",
      opacity: "1",
    },
    ".searchIcon": {
      marginRight: "0.5rem",
    },
  },
});

interface Props {
  placeholder: string;
  value?: string;
  defaultValue?: string;
  sx?: SxProps;
  error?: boolean;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const SearchTextField = ({
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  helperText,
  startIcon,
  endIcon,
  sx,
}: Props) => {
  return (
    <CustomTextField
      size="small"
      autoComplete="off"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      sx={{ ...sx }}
      InputProps={{
        startAdornment: startIcon,
        endAdornment: endIcon,
      }}
    />
  );
};

export default SearchTextField;
