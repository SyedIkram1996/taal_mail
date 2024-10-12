import { Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { MouseEventHandler } from "react";
import TextXs from "./Text/TextXs";

interface Props {
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  text: string;
  sxText?: SxProps;
  sxRow?: SxProps;
  bg?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  iconClassName?: string;
}

const IconText = ({
  icon,
  iconWidth,
  iconHeight,
  text,
  sxText,
  sxRow,
  bg,
  onClick,
  iconClassName,
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
      {icon && (
        <Image
          className={iconClassName}
          priority
          src={icon}
          alt={"icon"}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      <TextXs
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

export default IconText;
