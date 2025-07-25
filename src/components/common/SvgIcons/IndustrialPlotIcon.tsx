interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const IndustrialPlotIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="factory_svgrepo.com" clip-path="url(#clip0_578_9791)">
          <path
            id="Vector"
            d="M5 22.9399V25.4399H10V22.9399H5ZM5 17.9399V20.4399H17.5V17.9399H5ZM12.5 22.9399V25.4399H17.5V22.9399H12.5ZM20 17.9399V20.4399H25V17.9399H20ZM20 22.9399V25.4399H25V22.9399H20ZM2.5 27.9399V10.4399L8.75 15.4399V10.4399L15 15.4399V10.4399L21.25 15.4399L22.5 2.93994H26.25L27.5 15.4399V27.9399H2.5Z"
            fill="#1768AC"
          />
        </g>
        <defs>
          <clipPath id="clip0_578_9791">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="translate(0 0.439941)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default IndustrialPlotIcon;
