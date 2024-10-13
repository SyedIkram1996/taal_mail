import { Stack, SxProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  sx?: SxProps;
}

const MenuCard = ({ children, onClick, sx }: Props) => {
  return (
    <Stack
      onClick={onClick}
      sx={{
        borderRadius: "0.9375rem",
        border: "1px solid var(--platinum)",
        background: "#fff",
        position: "absolute",
        zIndex: "1",
        top: "30px",
        right: 0,
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default MenuCard;
