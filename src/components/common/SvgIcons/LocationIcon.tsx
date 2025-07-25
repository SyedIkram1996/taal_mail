import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const LocationIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="location-pin_svgrepo.com">
          <path
            id="Vector"
            d="M10.0003 17.5C12.917 14.5 15.8337 11.8137 15.8337 8.5C15.8337 5.18629 13.222 2.5 10.0003 2.5C6.77867 2.5 4.16699 5.18629 4.16699 8.5C4.16699 11.8137 7.08366 14.5 10.0003 17.5Z"
            stroke="#1768AC"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M10 10.8334C11.3807 10.8334 12.5 9.71412 12.5 8.33337C12.5 6.95267 11.3807 5.83337 10 5.83337C8.61925 5.83337 7.5 6.95267 7.5 8.33337C7.5 9.71412 8.61925 10.8334 10 10.8334Z"
            stroke="#1768AC"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default LocationIcon;
