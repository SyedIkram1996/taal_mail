import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const InvestPropertyIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_435_11537)">
          <path
            d="M158.647 137.852L116.181 93.7414L14.0437 197.543L0 183.735L116.329 65.5062L159.208 110.04L232.972 39.4081L211.838 18.2834H267.018V73.444L246.898 53.3337L158.647 137.852ZM48.8674 281.726H115.344V188.167H48.8674V281.726ZM141.196 281.726H207.672V158.622H141.196V281.726ZM233.524 97.0701V281.726H300V97.0701H233.524Z"
            fill="#297373"
          />
        </g>
        <defs>
          <clipPath id="clip0_435_11537">
            <rect width="300" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default InvestPropertyIcon;
