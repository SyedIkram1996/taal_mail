interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const ApartmentIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="apartment_svgrepo.com">
          <path
            id="Vector"
            d="M27.5 1.25H12.5C12.1685 1.25 11.8505 1.3817 11.6161 1.61612C11.3817 1.85054 11.25 2.16848 11.25 2.5V8.75H2.5C2.16848 8.75 1.85054 8.8817 1.61612 9.11612C1.3817 9.35054 1.25 9.66848 1.25 10V27.5C1.25 27.8315 1.3817 28.1495 1.61612 28.3839C1.85054 28.6183 2.16848 28.75 2.5 28.75H27.5C27.8315 28.75 28.1495 28.6183 28.3839 28.3839C28.6183 28.1495 28.75 27.8315 28.75 27.5V2.5C28.75 2.16848 28.6183 1.85054 28.3839 1.61612C28.1495 1.3817 27.8315 1.25 27.5 1.25ZM3.75 11.25H11.25V26.25H3.75V11.25ZM26.25 26.25H13.75V3.75H26.25V26.25ZM23.75 8.75H16.25V6.25H23.75V8.75ZM23.75 13.75H16.25V11.25H23.75V13.75ZM23.75 18.75H16.25V16.25H23.75V18.75ZM23.75 23.75H16.25V21.25H23.75V23.75ZM6.25 12.5H8.75V15H6.25V12.5ZM6.25 17.5H8.75V20H6.25V17.5ZM6.25 22.5H8.75V25H6.25V22.5Z"
            fill="#1768AC"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default ApartmentIcon;
