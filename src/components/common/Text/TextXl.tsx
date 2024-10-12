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
        letterSpacing: "-0.045rem",
        color: "var(--text-primary)",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default TextXl;
