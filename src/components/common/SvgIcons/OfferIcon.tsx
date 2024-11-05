import { SvgIcon, SxProps } from "@mui/material";

interface Props {
  sx?: SxProps;
}

const OfferIcon = ({ sx }: Props) => {
  return (
    <SvgIcon sx={sx}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="auction-bid_svgrepo.com">
          <g id="Group">
            <g id="Group_2">
              <path
                id="Vector"
                d="M25.5 4.5H22.5C22.5 3.67148 21.8285 3 21 3H19.5V1.5C19.5 0.671484 18.8285 0 18 0H12C11.1715 0 10.5 0.671484 10.5 1.5V3H9C8.17148 3 7.5 3.67148 7.5 4.5H4.5C3.67148 4.5 3 5.17148 3 6V28.5C3 29.3285 3.67148 30 4.5 30H25.5C26.3285 30 27 29.3285 27 28.5V6C27 5.17148 26.3285 4.5 25.5 4.5ZM9 4.5H12V1.5H18V4.5H21V6H9V4.5ZM25.5 28.5H4.5V6H7.5C7.5 6.82852 8.17148 7.5 9 7.5H21C21.8285 7.5 22.5 6.82852 22.5 6H25.5V28.5Z"
                fill="#2541B2"
              />
            </g>
          </g>
          <g id="Group_3">
            <g id="Group_4">
              <path
                id="Vector_2"
                d="M22.5 10.5H7.5V12H22.5V10.5Z"
                fill="#2541B2"
              />
            </g>
          </g>
          <g id="Group_5">
            <g id="Group_6">
              <path
                id="Vector_3"
                d="M22.5 15H7.5V16.5H22.5V15Z"
                fill="#2541B2"
              />
            </g>
          </g>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default OfferIcon;
