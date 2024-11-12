"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import TickIcon from "@/components/common/SvgIcons/TickIcon";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import { updateBid } from "@/services/bid.services";
import { formatAmountToPKR } from "@/utils/maths";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  val: any;
  token?: RequestCookie;
}

const MyOffer = ({ val, token }: Props) => {
  const [openBidDetails, setOpenBidDetails] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => updateBid(val.id, token),
    onSuccess: (data) => {
      // revalidatePage(ADMIN_INVESTORS_PAGE);
      router.refresh();
      setAcceptOffer(false);
      setOfferAccepted(true);
    },
    onError: (error) => {},
  });

  return (
    <>
      <PropertyCard disableLink property={val.property}>
        <TextMd
          noWrap
          text={`${val.title}`}
          sx={{
            paddingX: "1.94rem",
            color: "var(--text-black)",
            mb: "0.94rem",
          }}
        />

        <TextMd
          text={`Bid: ${val.bidderBid.currency} ${formatAmountToPKR(Number(val.bidderBid.price))}`}
          sx={{
            paddingX: "1.94rem",
            color: "var(--text-black)",
            mb: "0.94rem",
          }}
        />
        <FilledButton
          onClick={(e) => {
            e.preventDefault();
            setOpenBidDetails(true);
          }}
          text={val.status === "accepted" ? "Accepted" : "Details"}
          disabled={val.status === "accepted"}
          sx={{
            alignSelf: "center",
            fontSize: "1rem",
            width: "6.52163rem",
            height: "2.0625rem",
            padding: "0",
            mb: "1.56rem",
          }}
        />
      </PropertyCard>

      {openBidDetails && (
        <Dialog
          scroll="body"
          open={openBidDetails}
          onClose={() => setOpenBidDetails(false)}
          PaperProps={{
            sx: {
              width: "50.6875rem",
            },
          }}
        >
          <Stack
            sx={{
              padding: { xs: "1rem", md: "2.81rem 3.12rem 2.34rem 3.12rem" },
              gap: "1.87rem",
              position: "relative",
            }}
          >
            <CrossIcon
              onClick={() => setOpenBidDetails(false)}
              sx={{
                width: "60px",
                height: "60px",
                path: { fill: "var(--myrtle-green)" },
                position: "absolute",
                top: "1.87rem",
                right: "1rem",
                cursor: "pointer",
              }}
            />
            <TextXl
              text={`${val.title}`}
              sx={{
                alignSelf: "center",
                fontSize: "2rem",
                fontWeight: "700",
                color: "var(--text-black)",
              }}
            />

            <Stack sx={{ gap: "1.5rem" }}>
              <TextMd
                text="Bidder’s Bid:"
                sx={{ fontWeight: "700", color: "var(--text-black)" }}
              />
              <Stack sx={{ gap: "0.35rem" }}>
                <LabelTopTextField
                  type="number"
                  placeholder="Bid"
                  value={val.bidderBid.price}
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
                  text={`i.e ${formatAmountToPKR(Number(val.bidderBid.price))}`}
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
                value={val.description}
                multiline
                placeholder="Description"
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
              text="Accept Offer"
              onClick={() => {
                setAcceptOffer(true);
                setOpenBidDetails(false);
              }}
              startIcon={<TickIcon sx={{ width: "30px", height: "30px" }} />}
              sx={{
                width: "12.1875rem",
                height: "3.4375rem",
                fontSize: "1.25rem",
                fontWeight: "600",
                padding: "0",
                alignSelf: "center",
              }}
            />
          </Stack>
        </Dialog>
      )}

      {acceptOffer && (
        <Dialog
          open={acceptOffer}
          onClose={() => {
            if (!mutation.isPending) {
              setAcceptOffer(false);
            }
          }}
          PaperProps={{
            sx: {
              width: "14.625rem",
              textAlign: "center",
              borderRadius: "1.875rem",
            },
          }}
        >
          <Stack
            sx={{
              padding: "2.6875rem 0.9375rem 1.5rem 1.1875rem",
              alignItems: "center",
              gap: "2.06rem",
            }}
          >
            <TextMd
              text={"Are you sure you want to accept the offer?"}
              sx={{
                fontSize: "1.125rem",
                fontWeight: "400",
                color: "var(--text-black)",
                lineHeight: "normal",
              }}
            />

            <Stack direction={"row"} sx={{ gap: "1.44rem" }}>
              <FilledButton
                loading={mutation.isPending}
                disabled={mutation.isPending}
                text="Yes"
                onClick={() => {
                  mutation.mutate();
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
              <FilledButton
                disabled={mutation.isPending}
                text="No"
                onClick={() => {
                  setAcceptOffer(false);
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
          </Stack>
        </Dialog>
      )}

      {offerAccepted && (
        <Dialog
          open={offerAccepted}
          PaperProps={{
            sx: {
              width: "15.625rem",
              textAlign: "center",
              borderRadius: "1.875rem",
            },
          }}
        >
          <Stack
            sx={{
              padding: "1.88rem",
              pb: "1.19rem",
              alignItems: "center",
            }}
          >
            <TextMd
              text={"Accepted Offer!"}
              sx={{
                width: "11.875rem",
                fontSize: "1.125rem",
                fontWeight: "400",
                color: "var(--text-black)",
                lineHeight: "normal",
                textAlign: "center",
              }}
            />
            <TextMd
              text={"Our agent will get in contact with you shortly."}
              sx={{
                width: "11.875rem",
                fontSize: "1.125rem",
                fontWeight: "400",
                color: "var(--text-black)",
                lineHeight: "normal",
                textAlign: "center",
              }}
            />

            <FilledButton
              text="Ok"
              onClick={() => {
                setOfferAccepted(false);
              }}
              sx={{
                width: "4.125rem",
                height: "2rem",
                fontSize: "1rem",
                fontWeight: "400",
                borderRadius: "0.9375rem",
                padding: "0.31rem 1.44rem",
                mt: "1.86rem",
              }}
            />
          </Stack>
        </Dialog>
      )}
    </>
  );
};

export default MyOffer;
