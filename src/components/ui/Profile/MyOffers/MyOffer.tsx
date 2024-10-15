"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextMd from "@/components/common/Text/TextMd";
import TextXl from "@/components/common/Text/TextXl";
import { CloseIcon, TickWhiteIcon } from "@/constants/images.routes";
import { PROPERTY } from "@/constants/page.routes";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Dialog, Stack } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  val: IBuyRentProperty;
}

const MyOffer = ({ val }: Props) => {
  const [openBidDetails, setOpenBidDetails] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);
  const [bidValue, setBidValue] = useState("200000");
  const [description, setDescription] = useState("Price is negotiable.");

  return (
    <>
      <Stack sx={{ alignItems: "center" }}>
        <MUILink href={`${PROPERTY}/${val.id}`}>
          <PropertyCard
            id={val.id}
            title={val.title}
            bedRooms={val.bedRooms}
            bathRooms={val.bathRooms}
            area={val.area}
            type={val.type}
            location={val.location}
          >
            <TextMd
              text={`Title: Deal Closed.`}
              sx={{
                paddingX: "1.94rem",
                color: "var(--text-black)",
                mb: "0.94rem",
              }}
            />

            <TextMd
              text={`Bid: PKR 1.9 Crore`}
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
              text="Details"
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
        </MUILink>
      </Stack>

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
              padding: "2.81rem 3.12rem 2.34rem 3.12rem",
              gap: "1.87rem",
              position: "relative",
              ".closeImg": {
                position: "absolute",
                top: "1.87rem",
                right: "1rem",
                cursor: "pointer",
              },
            }}
          >
            <Image
              onClick={() => setOpenBidDetails(false)}
              className="closeImg"
              src={CloseIcon}
              alt="close"
              width={60}
              height={60}
            />
            <TextXl
              text="Deal Closed."
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
                  value={`${bidValue}`}
                  onChange={(e) => setBidValue(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
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
              text="Accept Offer"
              onClick={() => {
                setAcceptOffer(true);
                setOpenBidDetails(false);
              }}
              startIcon={
                <Image
                  priority
                  src={TickWhiteIcon}
                  alt={"tick white icon"}
                  width={30}
                  height={30}
                />
              }
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
            setAcceptOffer(false);
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
                text="Yes"
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
              <FilledButton
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
    </>
  );
};

export default MyOffer;
