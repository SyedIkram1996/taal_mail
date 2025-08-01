interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const ShopIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="shop_svgrepo.com" clip-path="url(#clip0_578_9481)">
          <g id="Page-1">
            <g id="Icon-Set-Filled">
              <path
                id="shop"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.5195 0H5.44985L0.000175781 9.375H29.9692L24.5195 0ZM27.1877 22.5H2.81548L2.81268 16.875H4.65392C5.66079 16.875 7.25737 15.9769 7.93331 14.6025C8.69174 15.9384 10.1074 16.875 11.4592 16.875C12.887 16.875 14.4592 16.0256 14.9842 14.7975C15.5102 15.9966 17.0496 16.875 18.4483 16.875C19.8358 16.875 21.273 15.855 22.0005 14.4619C22.8508 15.8681 24.0611 16.875 25.3127 16.875C25.5874 16.875 26.9477 16.92 27.1877 16.875V22.5ZM0.0236076 11.25H0.000175781C-0.0166992 11.6578 0.000175781 12.5916 0.000175781 13.125C0.000175781 14.1234 0.359245 15.2147 0.93862 15.9375L0.966744 26.25C0.966744 28.3209 2.69831 30 4.83393 30H25.1355C27.2711 30 29.0627 28.3209 29.0627 26.25V15.9375C29.7189 15.165 30.0002 14.3719 30.0002 13.125V11.25H0.0236076Z"
                fill="#1768AC"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_578_9481">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ShopIcon;
