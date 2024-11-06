"use client";

import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import { Box, Dialog, Grid2, Stack } from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

interface Props {
  images: any;
  openImages: boolean;
  setOpenImages: (value: boolean) => void;
  selectedImage: { public_id: string; url: string };
  setSelectedImage: (value: { public_id: string; url: string }) => void;
}

const PropertiesImagesModal = ({
  images,
  openImages,
  setOpenImages,
  selectedImage,
  setSelectedImage,
}: Props) => {
  const sortedImages = useMemo(
    () => images.sort((a: any, b: any) => b.coverImage - a.coverImage),
    [],
  );

  return (
    <Dialog
      scroll="body"
      open={openImages}
      onClose={() => setOpenImages(false)}
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
          height: { xs: "20rem", md: "31.625rem" },
          position: "relative",
          img: { objectFit: "contain" },
        }}
      >
        <Image src={selectedImage.url} alt="property" priority fill />
      </Box>

      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <Grid2
          maxWidth={"md"}
          container
          spacing={3}
          sx={{
            backgroundColor: "var(--text-white)",
            padding: { xs: "1.44rem 1rem", sm: "1.44rem 2.63rem" },
            borderRadius: "1.875rem",
            mt: "2.75rem",
            width: "100%",
          }}
        >
          {sortedImages.map((image: any, index: number) => (
            <Grid2
              size={{ xs: 4, sm: 3, md: 2 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                key={index}
                onClick={() => setSelectedImage(image)}
                sx={{
                  width: { xs: "5rem", sm: "8rem" },
                  height: { xs: "5rem", sm: "8rem" },
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
            </Grid2>
          ))}
        </Grid2>
      </Stack>

      {/* <Stack
          direction={"row"}
          sx={{
            gap: { xs: "1rem", md: "3.12rem" },
            flexWrap: "wrap",
          }}
        >
          {sortedImages.map((image: any, index: number) => (
            <Box
              key={index}
              onClick={() => setSelectedImage(image)}
              sx={{
                width: { xs: "5rem", md: "10rem" },
                height: { xs: "5rem", md: "10rem" },
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
        </Stack> */}
      {/* </Stack> */}

      <Box onClick={() => setOpenImages(false)}>
        <CrossIcon
          sx={{
            position: "absolute",
            right: { xs: "0.5rem", md: "3.5rem" },
            top: "0",
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
