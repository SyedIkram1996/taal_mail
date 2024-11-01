import { SxProps, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  sx?: SxProps;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const TextXl = ({ text, sx, onClick }: Props) => {
  return (
    <Typography
      onClick={onClick}
      sx={{
        fontSize: "2.5rem",
        fontWeight: "600",
        fontStyle: "normal",
        color: "var(--text-primary)",
        lineHeight: "normal",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextXl;
