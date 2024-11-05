import { Stack, Typography } from "@mui/material";

import Link from "next/link";
import { ReactNode } from "react";
import toast from "react-hot-toast";
import CrossFilled from "../SvgIcons/CrossFilled";
import TickCheckboxFilled from "../SvgIcons/TickCheckboxFilled";

export enum toastTypes {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}

export interface contents {
  title: string;
  description: string;
}

export interface contentTest {
  type: toastTypes;
  description: string;
  link?: string;
  linkHref?: string;
}

const image: { [type in toastTypes]: ReactNode } = {
  [toastTypes.success]: (
    <TickCheckboxFilled sx={{ width: "20px", height: "20px" }} />
  ),
  [toastTypes.error]: <CrossFilled sx={{ width: "20px", height: "20px" }} />,
  [toastTypes.info]: <CrossFilled sx={{ width: "20px", height: "20px" }} />,
  [toastTypes.warning]: <CrossFilled sx={{ width: "20px", height: "20px" }} />,
};

// const background: { [type in toastTypes]: string } = {
//   [toastTypes.success]: "bg-success ",
//   [toastTypes.error]: "bg-danger",
//   [toastTypes.info]: "bg-info",
//   [toastTypes.warning]: "bg-warning",
// };

const Toast = ({ type, description, link, linkHref }: contentTest) => (
  <>
    {toast.custom((t) => (
      <div>
        <Stack
          sx={{
            width: "fit-content",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "white",
            }}
          >
            {image[type]}
            <Stack
              direction={"row"}
              sx={{
                gap: "0.5rem",
                a: {
                  fontSize: "0.8125rem",
                  fontWeight: "500",
                  lineHeight: "1.125rem",
                  textDecoration: "underline",
                  color: "var(--primary)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8125rem",
                  fontWeight: "500",
                  lineHeight: "1.125rem",
                }}
              >
                {description}
              </Typography>

              {link && linkHref && <Link href={linkHref}>{link}</Link>}
            </Stack>
          </Stack>
        </Stack>
      </div>
    ))}
  </>
);

export default Toast;
