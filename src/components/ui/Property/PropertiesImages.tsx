import TextXl from "@/components/common/Text/TextXl";
import { propertyImages } from "@/constants/property";
import { Box, Grid2, Stack } from "@mui/material";
import Image from "next/image";

const PropertiesImages = () => {
  return (
    <Grid2 container sx={{ cursor: "pointer" }}>
      <Grid2 size={8}>
        <Box
          sx={{
            width: "100%",
            height: "31.625rem",
            position: "relative",
            img: { objectFit: "cover" },
          }}
        >
          <Image src={propertyImages[0]} alt="property" priority fill />
        </Box>
      </Grid2>

      <Grid2 size={4}>
        <Stack>
          {propertyImages.slice(1, 3).map((image, index) => (
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
                <Image src={image} alt="property" priority fill />
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
          ))}
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default PropertiesImages;
