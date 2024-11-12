import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextMd from "@/components/common/Text/TextMd";
import { formatAmountToPKR } from "@/utils/maths";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChange: any;
  value: string;
  currency: string;
  error: string;
  title: string;
  id: string;
  name: string;
  placeholder: string;
  desc?: string;
}

const PriceField = ({
  handleChange,
  currency,
  value,
  error,
  title,
  id,
  name,
  desc,
  placeholder,
}: Props) => {
  return (
    <Stack id={id}>
      <FieldTitleDesc title={title} desc={desc} error={error} />

      <LabelTopTextField
        name={name}
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        endIcon={<TextMd text={currency} sx={{ fontWeight: "400" }} />}
        sx={{
          mt: "3.13rem",
          maxWidth: "52.375rem",
          ".MuiOutlinedInput-root": {
            height: "3",
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

      <TextMd
        text={`i.e ${formatAmountToPKR(Number(value))}`}
        sx={{ fontWeight: "400", pl: "2.31rem" }}
      />
    </Stack>
  );
};

export default memo(PriceField);
