import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const TickIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="tick_svgrepo.com">
          <path
            id="Vector"
            d="M8.80078 20.8L16.268 28L31.2008 13.6"
            stroke="white"
            stroke-width="3.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default TickIcon;
