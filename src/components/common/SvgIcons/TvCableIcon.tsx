interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const TbCableIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M25 11.6667V35M30 18.3333H30.0167M30 23.3333H30.0167M30 28.3333H30.0167M28.3333 5L20 11.6667L11.6667 5M13 35H27C29.8003 35 31.2003 35 32.27 34.455C33.2108 33.9757 33.9757 33.2108 34.455 32.27C35 31.2003 35 29.8003 35 27V19.6667C35 16.8663 35 15.4663 34.455 14.3967C33.9757 13.4559 33.2108 12.691 32.27 12.2116C31.2003 11.6667 29.8003 11.6667 27 11.6667H13C10.1997 11.6667 8.7996 11.6667 7.73005 12.2116C6.78923 12.691 6.02433 13.4559 5.54497 14.3967C5 15.4663 5 16.8663 5 19.6667V27C5 29.8003 5 31.2003 5.54497 32.27C6.02433 33.2108 6.78923 33.9757 7.73005 34.455C8.7996 35 10.1997 35 13 35Z"
          stroke="#1768AC"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default TbCableIcon;
