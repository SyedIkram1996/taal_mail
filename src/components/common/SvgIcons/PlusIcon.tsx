import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const PlusIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="plus-large_svgrepo.com">
          <path
            id="Vector"
            d="M5 15.4399H25M15 5.43994V25.4399"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default PlusIcon;
