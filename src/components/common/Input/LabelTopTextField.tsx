import { Stack, SxProps, TextField, styled } from "@mui/material";

import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
} from "react";
import TextXs from "../Text/TextXs";

export interface ITextField {
  name?: string;
  value: string;
  label: string;
  placeholder: string;
  phoneNo?: boolean;
  error: boolean;
  helperText?: string;
}

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: "0.9375rem",
    "& fieldset": {
      border: "none",
      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      borderRadius: "0.9375rem",
    },

    "input::placeholder": {
      fontSize: "1.25rem",
      color: "var(--philippine-silver)",
      opacity: "1",
    },
    ".searchIcon": {
      marginRight: "1rem",
    },
    ".endIcon": {
      cursor: "pointer",
    },
  },
});

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  sx?: SxProps;
  sxLabel?: SxProps;
  sxContainer?: SxProps;
  error?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  rows?: number;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  maxLength?: number;
}

const LabelTopTextField = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  startIcon,
  endIcon,
  multiline,
  rows,
  sx,
  sxLabel,
  sxContainer,
  type,
  disabled,
  defaultValue,
  onKeyDown,
  onFocus,
  maxLength,
  autoFocus,
  readOnly,
}: Props) => {
  return (
    <Stack
      sx={{ gap: "0.375rem", ...sxContainer }}
      className="labelTopTextField"
    >
      {label && (
        <TextXs
          text={label}
          sx={{ fontWeight: "500", fontSize: "0.8125rem", ...sxLabel }}
        />
      )}
      <CustomTextField
        autoFocus={autoFocus}
        onFocus={onFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        multiline={multiline}
        autoComplete="off"
        autoCorrect="off"
        rows={rows}
        type={type}
        size="small"
        name={name}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        sx={{ ...sx }}
        inputProps={{ maxLength: maxLength, step: "any" }}
        InputProps={{
          endAdornment: endIcon,
          startAdornment: startIcon,
          readOnly: readOnly,
        }}
      />
    </Stack>
  );
};

export default LabelTopTextField;
