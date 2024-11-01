import MenuCard from "@/components/common/Card/MenuCard";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import { dues } from "@/constants/property";
import { EPropertyDues } from "@/enums/enums";
import { Stack } from "@mui/material";
import { memo } from "react";

const { CLEARED } = EPropertyDues;

interface Props {
  handleChange: any;
  value: string;
  error: string;
}

const DuesSelect = ({ handleChange, value, error }: Props) => {
  return (
    <Stack id="duesCleared">
      <FieldTitleDesc
        title="Dues:"
        desc="Are all your dues cleared?"
        error={error}
      />
      <SelectField
        iconWidth={30}
        iconHeight={30}
        text={
          value
            ? value === CLEARED
              ? "All dues cleared"
              : "Not cleared"
            : "Dues"
        }
        sx={{
          mt: "3.12rem",
          minWidth: "10.9375rem",
          width: { md: "fit-content" },
          border: "1px solid var(--platinum)",
          borderRadius: "0.3125rem",
          ">p": {
            fontSize: "1.25rem",
            color: "var(--text-primary)",
          },
        }}
      >
        <MenuCard
          sx={{
            top: "3.8rem",
            width: "100%",
            borderRadius: "0rem 0rem 0.3125rem 0.3125rem",
          }}
        >
          {dues.map((val, index) => (
            <TextLg
              key={val.title}
              text={val.title}
              onClick={() => handleChange(val.value)}
              sx={{
                fontSize: "1.25rem",
                fontWeight: "400",
                padding: "0.5rem",
                borderBottom:
                  index !== dues.length - 1
                    ? "1px solid var(--platinum)"
                    : "none",
              }}
            />
          ))}
        </MenuCard>
      </SelectField>
    </Stack>
  );
};

export default memo(DuesSelect);
