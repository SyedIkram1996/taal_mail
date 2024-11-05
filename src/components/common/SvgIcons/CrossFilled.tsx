import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const CrossFilled = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="6" fill="#E64343" />
        <path
          d="M5.80164 5L14.6832 15.8552"
          stroke="white"
          stroke-linecap="round"
        />
        <path
          d="M5 15.829L13.9404 5.02211"
          stroke="white"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default CrossFilled;
