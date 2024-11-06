"use client";

import TextXl from "@/components/common/Text/TextXl";
import { Box, Grid2, Stack } from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
import PropertiesImagesModal from "./PropertiesImagesModal";

interface Props {
  images: any;
}

const PropertiesImages = ({ images }: Props) => {
  const [openImages, setOpenImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const coverImage = useMemo(
    () => images.find((val: any) => val.coverImage),
    [],
  );

  const filteredImages = useMemo(
    () => images.filter((val: any) => !val.coverImage),
    [],
  );

  return (
    <>
      <Grid2
        container
        onClick={() => setOpenImages(true)}
        sx={{ cursor: "pointer" }}
      >
        <Grid2
          size={images.length > 1 ? 8 : 12}
          onClick={() => setSelectedImage(coverImage ? coverImage : images[0])}
        >
          <Box
            sx={{
              width: "100%",
              height: "31.625rem",
              position: "relative",
              img: { objectFit: "cover" },
            }}
          >
            <Image
              src={coverImage ? coverImage.url : images[0].url}
              alt="property"
              priority
              fill
            />
          </Box>
        </Grid2>

        {filteredImages.length > 0 && (
          <Grid2 size={4}>
            <Stack>
              {filteredImages.length >= 2 ? (
                filteredImages.slice(0, 2).map((image: any, index: number) => (
                  <Stack
                    onClick={() => setSelectedImage(image)}
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
                    {index === 1 && filteredImages.length > 2 && (
                      <TextXl
                        text={`+${images.length - images.slice(1, 4).length}`}
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
                  <Image
                    src={filteredImages[0].url}
                    alt="property"
                    priority
                    fill
                  />
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
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
};

export default PropertiesImages;
