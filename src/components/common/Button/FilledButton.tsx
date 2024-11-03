import { ROTATING } from "@/constants/classNames";
import { Loading } from "@/constants/images.routes";
import { Button, SxProps } from "@mui/material";
import Image from "next/image";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  sx?: SxProps;
  disabled?: boolean;
  loading?: boolean;
  disableRipple?: boolean;
}

const FilledButton = ({
  text,
  onClick,
  type,
  secondary,
  startIcon,
  endIcon,
  sx,
  disabled,
  loading,
  disableRipple,
}: Props) => {
  const border = secondary
    ? "1px solid var(--gray-300, #D0D5DD)"
    : "1px solid var(--myrtle-green)";

  const color = secondary
    ? "var(--color-text-text, #344054)"
    : "var(--text-white)";

  const bg = secondary ? "var(--base-white, #FFF)" : "var(--myrtle-green)";

  return (
    <Button
      disableElevation
      disableRipple={disableRipple}
      disabled={disabled}
      type={type}
      variant={"contained"}
      startIcon={
        loading ? (
          <Image
            className={ROTATING}
            priority
            src={Loading}
            alt={"icon"}
            width={21}
            height={20}
          />
        ) : (
          startIcon
        )
      }
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        padding: "0.44rem 3rem",
        borderRadius: "0.5rem",
        fontSize: "1.25rem",
        fontWeight: "600",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        border: border,
        color: color,
        background: bg,
        height: "2.5625rem",
        ":hover": {
          color: color,
          background: bg,
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        },
        "&.Mui-disabled": !secondary
          ? {
              borderColor: "var(--philippine-silver)",
              backgroundColor: "var(--philippine-silver)",
              color: "white",
            }
          : {
              borderColor: "var(--philippine-silver)",
              backgroundColor: "var(--philippine-silver)",
              color: "white",
            },
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

export default FilledButton;
