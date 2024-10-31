"use client";

import { deleteCookie } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import MUILink from "@/components/common/MUILink/MUILink";
import TextLg from "@/components/common/Text/TextLg";
import { LOGIN } from "@/constants/page.routes";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { Dialog, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  setOpenSessionExpired?: (value: boolean) => void;
}

const SessionExpire = ({ setOpenSessionExpired }: Props) => {
  const router = useRouter();

  useEffect(() => {
    deleteCookie();
  }, []);

  return (
    <Dialog
      open
      onClose={() => {
        if (setOpenSessionExpired) {
          setOpenSessionExpired(false);
        }
      }}
    >
      <Stack sx={{ padding: "2rem", alignItems: "center" }}>
        <ReportGmailerrorredIcon
          sx={{ color: "var(--error)", fontSize: "4rem" }}
        />
        <TextLg
          text="Your session has been expired"
          sx={{ color: "var(--text-black)" }}
        />
        <MUILink href={LOGIN}>
          <FilledButton
            sx={{ mt: "2rem" }}
            text="Login"
            onClick={() => {
              if (setOpenSessionExpired) {
                setOpenSessionExpired(false);
              }
            }}
          />
        </MUILink>
      </Stack>
    </Dialog>
  );
};

export default SessionExpire;
