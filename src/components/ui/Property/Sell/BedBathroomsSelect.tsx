import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import TextLg from "@/components/common/Text/TextLg";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  id?: string;
  title: string;
  options: string[];
  desc?: string;
  handleChange: any;
  value: string;
  error: string;
}

const BedBathroomsSelect = ({
  handleChange,
  value,
  error,
  id,
  title,
  options,
  desc,
}: Props) => {
  return (
    <Stack id={id}>
      <FieldTitleDesc title={title} desc={desc} error={error} />

      <Stack
        direction={"row"}
        sx={{ gap: "1.44rem", mt: "3.11rem", flexWrap: "wrap" }}
      >
        {options.map((val, index) => (
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

export default memo(BedBathroomsSelect);
