"use client";

import ShadowCard from "@/components/common/Card/ShadowCard";
import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import FeaturesFacilitiesNearby from "@/components/ui/Property/PropertyDetails/FeaturesFacilitiesNearby";
import PropertyHeaderAndIcons from "@/components/ui/Property/PropertyDetails/PropertyHeaderAndIcons";
import {
  basicFeatures,
  facilities,
  nearbyPlaces,
  secondaryFeatures,
} from "@/constants/property";
import { IInvestment } from "@/interfaces/IInvestment";
import { formatAmountToPKR } from "@/utils/maths";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import AddFollowUpMeetingInvestor from "./AddFollowUpMeetingInvestor";

interface DetailTextProps {
  title: string;
  text: string;
}
const DetailText = ({ title, text }: DetailTextProps) => {
  return (
    <Stack sx={{ gap: "1.87rem" }}>
      <TextMd
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      <TextMd
        text={text}
        sx={{
          fontWeight: "400",
          border: "1px solid var(--spanish-gray)",
          borderRadius: "0.9375rem",
          padding: "0.65rem 2.31rem",
        }}
      />
    </Stack>
  );
};

interface DetailTextEndTextProps {
  title: string;
  text: string;
  endText: string;
}

const DetailTextEndText = ({
  title,
  text,
  endText,
}: DetailTextEndTextProps) => {
  return (
    <Stack sx={{ gap: "1.87rem" }}>
      <TextMd
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          border: "1px solid var(--spanish-gray)",
          borderRadius: "0.9375rem",
          padding: "0.65rem 2.31rem",
        }}
      >
        <TextMd
          text={text}
          sx={{
            fontWeight: "400",
          }}
        />
        <TextMd
          text={endText}
          sx={{
            fontWeight: "400",
          }}
        />
      </Stack>
    </Stack>
  );
};

interface Props {
  investment: IInvestment;
  token?: RequestCookie;
}

const Investor = ({ investment, token }: Props) => {
  const {
    username,
    bedrooms,
    bathrooms,
    area,
    city,
    description,
    email,
    features,
    phoneNo,
    price,
  } = investment;

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
      <PropertyHeaderAndIcons
        name={`${username} wants a ${bedrooms}-Bed room House in ${city}`}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        area={area}
        type={"House"}
      />

      <Stack maxWidth={"sm"} sx={{ gap: "3.06rem", mt: "5rem" }}>
        <DetailText title="Description:" text={description} />
        <DetailText title="City:" text={city} />
        <DetailTextEndText
          title="Area:"
          text={area.totalArea}
          endText={area.type}
        />
        <Stack sx={{ gap: "0.35rem" }}>
          <DetailTextEndText
            title="Minimum Price:"
            text={price.minPrice}
            endText={"PKR"}
          />
          <TextMd
            text={`i.e ${formatAmountToPKR(Number(price.minPrice))}`}
            sx={{ fontWeight: "400", pl: "2.31rem" }}
          />
        </Stack>

        <Stack sx={{ gap: "0.35rem" }}>
          <DetailTextEndText
            title="Maximum Price:"
            text={price.maxPrice}
            endText={"PKR"}
          />
          <TextMd
            text={`i.e ${formatAmountToPKR(Number(price.maxPrice))}`}
            sx={{ fontWeight: "400", pl: "2.31rem" }}
          />
        </Stack>
      </Stack>

      {features.basicFeatures.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Basic Features"
          array={features.basicFeatures}
          constantsArray={basicFeatures}
        />
      )}

      {features.facilities.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Facilities"
          array={features.facilities}
          constantsArray={facilities}
        />
      )}

      {features.nearbyPlaces.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Nearby Places"
          array={features.nearbyPlaces}
          constantsArray={nearbyPlaces}
        />
      )}

      {features.secondaryFeatures.length > 0 && (
        <FeaturesFacilitiesNearby
          heading="Secondary Features"
          array={features.secondaryFeatures}
          constantsArray={secondaryFeatures}
        />
      )}

      <Stack maxWidth={"sm"} sx={{ gap: "3.06rem", mt: "5rem" }}>
        <DetailText title="Name:" text={username} />
        <DetailText title="Email:" text={email} />
        <DetailText title="Email:" text={phoneNo} />
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
        {investment.followUps.map((val, index) => (
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
        ))}

        <AddFollowUpMeetingInvestor
          followUps={investment.followUps}
          token={token}
        />
      </ShadowCard>
    </Stack>
  );
};

export default Investor;
