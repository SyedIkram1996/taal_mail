import AreaIcon from "@/components/common/SvgIcons/AreaIcon";
import BathroomIcon from "@/components/common/SvgIcons/BathroomIcon";
import BedroomIcon from "@/components/common/SvgIcons/BedroomIcon";
import HouseIcon from "@/components/common/SvgIcons/HouseIcon";
import SvgIconText from "@/components/common/SvgIconText";
import TextLg from "@/components/common/Text/TextLg";
import { Stack } from "@mui/material";

interface Props {
  name: string;
  bedrooms: string;
  bathrooms: string;
  area: {
    totalArea: string;
    type: string;
  };
  type: string;
}

const PropertyHeaderAndIcons = ({
  name,
  bedrooms,
  bathrooms,
  area,
  type,
}: Props) => {
  const descIcon = [
    {
      icon: BedroomIcon,
      text: bedrooms,
    },
    {
      icon: BathroomIcon,
      text: bathrooms,
    },
    {
      icon: AreaIcon,
      text: `${area.totalArea} ${area.type}`,
    },
    {
      icon: HouseIcon,
      text: type,
    },
  ];

  return (
    <Stack sx={{ gap: "2rem" }}>
      <TextLg
        text={name}
        sx={{
          pt: "1.5rem",
          fontSize: { xs: "1.5rem", md: "1.875rem" },
          color: "var(--text-black)",
        }}
      />
      <Stack
        direction={"row"}
        sx={{ gap: "2rem", flexWrap: { xs: "wrap", md: "initial" } }}
      >
        {descIcon.map(({ icon: Icon, text }, index) => (
          <SvgIconText
            key={text}
            icon={
              <Icon
                sx={{
                  width: { xs: "20px", sm: "30px" },
                  height: { xs: "20px", sm: "30px" },
                }}
              />
            }
            text={text}
            sxText={{ fontSize: "1.5625rem", fontWeight: "300" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default PropertyHeaderAndIcons;
