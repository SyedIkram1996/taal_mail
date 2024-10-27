import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { UploadImageIcon } from "@/constants/images.routes";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

interface Props {
  handleChange: any;
  allotmentLetter: {
    public_id: string;
    url: string;
  };
}

const UploadAllotmentSelect = ({ handleChange, allotmentLetter }: Props) => {
  return (
    <Stack>
      <FieldTitleDesc title="Upload Allotment Letter:" desc="" />
      <TextLg
        text={"(Optional)"}
        sx={{
          fontWeight: "400",
          color: "var(--text-black)",
          textAlign: { xs: "center", md: "start" },
        }}
      />

      {allotmentLetter.url ? (
        <Box
          sx={{
            mt: "2rem",
            img: {
              alignSelf: "center",
              width: { xs: "100%", md: "990px" },
              height: { xs: "100%", md: "1276px" },
            },
          }}
        >
          <Image
            priority
            src={allotmentLetter.url}
            alt={"allotment letter"}
            width={990}
            height={1276}
          />
        </Box>
      ) : (
        <Stack
          component={"label"}
          sx={{
            mt: "2.5rem",
            border: "1px solid var(--spanish-gray)",
            borderRadius: "0.9375rem",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "3.14rem",
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
          <Stack sx={{ alignItems: "center" }}>
            <Image
              src={UploadImageIcon}
              alt="upload image"
              width={100}
              height={100}
            />
            <TextMd
              text="Click here to upload images"
              sx={{ fontWeight: "400" }}
            />
          </Stack>

          <input
            type="file"
            onChange={handleChange}
            multiple
            accept="image/*"
          />
        </Stack>
      )}
    </Stack>
  );
};

export default memo(UploadAllotmentSelect);
