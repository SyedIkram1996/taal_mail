import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const ElevatorLiftIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clip-path="url(#clip0_221_6930)">
          <path
            d="M3.33325 36.6668H28.3333V3.3335H3.33325V36.6668ZM26.6666 35.0002H16.6666V5.00016H26.6666V35.0002ZM4.99992 5.00016H14.9999V35.0002H4.99992V5.00016ZM31.0416 21.6668H37.2916L34.1666 26.6668L31.0416 21.6668ZM37.2916 18.3335H31.0416L34.1666 13.3335L37.2916 18.3335Z"
            fill="#1768AC"
          />
        </g>
        <defs>
          <clipPath id="clip0_221_6930">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ElevatorLiftIcon;
