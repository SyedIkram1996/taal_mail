"use client";

import { deleteCookie } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextMd from "@/components/common/Text/TextMd";
import { BidIcon } from "@/constants/images.routes";
import { useUserContext } from "@/context/userContext";
import { Dialog, Stack } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SessionExpire from "../SessionExpire/SessionExpire";

interface Props {
  userSession: any;
}

const BidButton = ({ userSession }: Props) => {
  const [openBid, setOpenBid] = useState(false);
  const [bidAdded, setBidAdded] = useState(false);
  const pathname = usePathname();
  const [openSessionExpired, setOpenSessionExpired] = useState(false);
  const { user: UserData } = useUserContext();
  const router = useRouter();

  return (
    <>
      <FilledButton
        text="Bid"
        onClick={() => {
          if (!UserData && userSession) {
            deleteCookie();
            router.replace(pathname, { scroll: false });
            setOpenSessionExpired(true);
          } else {
            setOpenBid(true);
          }
        }}
        startIcon={
          <Image
            priority
            src={BidIcon}
            alt={"BidIcon"}
            width={30}
            height={30}
          />
        }
        sx={{
          gap: "0.62rem",
          width: "11.875rem",
          height: "3.125rem",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        }}
      />

      {userSession && (
        <Dialog
          scroll="body"
          open={openBid}
          onClose={() => setOpenBid(false)}
          PaperProps={{
            sx: {
              width: "50.6875rem",
            },
          }}
        >
          <Stack
            sx={{
              padding: "2.81rem 3.12rem 2.34rem 3.12rem",
              gap: "1.87rem",
              position: "relative",
            }}
          >
            <DialogHeader title={"Add Bid"} setOpen={setOpenBid} />

            <Stack sx={{ gap: "1.5rem" }}>
              <TextMd
                text="Title:"
                sx={{ fontWeight: "700", color: "var(--text-black)" }}
              />
              <LabelTopTextField
                sx={{
                  ".MuiInputBase-root": {
                    input: {
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                      fontWeight: "700",
                    },
                  },
                }}
              />
            </Stack>

            <Stack sx={{ gap: "1.5rem" }}>
              <TextMd
                text="Bidder’s Bid:"
                sx={{ fontWeight: "700", color: "var(--text-black)" }}
              />
              <Stack sx={{ gap: "0.35rem" }}>
                <LabelTopTextField
                  endIcon={<TextMd text={"PKR"} sx={{ fontWeight: "700" }} />}
                  sx={{
                    ".MuiInputBase-root": {
                      input: {
                        fontSize: "1.25rem",
                        color: "var(--text-primary)",
                        fontWeight: "700",
                      },
                    },
                  }}
                />
                <TextMd
                  text={"i.e 2 Lac"}
                  sx={{ fontWeight: "700", pl: "2.31rem" }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ gap: "1.5rem" }}>
              <TextMd
                text="Description:"
                sx={{ fontWeight: "700", color: "var(--text-black)" }}
              />
              <LabelTopTextField
                sx={{
                  ".MuiInputBase-root": {
                    input: {
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                      fontWeight: "700",
                    },
                  },
                }}
              />
            </Stack>

            <FilledButton
              text="Bid"
              onClick={() => {
                setBidAdded(true);
                setOpenBid(false);
              }}
              sx={{
                width: "12.1875rem",
                height: "3.4375rem",
                fontSize: "1.25rem",
                fontWeight: "600",
                padding: "0.31rem 1.44rem",
                alignSelf: "center",
              }}
            />
          </Stack>
        </Dialog>
      )}

      {(!userSession || bidAdded) && (
        <Dialog
          open={openBid || bidAdded}
          onClose={() => {
            setOpenBid(false);
            if (bidAdded) {
              setBidAdded(false);
            }
          }}
          PaperProps={{
            sx: {
              width: "11.0625rem",
              textAlign: "center",
              borderRadius: "1.875rem",
            },
          }}
        >
          <Stack
            sx={{
              padding: "1.44rem 0.81rem 1.87rem 0.81rem",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <TextMd
              text={
                bidAdded
                  ? "Bid Added!"
                  : "Please Login to your account to make a bid"
              }
              sx={{
                fontSize: "1.125rem",
                fontWeight: "400",
                color: "var(--text-black)",
                lineHeight: "normal",
              }}
            />

            <FilledButton
              text="Ok"
              onClick={() => {
                setOpenBid(false);
                if (bidAdded) {
                  setBidAdded(false);
                }
              }}
              sx={{
                width: "4.125rem",
                height: "2rem",
                fontSize: "1rem",
                fontWeight: "400",
                borderRadius: "0.9375rem",
                padding: "0.31rem 1.44rem",
              }}
            />
          </Stack>
        </Dialog>
      )}

      {openSessionExpired && (
        <SessionExpire setOpenSessionExpired={setOpenSessionExpired} />
      )}
    </>
  );
};

export default BidButton;
