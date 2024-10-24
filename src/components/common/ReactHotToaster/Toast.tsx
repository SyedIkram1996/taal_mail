import { CrossRed, TickCheckboxGreen } from "@/constants/images.routes";
import { Stack, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

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

const image: { [type in toastTypes]: string } = {
  [toastTypes.success]: TickCheckboxGreen,
  [toastTypes.error]: CrossRed,
  [toastTypes.info]: CrossRed,
  [toastTypes.warning]: CrossRed,
};

const background: { [type in toastTypes]: string } = {
  [toastTypes.success]: "bg-success ",
  [toastTypes.error]: "bg-danger",
  [toastTypes.info]: "bg-info",
  [toastTypes.warning]: "bg-warning",
};

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
            <Image
              priority
              src={image[type]}
              alt={"icon"}
              width={20}
              height={20}
            />
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
