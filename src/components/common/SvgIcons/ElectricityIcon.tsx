interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const ElectricityIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M10.3625 2.1377H23.125L17.325 11.4252H21.9625L9.2 25.3627L11.5125 16.0752H6.875L10.3625 2.1377Z"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </SvgIcon>
  );
};

export default ElectricityIcon;
