interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const UpperPortionIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="34"
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icon">
          <path
            id="Polygon 1"
            d="M15 2L27.9904 14.8459H2.00962L15 2Z"
            fill="#1768AC"
            fill-opacity="0.71"
          />
          <g id="ic-real-estate-stairs">
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1395 2.41287L2.87695 14.0693C2.84949 14.0997 2.82756 14.1366 2.81251 14.1775C2.79746 14.2184 2.78961 14.2625 2.78945 14.3072L2.68945 28.8182C2.68945 29.6069 2.95285 30.3632 3.42169 30.9209C3.89053 31.4785 4.52641 31.7918 5.18945 31.7918L25.2895 32C25.9525 32 26.5884 31.6867 27.0572 31.129C27.5261 30.5714 27.7895 29.815 27.7895 29.0264V14.3072C27.7885 14.2612 27.7791 14.2161 27.7618 14.1749C27.7445 14.1338 27.7198 14.0977 27.6895 14.0693L15.4395 2.41287C15.3982 2.36899 15.3448 2.34473 15.2895 2.34473C15.2341 2.34473 15.1807 2.36899 15.1395 2.41287Z"
              stroke="#03256C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M27.7898 15.6453H16.5398"
              stroke="#03256C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M2.78931 15.6453H7.37681V21.1018H11.9518V26.5434H16.5393V31.9107"
              stroke="#03256C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default UpperPortionIcon;
