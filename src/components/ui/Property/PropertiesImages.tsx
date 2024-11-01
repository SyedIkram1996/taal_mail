"use client";

import TextXl from "@/components/common/Text/TextXl";
import { Box, Grid2, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PropertiesImagesModal from "./PropertiesImagesModal";

interface Props {
  images: any;
}

const PropertiesImages = ({ images }: Props) => {
  const [openImages, setOpenImages] = useState(false);
  return (
    <>
      <Grid2
        container
        onClick={() => setOpenImages(true)}
        sx={{ cursor: "pointer" }}
      >
        <Grid2 size={images.length > 1 ? 8 : 12}>
          <Box
            sx={{
              width: "100%",
              height: "31.625rem",
              position: "relative",
              img: { objectFit: "cover" },
            }}
          >
            <Image src={images[0].url} alt="property" priority fill />
          </Box>
        </Grid2>

        {images.length > 1 && (
          <Grid2 size={4}>
            <Stack>
              {images.length > 2 ? (
                images.slice(1, 3).map((image: any, index: number) => (
                  <Stack
                    key={index}
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "15.8125rem",
                        position: "relative",
                        img: { objectFit: "cover" },
                      }}
                    >
                      <Image src={image.url} alt="property" priority fill />
                    </Box>
                    {index === 1 && (
                      <TextXl
                        text="+3"
                        sx={{
                          position: "absolute",
                          fontSize: "3.75rem",
                          color: "var(--text-white)",
                          backgroundColor: "rgba(0, 0, 0, 0.60)",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    )}
                  </Stack>
                ))
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "31.625rem",
                    position: "relative",
                    img: { objectFit: "cover" },
                  }}
                >
                  <Image src={images[1].url} alt="property" priority fill />
                </Box>
              )}
            </Stack>
          </Grid2>
        )}
      </Grid2>

      <PropertiesImagesModal
        images={images}
        openImages={openImages}
        setOpenImages={setOpenImages}
      />
    </>
  );
};

export default PropertiesImages;
