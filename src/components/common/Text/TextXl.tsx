import { SxProps, Typography } from "@mui/material";

interface Props {
  text: string;
  sx?: SxProps;
}

const TextXl = ({ text, sx }: Props) => {
  return (
    <Typography
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
