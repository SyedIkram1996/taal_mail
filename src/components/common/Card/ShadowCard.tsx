import { Stack, SxProps } from "@mui/material";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sx?: SxProps;
}

const ShadowCard = ({ children, sx }: Props) => {
  return (
    <Stack
      sx={{
        borderRadius: "1.25rem",
        border: "1px solid var(--platinum)",
        backgroundColor: "var(--text-white)",
        boxShadow: "2px 2px 6px 0px rgba(0, 0, 0, 0.25)",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default ShadowCard;
