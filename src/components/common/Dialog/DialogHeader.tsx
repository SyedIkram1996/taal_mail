import { CloseIcon } from "@/constants/images.routes";
import { Box } from "@mui/material";
import Image from "next/image";
import TextXl from "../Text/TextXl";

interface Props {
  setOpen: (open: boolean) => void;
  title: string;
  onClose?: () => void;
}

const DialogHeader = ({ setOpen, title, onClose }: Props) => {
  return (
    <Box
      sx={{
        ".closeImg": {
          position: "absolute",
          top: { xs: "0.5rem", md: "1.87rem" },
          right: { xs: "0.5rem", md: "1rem" },
          cursor: "pointer",
        },
      }}
    >
      <Image
        onClick={() => {
          setOpen(false);
          if (onClose) {
            onClose();
          }
        }}
        className="closeImg"
        src={CloseIcon}
        alt="close"
        width={60}
        height={60}
      />
      <TextXl
        text={title}
        sx={{
          alignSelf: "center",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "700",
          color: "var(--text-black)",
          textAlign: "center",
        }}
      />
    </Box>
  );
};

export default DialogHeader;
