interface Props {
  sx?: SxProps;
}

import { SvgIcon, SxProps } from "@mui/material";

const ResidentialPlotIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="home-filled-building_svgrepo.com"
          clip-path="url(#clip0_578_9808)"
        >
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M25.6133 13.0131L15.9193 5.08129C15.3842 4.64348 14.6146 4.64348 14.0794 5.08129L4.38525 13.0131C4.04805 13.289 3.85254 13.7017 3.85254 14.1373V28.2698C3.85254 29.0722 4.50291 29.7225 5.30517 29.7225H11.2125V21.4722C11.2125 20.8838 11.6895 20.4068 12.2778 20.4068H17.7209C18.3092 20.4068 18.7861 20.8837 18.7861 21.4722V29.7226H24.6936C25.4959 29.7226 26.1462 29.0722 26.1462 28.27V14.1373C26.1461 13.7016 25.9505 13.289 25.6133 13.0131Z"
                fill="#1768AC"
              />
              <path
                id="Vector_2"
                d="M29.9956 12.0028C29.9924 11.5439 29.7817 11.1114 29.4226 10.8259L17.068 1.00654C16.4701 0.521097 15.739 0.278193 15.0077 0.277526C15.0052 0.277526 15.0029 0.277344 15.0005 0.277344C14.9935 0.277344 14.9866 0.277708 14.9796 0.277769C14.2526 0.281227 13.5265 0.523889 12.9319 1.00654L0.577375 10.826C0.218268 11.1114 0.00758506 11.544 0.00430831 12.0028C0.00430831 12.0089 0 12.6127 0 13.1388C0 13.9766 0.679196 14.6558 1.51701 14.6558C2.35483 14.6558 3.03402 13.9766 3.03402 13.1388C3.03402 13.0097 3.03427 12.8763 3.03469 12.7486L14.0722 3.97594C14.0722 3.97594 14.5145 3.64578 15 3.64578C15.4854 3.64578 15.9199 3.96963 15.9199 3.96963L26.9653 12.7486C26.9657 12.8762 26.966 13.0097 26.966 13.1388C26.966 13.9766 27.6452 14.6558 28.483 14.6558C29.3208 14.6558 30 13.9766 30 13.1388C30 12.6127 29.9957 12.0088 29.9956 12.0028Z"
                fill="#1768AC"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_578_9808">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ResidentialPlotIcon;
