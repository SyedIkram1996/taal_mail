import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const LineIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="372"
        height="362"
        viewBox="0 0 372 362"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="370.395"
          y1="1.4335"
          x2="1.39464"
          y2="360.434"
          stroke="black"
          stroke-width="4"
        />
      </svg>
    </SvgIcon>
  );
};

export default LineIcon;
