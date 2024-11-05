import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const ChevronDownGreyIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow-down_svgrepo.com">
          <path
            id="Vector"
            d="M9.5116 16.1845C8.86072 16.8353 8.86072 17.8907 9.5116 18.5415L17.6653 26.6872C18.9673 27.9878 21.0769 27.9873 22.3783 26.6862L30.5288 18.5355C31.1798 17.8847 31.1798 16.8293 30.5288 16.1785C29.8779 15.5276 28.8226 15.5276 28.1718 16.1785L21.1958 23.1545C20.5449 23.8055 19.4896 23.8053 18.8388 23.1545L11.8686 16.1845C11.2177 15.5336 10.1625 15.5336 9.5116 16.1845Z"
            fill="#9E9E9E"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default ChevronDownGreyIcon;
