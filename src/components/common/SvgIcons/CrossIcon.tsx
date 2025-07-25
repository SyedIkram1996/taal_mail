import { SvgIcon, SxProps } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  sx?: SxProps;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const CrossIcon = ({ sx, onClick }: Props) => {
  return (
    <SvgIcon sx={{ cursor: "pointer", ...sx }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M17.4871 17.5159C16.5108 18.4922 16.5108 20.0751 17.4871 21.0515L26.45 30.0143L17.4871 38.9773C16.5108 39.9535 16.5108 41.5365 17.4871 42.5128C18.4634 43.489 20.0464 43.489 21.0227 42.5128L29.9855 33.5498L38.9485 42.5128C39.9247 43.489 41.5077 43.489 42.484 42.5128C43.4602 41.5365 43.4602 39.9535 42.484 38.9773L33.521 30.0143L42.484 21.0515C43.4602 20.0752 43.4602 18.4923 42.484 17.516C41.5075 16.5396 39.9247 16.5396 38.9485 17.516L29.9855 26.4788L21.0227 17.5159C20.0464 16.5396 18.4634 16.5396 17.4871 17.5159Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};

export default CrossIcon;
