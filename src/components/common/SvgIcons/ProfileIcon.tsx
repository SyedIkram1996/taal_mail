import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const ProfileIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="profile-1335_svgrepo.com" clip-path="url(#clip0_164_1587)">
          <g id="Page-1">
            <g id="Dribbble-Light-Preview">
              <g id="icons">
                <path
                  id="profile-[#1335]"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M75 75C58.455 75 45 61.545 45 45C45 28.455 58.455 15 75 15C91.545 15 105 28.455 105 45C105 61.545 91.545 75 75 75ZM103.185 80.0473C113.43 71.8048 120 59.175 120 45C120 20.145 99.855 0 75 0C50.145 0 30 20.145 30 45C30 59.175 36.57 71.8048 46.815 80.0473C19.3725 90.3598 0 115.838 0 150H15C15 112.5 41.9175 90 75 90C108.082 90 135 112.5 135 150H150C150 115.838 130.627 90.3598 103.185 80.0473Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_164_1587">
            <rect width="150" height="150" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ProfileIcon;
