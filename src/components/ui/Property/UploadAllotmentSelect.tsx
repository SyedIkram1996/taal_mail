import FieldTitleDesc from "@/components/common/Input/FieldTitleDesc";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { UploadImageIcon } from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";
import { memo } from "react";

const UploadAllotmentSelect = () => {
  return (
    <Stack>
      <FieldTitleDesc title="Upload Allotment Letter:" desc="" />
      <TextLg
        text={"(Optional)"}
        sx={{
          fontWeight: "400",
          color: "var(--text-black)",
          textAlign: "center",
        }}
      />

      <Stack
        sx={{
          mt: "2.5rem",
          border: "1px solid var(--spanish-gray)",
          borderRadius: "0.9375rem",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "3.14rem",
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
      </Stack>
    </Stack>
  );
};

export default memo(UploadAllotmentSelect);
