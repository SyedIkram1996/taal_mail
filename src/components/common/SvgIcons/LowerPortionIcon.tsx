interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const LowerPortionIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="real-estate-stairs_svgrepo.com">
          <rect
            id="Rectangle 29"
            x="2.3999"
            y="13.2"
            width="25.2"
            height="14.4"
            fill="#1768AC"
            fill-opacity="0.65"
          />
          <g id="ic-real-estate-stairs">
            <path
              id="Vector"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8499 2.62492L2.5874 12.4249C2.55994 12.4505 2.53801 12.4815 2.52296 12.5159C2.50791 12.5503 2.50006 12.5874 2.4999 12.6249L2.3999 24.8249C2.3999 25.488 2.66329 26.1238 3.13214 26.5927C3.60098 27.0615 4.23686 27.3249 4.8999 27.3249L24.9999 27.4999C25.6629 27.4999 26.2988 27.2365 26.7677 26.7677C27.2365 26.2988 27.4999 25.663 27.4999 24.9999V12.6249C27.499 12.5863 27.4896 12.5483 27.4723 12.5137C27.455 12.4792 27.4303 12.4488 27.3999 12.4249L15.1499 2.62492C15.1087 2.58803 15.0552 2.56763 14.9999 2.56763C14.9446 2.56763 14.8912 2.58803 14.8499 2.62492Z"
              stroke="#03256C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M27.5 13.75H16.25"
              stroke="#03256C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M2.5 13.75H7.0875V18.3375H11.6625V22.9125H16.25V27.425"
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

export default LowerPortionIcon;
