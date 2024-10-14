import TextXl from "@/components/common/Text/TextXl";
import { AddPropertyIcon } from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";

const AddPropertyBanner = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "var(--accent-color-1)",
        padding: "6.25rem 10rem",
      }}
    >
      <TextXl
        text={"Add Property Info"}
        sx={{ fontSize: "2.8125rem", color: "var(--text-white)" }}
      />
      <Image
        src={AddPropertyIcon}
        alt="add property"
        width={401}
        height={400}
      />
    </Stack>
  );
};

export default AddPropertyBanner;
