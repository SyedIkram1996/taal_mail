import MenuCard from "@/components/common/Card/MenuCard";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import SelectField from "@/components/common/Input/SelectField";
import TextLg from "@/components/common/Text/TextLg";
import { status } from "@/constants/property";
import { EPropertyStatus } from "@/enums/enums";
import { Stack } from "@mui/material";
import { memo } from "react";

const { COMPLETION } = EPropertyStatus;

interface Props {
  handleChange: any;
  value: string;
}

const StatusSelect = ({ handleChange, value }: Props) => {
  return (
    <Stack>
      <FieldTitleDesc
        title="Status:"
        desc="What is the status of your property?"
      />
      <SelectField
        iconWidth={30}
        iconHeight={30}
        text={
          value
            ? value === COMPLETION
              ? "Completion"
              : "Possession"
            : "Status"
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
          {status.map((val, index) => (
            <TextLg
              key={val.title}
              text={val.title}
              onClick={() => handleChange(val.value)}
              sx={{
                fontSize: "1.25rem",
                fontWeight: "400",
                padding: "0.5rem",
                borderBottom:
                  index !== status.length - 1
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

export default memo(StatusSelect);
