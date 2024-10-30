import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const SearchIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          d="M23.3258 23.1425L32 31.7906M27 14.2906C27 21.1941 21.4035 26.7906 14.5 26.7906C7.59643 26.7906 2 21.1941 2 14.2906C2 7.38708 7.59643 1.79065 14.5 1.79065C21.4035 1.79065 27 7.38708 27 14.2906Z"
          stroke="#9E9E9E"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default SearchIcon;
