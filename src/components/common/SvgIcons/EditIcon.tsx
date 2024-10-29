import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const EditIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="pencil_svgrepo.com" clip-path="url(#clip0_712_8684)">
          <path
            id="Vector"
            d="M0 30L11.25 26.25L30 7.5L22.5 0L3.75 18.75L0 30ZM3.75 26.25L5.64 20.64L9.39 24.39L3.75 26.25ZM7.5 18.75L18.75 7.5L22.5 11.25L11.25 22.5L7.5 18.75Z"
            fill="#1768AC"
          />
        </g>
        <defs>
          <clipPath id="clip0_712_8684">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default EditIcon;
