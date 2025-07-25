import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import TextXs from "@/components/common/Text/TextXs";
import { Grid2, Stack } from "@mui/material";
import Image from "next/image";
import { memo, useMemo } from "react";

interface Props {
  handleChange: any;
  handleDeleteImage: any;
  handleCoverImage: any;
  images: {
    public_id: string;
    url: string;
    delete?: boolean;
    coverImage: boolean;
  }[];
  error: string;
}

const UploadImagesSelect = ({
  handleChange,
  handleDeleteImage,
  images,
  error,
  handleCoverImage,
}: Props) => {
  const coverImageIndex = useMemo(
    () => images.map((val) => val.coverImage).indexOf(true),
    [images],
  );

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
        {images.map((val, index) =>
          !val.delete ? (
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
                }}
              >
                <Image
                  onClick={() => handleCoverImage(index, coverImageIndex)}
                  className="propertyImg"
                  src={val.url}
                  alt="property image"
                  width={184}
                  height={165}
                />

                <CrossIcon
                  onClick={() => handleDeleteImage(index)}
                  sx={{
                    backgroundColor: "#D7D7D7",
                    borderRadius: "50%",
                    position: "absolute",
                    top: { xs: "-10px", md: "-20px" },
                    right: { xs: "-13px", md: "-23px" },
                    cursor: "pointer",
                    width: { xs: "40px", md: "50px" },
                    height: { xs: "40px", md: "50px" },
                    path: { fill: "#7A7A7A" },
                  }}
                />

                {val.coverImage && (
                  <TextXs
                    text="Cover"
                    sx={{
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.3rem",
                      backgroundColor: "rgba(255,255,255,255.8)",
                      position: "absolute",
                      textAlign: "center",
                      zIndex: "1",
                      color: "var(--text-black)",
                    }}
                  />
                )}
              </Stack>
            </Grid2>
          ) : (
            <></>
          ),
        )}

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
            <PlusIcon
              sx={{
                width: "80px",
                height: "80px",
                path: { stroke: "#847979", strokeWidth: "0.1rem" },
              }}
            />

            <input
              type="file"
              //@ts-ignore
              onClick={(e) => (e.target.value = null)}
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
