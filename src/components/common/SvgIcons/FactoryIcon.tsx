interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const FactoryIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="factory-building_svgrepo.com" clip-path="url(#clip0_578_9523)">
          <g id="Group">
            <g id="Group_2">
              <g id="Group_3">
                <path
                  id="Vector"
                  d="M21.3237 15.7586V12.5408L11.9203 16.0275V12.5408L5.73154 14.8354V5.30811H2.08275V16.1896L0 16.9631V29.7909H30V12.5408L21.3237 15.7586ZM23.385 17.1227H27.6143V21.9934H23.385V17.1227ZM14.5727 17.1227H18.801V21.9934H14.5727V17.1227ZM5.34188 17.1227H9.57017V21.9934H5.34188V17.1227ZM29.1459 28.9368H0.855197V26.7672H29.1459V28.9368Z"
                  fill="#1768AC"
                />
              </g>
              <g id="Group_4">
                <path
                  id="Vector_2"
                  d="M3.98341 4.02805C4.11679 2.57451 4.81765 2.46151 5.79209 2.46151C5.95057 2.46151 6.11694 2.46671 6.30417 2.47142C7.57932 2.50546 9.11402 2.52373 9.88546 0.786124L9.98691 0.556L9.20759 0.209229L9.10354 0.440987C8.66156 1.43264 7.94869 1.6267 6.86385 1.6267C6.68912 1.6267 6.50977 1.62151 6.32667 1.61728C4.87054 1.57756 3.34372 1.6142 3.13293 3.94958L3.10889 4.20278L3.96043 4.27913L3.98341 4.02805Z"
                  fill="#1768AC"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_578_9523">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default FactoryIcon;
