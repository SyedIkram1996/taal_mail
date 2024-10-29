interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const SecurityIcon = ({ sx }: Props) => {
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
          d="M5 26.25V24.375C5 20.578 8.07804 17.5 11.875 17.5H18.125C21.922 17.5 25 20.578 25 24.375V26.25M10 26.25V23.125M20 26.25V22.9166M10.625 8.125C13.1425 10.2829 16.8575 10.2829 19.375 8.125M20 8.75V6.15944L21.8321 3.47756C22.1156 3.06272 21.8185 2.5 21.3161 2.5H8.6839C8.1815 2.5 7.88444 3.06272 8.16784 3.47756L10 6.15944V8.75M20 10C20 12.7614 17.7614 15 15 15C12.2386 15 10 12.7614 10 10V6.875H20V10Z"
          stroke="#1768AC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SecurityIcon;
