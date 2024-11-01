"use client";

import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import { Box, Dialog, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images: any;
  openImages: boolean;
  setOpenImages: (value: boolean) => void;
}

const PropertiesImagesModal = ({
  images,
  openImages,
  setOpenImages,
}: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Dialog
      open={openImages}
      maxWidth="lg"
      slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0,0,0,0.7)" } } }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          width: "100%",
          boxShadow: "none",
          borderRadius: "0",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "31.625rem",
          position: "relative",
          img: { objectFit: "contain" },
        }}
      >
        <Image src={selectedImage.url} alt="property" priority fill />
      </Box>

      <Stack
        direction={"row"}
        sx={{
          backgroundColor: "var(--text-white)",
          padding: "1.44rem 2.63rem",
          borderRadius: "1.875rem",
          mt: "2.75rem",
          gap: "3.12rem",
        }}
      >
        {images.map((image: any, index: number) => (
          <Box
            key={index}
            onClick={() => setSelectedImage(image)}
            sx={{
              width: "10rem",
              height: "10rem",
              position: "relative",
              img: { objectFit: "cover" },
              cursor: "pointer",
            }}
          >
            <Image src={image.url} alt="property" priority fill />

            {selectedImage === image && (
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: "1",
                  border: "10px solid var(--text-secondary)",
                }}
              />
            )}
          </Box>
        ))}
      </Stack>

      <Box onClick={() => setOpenImages(false)}>
        <CrossIcon
          sx={{
            position: "absolute",
            right: "3.5rem",
            top: "1.44rem",
            height: "3.75rem",
            width: "3.75rem",
            cursor: "pointer",
          }}
        />
      </Box>
    </Dialog>
  );
};

export default PropertiesImagesModal;
