import TextXl from "@/components/common/Text/TextXl";
import { BannerImage } from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";
import SearchByLocation from "./SearchByLocation";

const Banner = () => {
  return (
    <>
      <Image
        src={BannerImage}
        alt="Banner"
        priority
        width={1440}
        height={647}
      />

      <Stack
        sx={{
          position: "absolute",
          top: "9.94rem",
          gap: "4.81rem",
          alignItems: "center",
        }}
      >
        <TextXl
          text="THE MOST TRUSTED REAL ESTATE MANAGEMENT COMPANY OF GENUINE CUSTOMERS"
          sx={{
            width: "48.625rem",
            textAlign: "center",
            color: "white",
            textShadow:
              "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 6px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: "black",
          }}
        />

        <SearchByLocation />
      </Stack>
    </>
  );
};

export default Banner;
