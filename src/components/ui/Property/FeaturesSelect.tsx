import FilledButton from "@/components/common/Button/FilledButton";
import IconText from "@/components/common/IconText";
import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import {
  CloseGreyIcon,
  FlameGreyIcon,
  PlusIcon,
} from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface SelectedFeatureProps {
  icon: string;
  text: string;
}

const SelectedFeature = ({ icon, text }: SelectedFeatureProps) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        gap: "1.88rem",
        backgroundColor: "rgba(227, 227, 227, 0.48)",
        padding: "0.56rem 1.37rem",
        borderRadius: "0.625rem",
        alignItems: "center",
        ".closeIcon": {
          cursor: "pointer",
        },
      }}
    >
      <IconText
        icon={icon}
        iconWidth={30}
        iconHeight={30}
        text={text}
        sxText={{ fontSize: "1.25rem", color: "var(--spanish-gray)" }}
      />

      <Image
        className="closeIcon"
        src={CloseGreyIcon}
        alt="close icon"
        width={30}
        height={30}
      />
    </Stack>
  );
};

const FeaturesSelect = () => {
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
    <Stack>
      <FieldTitleDesc
        title="Features:"
        desc="what features does yor property have?"
      />

      <FilledButton
        text="Add Features"
        onClick={() => setOpenFeatures(true)}
        startIcon={
          <Image
            priority
            src={PlusIcon}
            alt={"PlusIcon"}
            width={30}
            height={30}
          />
        }
        sx={{
          mt: "3.12rem",
          padding: "0",
          fontSize: "1.25rem",
          fontWeight: "400",
          gap: "0.62rem",
          width: "13rem",
          height: "3rem",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        }}
      />

      <Stack direction={"row"} sx={{ mt: "1.42rem", gap: "1rem" }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <SelectedFeature key={index} icon={FlameGreyIcon} text="Gas" />
        ))}
      </Stack>
    </Stack>
  );
};

export default FeaturesSelect;
