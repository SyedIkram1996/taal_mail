"use client";

import { deleteCookie, revalidatePage } from "@/app/actions";
import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import FieldTitle from "@/components/common/Input/FieldTitle";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextMd from "@/components/common/Text/TextMd";
import { BidIcon } from "@/constants/images.routes";
import { MY_BIDS_PAGE } from "@/constants/page.routes";
import { useUserContext } from "@/context/userContext";
import { IBid } from "@/interfaces/IBid";
import { addBid } from "@/services/bid.services";
import { formatAmountToPKR } from "@/utils/maths";
import { bidSchema } from "@/validators/bid";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import SessionExpire from "../../SessionExpire/SessionExpire";

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
  const { id } = useParams();

  const formik = useFormik<Pick<IBid, "title" | "bidderBid" | "description">>({
    initialValues: {
      title: "",
      bidderBid: { price: "", currency: "PKR" },
      description: "",
    },
    onSubmit: (values) => {
      mutation.mutate();
    },
    validationSchema: toFormikValidationSchema(bidSchema),
  });

  const formikValues = formik.values;
  const formikErrors = formik.errors;

  console.log(formikErrors);

  const mutation = useMutation({
    mutationFn: async () =>
      addBid({ ...formikValues, property: id }, userSession),
    onSuccess: (data) => {
      // router.refresh();
      revalidatePage(MY_BIDS_PAGE);
      setBidAdded(true);
      setOpenBid(false);
    },
    onError: (error) => {},
  });

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
            component={"form"}
            onSubmit={formik.handleSubmit}
            sx={{
              padding: "2.81rem 3.12rem 2.34rem 3.12rem",
              gap: "1.87rem",
              position: "relative",
            }}
          >
            <DialogHeader title={"Add Bid"} setOpen={setOpenBid} />

            <Stack sx={{ gap: "1.5rem" }}>
              <FieldTitle
                title="Title:"
                error={
                  formikErrors.title && formik.touched.title
                    ? formikErrors.title
                    : ""
                }
              />
              <LabelTopTextField
                value={formikValues.title}
                onChange={(e) => formik.setFieldValue("title", e.target.value)}
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
              <FieldTitle
                title="Bidder’s Bid:"
                error={
                  formikErrors.bidderBid?.price &&
                  formik.touched.bidderBid?.price
                    ? formikErrors.bidderBid?.price
                    : ""
                }
              />

              <Stack sx={{ gap: "0.35rem" }}>
                <LabelTopTextField
                  type="number"
                  value={formikValues.bidderBid.price}
                  onChange={(e) =>
                    formik.setFieldValue("bidderBid.price", e.target.value)
                  }
                  endIcon={
                    <TextMd
                      text={formikValues.bidderBid.currency}
                      sx={{ fontWeight: "700" }}
                    />
                  }
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
                  text={`i.e ${formatAmountToPKR(Number(formikValues.bidderBid.price))}`}
                  sx={{ fontWeight: "700", pl: "2.31rem" }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ gap: "1.5rem" }}>
              <FieldTitle
                title="Description:"
                error={
                  formikErrors.description && formik.touched.description
                    ? formikErrors.description
                    : ""
                }
              />

              <LabelTopTextField
                multiline
                value={formikValues.description}
                onChange={(e) =>
                  formik.setFieldValue("description", e.target.value)
                }
                sx={{
                  ".MuiInputBase-root": {
                    textArea: {
                      fontSize: "1.25rem",
                      color: "var(--text-primary)",
                      fontWeight: "700",
                    },
                  },
                }}
              />
            </Stack>

            <FilledButton
              loading={mutation.isPending}
              disabled={mutation.isPending}
              type="submit"
              text="Bid"
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
