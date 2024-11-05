import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const TickCheckboxFilled = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="1" width="19" height="19" rx="5.5" fill="#12B76A" />
        <path
          d="M14.6654 7L8.2487 13.4167L5.33203 10.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect x="0.5" y="1" width="19" height="19" rx="5.5" stroke="#12B76A" />
      </svg>
    </SvgIcon>
  );
};

export default TickCheckboxFilled;
