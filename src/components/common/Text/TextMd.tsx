import { SxProps, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  noWrap?: boolean;
  sx?: SxProps;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const TextMd = ({ text, sx, noWrap, onClick }: Props) => {
  return (
    <Typography
      onClick={onClick}
      noWrap={noWrap}
      sx={{
        fontSize: "1.25rem",
        fontWeight: "600",
        fontStyle: "normal",
        color: "var(--text-primary)",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextMd;
