import { SxProps, Typography } from "@mui/material";

interface Props {
  text: string;
  sx?: SxProps;
}

const HeadingXl = ({ text, sx }: Props) => {
  return (
    <Typography
      sx={{
        fontWeight: "400",
        fontSize: "3rem",
        letterSpacing: "-0.06rem",
        lineHeight: "3.75rem",
        color: "var(--text-primary)",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default HeadingXl;
