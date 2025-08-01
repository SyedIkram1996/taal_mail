import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const CarousalChevronRightIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#297373" fill-opacity="0.68" />
        <path
          d="M23.0833 32.2916L30.375 25L23.0833 17.7083"
          stroke="white"
          stroke-width="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default CarousalChevronRightIcon;
