"use client";

import FilledButton from "@/components/common/Button/FilledButton";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import TextMd from "@/components/common/Text/TextMd";
import { IProperty } from "@/interfaces/IProperty";
import { cancelBid } from "@/services/bid.services";
import { formatAmountToPKR } from "@/utils/maths";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  property: IProperty;
  bidderBid: {
    price: string;
    currency: string;
  };
  id: string;
  token?: RequestCookie;
}

const MyBid = ({ property, bidderBid, id, token }: Props) => {
  const [openBidCancel, setOpenBidCancel] = useState(false);
  const router = useRouter();

  const cancelBidMutation = useMutation({
    mutationFn: async () => {
      return cancelBid(id, token);
    },
    onSuccess: (data) => {
      router.refresh();
      setOpenBidCancel(false);
    },
    onError: (error) => {},
  });

  return (
    <>
      <PropertyCard disableLink property={property}>
        <TextMd
          text={`Bid: ${bidderBid.currency} ${formatAmountToPKR(Number(bidderBid.price))}`}
          sx={{
            paddingX: "1.94rem",
            color: "var(--text-black)",
            mb: "1.75rem",
          }}
        />
        <FilledButton
          onClick={(e) => {
            e.preventDefault();
            setOpenBidCancel(true);
          }}
          text="Cancel Bid"
          startIcon={<CrossIcon sx={{ width: "40px", height: "40px" }} />}
          sx={{
            alignSelf: "center",
            width: "10.625rem",
            height: "3.4375rem",
            padding: "0",
            mb: "1.56rem",
          }}
        />
      </PropertyCard>

      <Dialog
        open={openBidCancel}
        PaperProps={{
          sx: {
            width: "14.0625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem 0.81rem 1.87rem 0.81rem",
            alignItems: "center",
            gap: "1.87rem",
          }}
        >
          <TextMd
            text={"Cancel this Bid?"}
            sx={{
              width: "12rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />

          <Stack direction={"row"} sx={{ gap: "1rem", alignItems: "center" }}>
            <FilledButton
              loading={cancelBidMutation.isPending}
              disabled={cancelBidMutation.isPending}
              text="Yes"
              onClick={() => {
                cancelBidMutation.mutate();
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
              disabled={cancelBidMutation.isPending}
              text="No"
              onClick={() => {
                setOpenBidCancel(false);
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
    </>
  );
};

export default MyBid;
