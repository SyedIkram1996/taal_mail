interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const OfficeIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="office-worker_svgrepo.com" clip-path="url(#clip0_578_9535)">
          <g id="Group">
            <path
              id="Vector"
              d="M19.3004 7.66992L15.8296 11.1403L12.3597 7.66992C11.3503 8.14529 10.4946 9.24978 10.4946 10.2875V19.7834C10.4946 20.4677 11.0497 21.0228 11.7335 21.0228C12.0707 21.0228 11.7335 21.0228 12.5988 21.0228L13.0704 29.1214C13.0704 29.8498 13.661 30.44 14.389 30.44C14.6963 30.44 15.2629 30.44 15.8296 30.44C16.3972 30.44 16.9638 30.44 17.2711 30.44C17.9991 30.44 18.5898 29.8498 18.5898 29.1214L19.0613 21.0228C19.9257 21.0228 19.5896 21.0228 19.9257 21.0228C20.6104 21.0228 21.1646 20.4677 21.1646 19.7834V10.2875C21.1655 9.24978 20.3098 8.14529 19.3004 7.66992Z"
              fill="#1768AC"
            />
            <path
              id="Vector_2"
              d="M15.8592 6.09043C17.4199 6.09043 18.6838 4.82516 18.6838 3.26592C18.6838 1.70428 17.4199 0.439941 15.8592 0.439941C14.2976 0.439941 13.0337 1.70428 13.0337 3.26592C13.0338 4.82516 14.2977 6.09043 15.8592 6.09043Z"
              fill="#1768AC"
            />
            <path
              id="Vector_3"
              d="M11.3186 21.6848H9.21246C9.00398 21.6848 8.83594 21.8529 8.83594 22.0613V28.1925C8.83594 28.4008 9.00398 28.5689 9.21246 28.5689H11.3186C11.526 28.5689 11.6951 28.4009 11.6951 28.1925V22.0613C11.695 21.8529 11.526 21.6848 11.3186 21.6848Z"
              fill="#1768AC"
            />
            <path
              id="Vector_4"
              d="M15.0698 7.28125V9.50078L15.8295 10.5173L16.5901 9.50078V7.28125H15.8295H15.0698Z"
              fill="#1768AC"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_578_9535">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="translate(0 0.439941)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default OfficeIcon;
