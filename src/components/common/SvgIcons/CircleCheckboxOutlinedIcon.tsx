import { SvgIcon, SxProps } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  sx?: SxProps;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const CircleCheckboxOutlinedIcon = ({ sx, onClick }: Props) => {
  return (
    <SvgIcon sx={sx} onClick={onClick}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Iconsax/Linear/tickcircle">
          <path
            id="Vector"
            d="M13 23.8332C18.9584 23.8332 23.8334 18.9582 23.8334 12.9998C23.8334 7.0415 18.9584 2.1665 13 2.1665C7.04169 2.1665 2.16669 7.0415 2.16669 12.9998C2.16669 18.9582 7.04169 23.8332 13 23.8332Z"
            stroke="#2541B2"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M8.39581 12.9999L11.4616 16.0657L17.6041 9.93408"
            stroke="#2541B2"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default CircleCheckboxOutlinedIcon;
