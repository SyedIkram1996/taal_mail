import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const UploadImageIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="100"
        height="101"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="image_svgrepo.com" clip-path="url(#clip0_53_2022)">
          <path
            id="Vector"
            d="M100 0.923828H0V100.924H100V0.923828Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M87.5 67.5905V84.2572C87.5 86.5584 85.6346 88.4238 83.3333 88.4238H16.6667C14.3655 88.4238 12.5 86.5584 12.5 84.2572V75.9238M87.5 67.5905V17.5905C87.5 15.2893 85.6346 13.4238 83.3333 13.4238H16.6667C14.3655 13.4238 12.5 15.2893 12.5 17.5905V75.9238M87.5 67.5905L64.5121 52.2651C63.2679 51.4355 61.6746 51.3363 60.3371 52.0051L12.5 75.9238"
            stroke="#1768AC"
            stroke-width="6"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M33.3333 46.7572C37.9357 46.7572 41.6667 43.0263 41.6667 38.4239C41.6667 33.8215 37.9357 30.0906 33.3333 30.0906C28.731 30.0906 25 33.8215 25 38.4239C25 43.0263 28.731 46.7572 33.3333 46.7572Z"
            stroke="#1768AC"
            stroke-width="6"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_2022">
            <rect
              width="100"
              height="100"
              fill="white"
              transform="translate(0 0.923828)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default UploadImageIcon;
