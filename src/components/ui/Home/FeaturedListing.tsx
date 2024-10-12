"use client";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextSm from "@/components/common/Text/TextSm";
import {
  CarousalChevronLeftIcon,
  CarousalChevronRightIcon,
} from "@/constants/images.routes";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedListing = () => {
  const [mySwiper, setMySwiper] = useState<any>({});

  return (
    <Stack
      sx={{
        pt: "11.09rem",
        width: "66.5625rem",
        pb: "4.31rem",
      }}
    >
      <TextSm
        text="Featured Listings"
        sx={{
          fontSize: "2rem",
          color: "var(--text-secondary)",
          textAlign: "start",
          pb: "1.91rem",
        }}
      />

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
          slidesPerView={3}
          style={{ width: "100%", padding: "1rem" }}
          onInit={(ev) => {
            setMySwiper(ev);
          }}
        >
          {Array.from({ length: 4 }).map((val, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "311px", marginRight: "50px" }}
            >
              <PropertyCard
                title="PKR 2.2 Crore"
                bedRooms="2"
                bathRooms="2"
                area="10 Marla"
                type="House"
                location="Islamabad"
              />
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
    </Stack>
  );
};

export default FeaturedListing;
