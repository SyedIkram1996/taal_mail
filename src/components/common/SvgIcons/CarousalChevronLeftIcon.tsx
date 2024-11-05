import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const CarousalChevronLeftIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#297373" fill-opacity="0.63" />
        <path
          d="M26.8737 17.7083L19.582 24.9999L26.8737 32.2916"
          stroke="white"
          stroke-width="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default CarousalChevronLeftIcon;
