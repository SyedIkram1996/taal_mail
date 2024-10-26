import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const BasementIcon = ({ sx }: Props) => {
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
          d="M18.4167 31.1333H2.5V37.5H18.4167V31.1333Z"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M24.7834 24.7666H8.8667V31.1333H24.7834V24.7666Z"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M31.1499 18.4167H15.2333V24.7834H31.1499V18.4167Z"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M37.1 18V37.1H18V30.7333H24.3667V24.3667H30.7333V18H37.1Z"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M10.45 18.4H2.5V10.45"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M2.5 18.4167L18.4167 2.5"
          stroke="#1768AC"
          stroke-width="3"
          stroke-miterlimit="10"
        />
      </svg>
    </SvgIcon>
  );
};

export default BasementIcon;
