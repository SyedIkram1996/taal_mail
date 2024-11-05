import { Box } from "@mui/material";
import CrossIcon from "../SvgIcons/CrossIcon";
import TextXl from "../Text/TextXl";

interface Props {
  setOpen: (open: boolean) => void;
  title: string;
  onClose?: () => void;
}

const DialogHeader = ({ setOpen, title, onClose }: Props) => {
  return (
    <Box>
      <CrossIcon
        onClick={() => {
          setOpen(false);
          if (onClose) {
            onClose();
          }
        }}
        sx={{
          path: { fill: "var(--myrtle-green)" },
          width: "60px",
          height: "60px",
          position: "absolute",
          top: { xs: "0.5rem", md: "1.87rem" },
          right: { xs: "0.5rem", md: "1rem" },
          cursor: "pointer",
        }}
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
