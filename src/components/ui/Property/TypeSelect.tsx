import IconText from "@/components/common/IconText";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import { propertyTypes } from "@/constants/filters";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { memo } from "react";

interface Props {
  handleChangeClassification: any;
  handleChangeType: any;
  classification: string;
  type: string;
}

const TypeSelect = ({
  handleChangeClassification,
  handleChangeType,
  classification,
  type,
}: Props) => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "46.50206rem" },
        alignItems: { xs: "center", md: "inherit" },
      }}
    >
      <FieldTitleDesc title="Property Type:" desc="Choose you property type." />
      <Box
        sx={{
          borderBottom: "1px solid var(--platinum)",
          mt: "3.12rem",
          // maxWidth: { xs: 350, md: "initial" },
        }}
      >
        <Tabs
          value={classification}
          // variant="scrollable"
          // allowScrollButtonsMobile
          sx={{
            ".MuiTabs-flexContainer": {
              gap: { xs: "1rem", md: "4rem" },
            },

            button: {
              fontSize: "1.25rem",
              color: "var(--text-black)",
              paddingX: { xs: "0", md: "1rem" },
            },
            ".Mui-selected": {
              color: "var(--text-black)  !important",
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "var(--myrtle-green)",
              height: "0.25rem",
            },
          }}
        >
          {propertyTypes.map((val, index) => (
            <Tab
              key={val.type}
              disableRipple
              label={val.type}
              value={val.value}
              onClick={() => handleChangeClassification(val.value)}
            />
          ))}
        </Tabs>
      </Box>

      {propertyTypes.map(
        ({ index, items, value }) =>
          classification === value && (
            <Stack
              key={index}
              direction={"row"}
              sx={{
                flexWrap: "wrap",
                gap: "1.62rem",
                padding: { xs: "2rem 0", md: "3.32rem 1.38rem 1rem 0" },
              }}
            >
              {items.map((val) => (
                <IconText
                  key={val.text}
                  onClick={() => handleChangeType(val.text)}
                  text={val.text}
                  icon={val.icon}
                  iconWidth={30}
                  iconHeight={30}
                  sxRow={{
                    cursor: "pointer",
                    gap: "0.63rem",
                    borderRadius: "0.9375rem",
                    padding: "0.75rem 1.69rem",
                    boxShadow:
                      type === val.text
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
          ),
      )}
    </Stack>
  );
};

export default memo(TypeSelect);
