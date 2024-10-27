import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import { CloseRoundedIcon, PlusGreyIcon } from "@/constants/images.routes";
import { Grid2, Stack } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

interface Props {
  handleChange: any;
  handleDeleteImage: any;
  images: {
    public_id: string;
    url: string;
  }[];
  error: string;
}

const UploadImagesSelect = ({
  handleChange,
  handleDeleteImage,
  images,
  error,
}: Props) => {
  return (
    <Stack id="images">
      <FieldTitleDesc
        title="Upload Images:"
        desc="what features does yor property have?"
        error={error}
      />

      <Grid2
        container
        spacing={4}
        sx={{
          mt: "2.3rem",
          border: "1px solid var(--spanish-gray)",
          borderRadius: "0.9375rem",
          paddingX: { xs: "1rem", md: "2.87rem" },
          paddingY: { xs: "2rem", md: "3.44rem" },
        }}
      >
        {images.map((val, index) => (
          <Grid2
            key={index}
            size={{ xs: 12, md: 4, lg: 3 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EAE8E8",
                width: "fit-content",
                position: "relative",
                ".propertyImg": {
                  objectFit: "cover",
                  width: { xs: "300px", md: "184px" },
                  height: { xs: "100%", md: "165px" },
                },
                ".closeIcon": {
                  position: "absolute",
                  top: { xs: "-10px", md: "-20px" },
                  right: { xs: "-15px", md: "-25px" },
                  cursor: "pointer",
                  width: { xs: "40px", md: "60px" },
                  height: { xs: "40px", md: "60px" },
                },
              }}
            >
              <Image
                className="propertyImg"
                src={val.url}
                alt="property image"
                width={184}
                height={165}
              />
              <Image
                onClick={() => handleDeleteImage(index)}
                className="closeIcon"
                src={CloseRoundedIcon}
                alt="close icon"
                width={60}
                height={60}
              />
            </Stack>
          </Grid2>
        ))}

        <Grid2
          size={{ xs: 6, md: 4, lg: 3 }}
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Stack
            component={"label"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EAE8E8",
              padding: "2.69rem 3.25rem",
              width: "11.5rem",
              cursor: "pointer",
              position: "relative",
              input: {
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: 1,
                overflow: "hidden",
                position: "absolute",
                bottom: 0,
                left: 0,
                whiteSpace: "nowrap",
                width: 1,
              },
            }}
          >
            <Image
              src={PlusGreyIcon}
              alt="property image"
              width={80}
              height={80}
            />

            <input
              type="file"
              onChange={handleChange}
              multiple
              accept="image/*"
            />
          </Stack>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default memo(UploadImagesSelect);
