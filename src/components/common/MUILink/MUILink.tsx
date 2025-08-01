import { Link, LinkProps, SxProps } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";

interface Props extends LinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps;
}

const MUILink = ({ href, children, sx, onClick, target, className }: Props) => {
  return (
    <Link
      className={className}
      href={href}
      component={href ? NextLink : "div"}
      onClick={onClick}
      target={target}
      sx={{ textDecoration: "none", ...sx }}
    >
      {children}
    </Link>
  );
};

export default MUILink;
