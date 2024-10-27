import IconText from "@/components/common/IconText";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import { rentSell } from "@/constants/filters";
import { Stack } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const PurposeSelect = ({ handleChange, value, error }: Props) => {
  return (
    <Stack id="purpose">
      <FieldTitleDesc
        title="Purpose:"
        desc="What do you do to with your property?"
        error={error}
      />

      <Stack
        direction={"row"}
        sx={{
          flexWrap: "wrap",
          gap: "2.69rem",
          mt: "3.13rem",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {rentSell.map((val) => (
          <IconText
            key={val.title}
            onClick={() => handleChange(val.value)}
            text={val.title}
            icon={val.icon}
            iconWidth={30}
            iconHeight={30}
            sxRow={{
              cursor: "pointer",
              gap: "0.63rem",
              borderRadius: "0.9375rem",
              padding: "0.75rem 1.69rem",
              boxShadow:
                value === val.value
                  ? "0px 0px 0px 4px var(--text-primary) inset"
                  : "0px 0px 0px 1px var(--spanish-gray) inset",
            }}
            sxText={{
              fontSize: "1.25rem",
              color: "var(--text-primary)",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(PurposeSelect);
