import { ChevronDownGreyIcon } from "@/constants/images.routes";
import { ClickAwayListener, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import { ReactNode, useState } from "react";
import TextLg from "../Text/TextLg";

interface Props {
  text: string;
  children: ReactNode;
  sx?: SxProps;
}
const SelectField = ({ text, children, sx }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Stack
        direction={"row"}
        onClick={() => setOpen(!open)}
        sx={{
          padding: "0.5rem 1.19rem",
          backgroundColor: "white",
          borderRadius: "0.9375rem",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
          height: "3.125rem",
          justifyContent: "space-between",
          ".chevron": {
            transform: open ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "ease-in-out 0.3s",
          },
          ...sx,
        }}
      >
        <TextLg
          text={text}
          sx={{ color: "var(--text-black)", fontWeight: "400", flex: 1 }}
        />
        <Image
          className="chevron"
          src={ChevronDownGreyIcon}
          alt="Chevron down"
          width={40}
          height={40}
        />

        {open && <Stack onClick={() => setOpen(false)}>{children}</Stack>}
      </Stack>
    </ClickAwayListener>
  );
};

export default SelectField;
