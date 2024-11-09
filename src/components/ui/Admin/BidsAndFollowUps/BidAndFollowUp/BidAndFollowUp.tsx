"use client";

import ShadowCard from "@/components/common/Card/ShadowCard";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import PropertyHeaderAndIcons from "@/components/ui/Property/PropertyDetails/PropertyHeaderAndIcons";
import { IBid } from "@/interfaces/IBid";
import { formatAmountToPKR } from "@/utils/maths";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import AddFollowUpMeeting from "./AddFollowUpMeeting";

interface Props {
  bid: IBid;
  token?: RequestCookie;
}

const BidAndFollowUp = ({ bid, token }: Props) => {
  const {
    name,
    bedrooms,
    bathrooms,
    area,
    type,
    duesCleared,
    status,
    location,
    features,
    allotmentLetter,
    price,
  } = bid.property;

  const sellerBidCard = {
    fontSize: "1.125rem",
    border: "1px solid var(--platinum)",
    borderRadius: "0.625rem",
    padding: "0.87rem",
    minWidth: "25.6875rem",
    textAlign: "center",
    span: {
      color: "var(--text-secondary)",
    },
  };

  const circleIcon = {
    fontSize: "0.5rem",
    color: "var(--text-secondary)",
  };

  return (
    <Stack maxWidth={"xl"} sx={{ mt: "2.38rem", px: "3.5rem", pb: "5rem" }}>
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 9 }}>
          <PropertyHeaderAndIcons
            name={name}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            area={area}
            type={type}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }}>
          <Stack
            sx={{
              gap: { xs: "1rem", sm: "2.13rem" },
              alignItems: { xs: "flex-start", sm: "center" },
            }}
          >
            <TextLg
              text={`${price.currency} ${formatAmountToPKR(Number(price.askingPrice))}`}
              sx={{
                pt: { xs: "3rem", sm: "1.5rem" },
                fontSize: "1.875rem",
                color: "var(--text-black)",
              }}
            />
          </Stack>
        </Grid2>
      </Grid2>

      <Stack sx={{ gap: "1.87rem", mt: "3.25rem", mb: "1.25rem" }}>
        <TextMd
          text={"Bid Description:"}
          sx={{
            fontWeight: "600",
            color: "var(--text-black)",
            fontSize: "1.875rem",
          }}
        />
        <TextMd
          text={bid.description}
          sx={{
            fontWeight: "400",
            border: "1px solid var(--spanish-gray)",
            borderRadius: "0.9375rem",
            padding: "0.65rem 2.31rem",
          }}
        />
      </Stack>

      <TextLg
        text="Follow Up:"
        sx={{
          fontSize: "1.875rem",
          color: "var(--text-black)",
          mt: "2.75rem",
          mb: "3.06rem",
        }}
      />

      <ShadowCard
        sx={{
          padding: "2.88rem 5rem",
        }}
      >
        {bid.followUps && bid.followUps.length > 0 ? (
          bid.followUps.map((val, index) => (
            <Stack sx={{ alignItems: "center", gap: "1.63rem", pb: "3.44rem" }}>
              <ShadowCard sx={{ borderRadius: "0.625rem", width: "100%" }}>
                <TextMd
                  text={val.title}
                  sx={{
                    padding: "0.87rem",
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                />
              </ShadowCard>

              <CircleIcon sx={{ ...circleIcon }} />
              <CircleIcon sx={{ ...circleIcon }} />

              <Typography
                sx={{
                  ...sellerBidCard,
                }}
              >
                Seller's Offer: <span>{bid.property.price.currency} </span>
                {formatAmountToPKR(Number(val.sellerOffer))}
              </Typography>
              <Typography
                sx={{
                  ...sellerBidCard,
                }}
              >
                Bidder's Bid: <span>{bid.bidderBid.currency} </span>
                {formatAmountToPKR(Number(val.bidderBid))}
              </Typography>

              <CircleIcon sx={{ ...circleIcon }} />
              <CircleIcon sx={{ ...circleIcon }} />

              {val.meeting && (
                <>
                  <Typography
                    sx={{
                      ...sellerBidCard,
                    }}
                  >
                    <span>Meeting:</span>{" "}
                    {dayjs(val.meeting).format("DD/MM/YYYY")}
                  </Typography>

                  <CircleIcon sx={{ ...circleIcon }} />
                  <CircleIcon sx={{ ...circleIcon }} />
                </>
              )}

              <Box
                sx={{
                  width: "100%",
                  height: "0.0625rem",
                  backgroundColor: "var(--text-secondary)",
                }}
              />
            </Stack>
          ))
        ) : (
          <TextLg text="Bid is pending" />
        )}

        {bid.followUps && bid.followUps.length > 0 && (
          <AddFollowUpMeeting
            followUps={bid.followUps}
            bidId={bid.id}
            token={token}
          />
        )}
      </ShadowCard>
    </Stack>
  );
};

export default BidAndFollowUp;
