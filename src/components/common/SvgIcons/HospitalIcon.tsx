import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const HospitalIcon = ({ sx }: Props) => {
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
          d="M3.33337 36.6665H36.6667"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28.3333 3.3335H11.6667C6.66667 3.3335 5 6.31683 5 10.0002V36.6668H35V10.0002C35 6.31683 33.3333 3.3335 28.3333 3.3335Z"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.4333 25H16.5499C15.6999 25 14.9833 25.7 14.9833 26.5667V36.6667H24.9833V26.5667C25 25.7 24.3 25 23.4333 25Z"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 10V18.3333"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.8334 14.1665H24.1667"
          stroke="#1768AC"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default HospitalIcon;
