import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const HouseIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="home-1_svgrepo.com">
          <g id="Group 3">
            <path
              id="Vector"
              d="M17.418 18.75H2.41797"
              stroke="#1768AC"
              stroke-linecap="round"
            />
            <path
              id="Vector_2"
              d="M2.41797 10.0658L5.46519 7.49975M17.418 10.0658L11.3235 4.93366C10.5018 4.24168 9.33417 4.24168 8.51239 4.93366L7.92595 5.42752"
              stroke="#1768AC"
              stroke-linecap="round"
            />
            <path
              id="Vector_3"
              d="M12.543 5.72368V4.14474C12.543 3.92673 12.7109 3.75 12.918 3.75H14.793C15 3.75 15.168 3.92673 15.168 4.14474V8.09211"
              stroke="#1768AC"
              stroke-linecap="round"
            />
            <path
              id="Vector_4"
              d="M3.91797 18.75V8.88159"
              stroke="#1768AC"
              stroke-linecap="round"
            />
            <path
              id="Vector_5"
              d="M15.918 8.88159V12.0395M15.918 18.75V15.1974"
              stroke="#1768AC"
              stroke-linecap="round"
            />
            <path
              id="Vector_6"
              d="M12.168 18.75V14.8026C12.168 13.6862 12.168 13.1279 11.8385 12.781C11.5089 12.4342 10.9786 12.4342 9.91797 12.4342C8.85732 12.4342 8.32698 12.4342 7.99747 12.781M7.66797 18.75V14.8026"
              stroke="#1768AC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_7"
              d="M11.418 8.88156C11.418 9.75361 10.7464 10.4605 9.91797 10.4605C9.08952 10.4605 8.41797 9.75361 8.41797 8.88156C8.41797 8.00953 9.08952 7.30261 9.91797 7.30261C10.7464 7.30261 11.418 8.00953 11.418 8.88156Z"
              stroke="#1768AC"
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default HouseIcon;
