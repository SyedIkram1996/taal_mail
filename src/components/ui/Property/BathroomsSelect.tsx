import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import TextLg from "@/components/common/Text/TextLg";
import { baths } from "@/constants/filters";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const BathroomsSelect = ({ handleChange, value, error }: Props) => {
  return (
    <Stack id="bathrooms">
      <FieldTitleDesc
        title="No. of Bathrooms:"
        desc="How many bathrooms does your property have?"
        error={error}
      />

      <Stack
        direction={"row"}
        sx={{ gap: "1.44rem", mt: "3.11rem", flexWrap: "wrap" }}
      >
        {baths.map((val, index) => (
          <TextLg
            key={val}
            text={val}
            onClick={() => handleChange(val)}
            sx={{
              fontSize: "1.25rem",
              fontWeight: "400",
              cursor: "pointer",
              borderRadius: "0.9375rem",
              padding: "0.75rem 1.69rem",
              boxShadow:
                value === val
                  ? "0px 0px 0px 4px var(--text-primary) inset"
                  : "0px 0px 0px 1px var(--spanish-gray) inset",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(BathroomsSelect);
