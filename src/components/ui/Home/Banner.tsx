import TextXl from "@/components/common/Text/TextXl";
import { BannerImage } from "@/constants/images.routes";
import { Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  text: string;
  children?: ReactNode;
  sx?: SxProps;
}

const Banner = ({ text, children, sx }: Props) => {
  return (
    <>
      <Image
        className="bannerImage"
        src={BannerImage}
        alt="Banner"
        priority
        width={1440}
        height={647}
      />

      <Stack
        sx={{
          position: "absolute",
          top: { xs: "4rem", md: "9.94rem" },
          gap: { xs: "2rem", md: "4.81rem" },
          alignItems: "center",
          ...sx,
        }}
      >
        <TextXl
          text={text}
          sx={{
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            width: { xs: "100%", md: "48.625rem" },
            textAlign: "center",
            color: "white",
            textShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 6px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
          }}
        />

        {children}
      </Stack>
    </>
  );
};

export default Banner;
