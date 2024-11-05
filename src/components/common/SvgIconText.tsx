import { Stack, SxProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import TextXs from "./Text/TextXs";

interface Props {
  icon?: ReactNode;
  text: string;
  sxText?: SxProps;
  sxRow?: SxProps;
  bg?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  noWrap?: boolean;
}

const SvgIconText = ({
  icon,
  text,
  sxText,
  sxRow,
  bg,
  onClick,
  noWrap,
}: Props) => {
  return (
    <Stack
      onClick={onClick}
      direction={"row"}
      sx={
        bg
          ? {
              alignItems: "center",
              padding: "0.25rem 0.75rem",
              gap: "0.5rem",
              bgcolor: "var(--gray-100)",
              borderRadius: "0.25rem",
              ...sxRow,
            }
          : {
              alignItems: "center",
              gap: "0.25rem",
              ...sxRow,
            }
      }
    >
      {icon && icon}
      <TextXs
        noWrap={noWrap}
        text={text}
        sx={{
          fontWeight: "500",
          lineHeight: "1.5rem",
          color: "var(--text-black)",
          ...sxText,
        }}
      />
    </Stack>
  );
};

export default SvgIconText;
