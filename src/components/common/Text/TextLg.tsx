import { SxProps, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  sx?: SxProps;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  noWrap?: boolean;
}

const TextLg = ({ text, sx, onClick, noWrap }: Props) => {
  return (
    <Typography
      noWrap={noWrap}
      onClick={onClick}
      sx={{
        fontSize: "1.5rem",
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: "-0.045rem",
        color: "var(--text-primary)",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextLg;
