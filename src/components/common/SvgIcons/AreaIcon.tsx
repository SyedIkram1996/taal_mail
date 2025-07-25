import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const AreaIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.25"
          y="1.25"
          width="16.5"
          height="16.5"
          rx="2.75"
          stroke="#1768AC"
          stroke-width="1.5"
        />
        <path
          d="M8.07167 8.07143L4.50024 4.5M4.50024 4.5V7.71429M4.50024 4.5H7.71453"
          stroke="#1768AC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.9283 10.9286L14.4998 14.5M14.4998 14.5V11.2857M14.4998 14.5H11.2855"
          stroke="#1768AC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default AreaIcon;
