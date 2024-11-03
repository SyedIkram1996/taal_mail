"use client";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import {
  CarousalChevronLeftIcon,
  CarousalChevronRightIcon,
} from "@/constants/images.routes";
import { IProperty } from "@/interfaces/IProperty";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  featuredListing: IProperty[];
}
const FeaturedListingSwiper = ({ featuredListing }: Props) => {
  const [mySwiper, setMySwiper] = useState<any>({});

  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        onClick={() => {
          mySwiper.slidePrev();
        }}
        sx={{
          position: "absolute",
          left: "0",
          zIndex: 2,
          cursor: "pointer",
        }}
      >
        <Image
          src={CarousalChevronLeftIcon}
          alt="Chevron right"
          width={50}
          height={50}
        />
      </Box>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        style={{ width: "100%", padding: "1rem" }}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
      >
        {featuredListing.map((val, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "311px", marginRight: "50px" }}
          >
            <PropertyCard property={val} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        onClick={() => {
          mySwiper.slideNext();
        }}
        sx={{
          position: "absolute",
          right: "0",
          zIndex: 1,
          cursor: "pointer",
        }}
      >
        <Image
          src={CarousalChevronRightIcon}
          alt="Chevron right"
          width={50}
          height={50}
        />
      </Box>
    </Stack>
  );
};

export default FeaturedListingSwiper;
