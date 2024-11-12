import TextLg from "@/components/common/Text/TextLg";
import AdminHeader from "@/components/ui/Admin/AdminHeader";
import BidAndFollowUp from "@/components/ui/Admin/BidsAndFollowUps/BidAndFollowUp/BidAndFollowUp";
import { BID_AND_FOLLOW_UP } from "@/constants/api.routes";
import {
  ADMIN_BIDS_AND_FOLLOW_UPS_PAGE,
  ADMIN_USERS_PAGE,
} from "@/constants/page.routes";
import { formatAmountToPKR } from "@/utils/maths";
import { cookies } from "next/headers";

interface Params {
  params: { bidId: string };
  searchParams: { user: string };
}

export default async function BidAndFollowUpPage({
  params,
  searchParams,
}: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${BID_AND_FOLLOW_UP}?id=${params.bidId}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  return (
    <>
      <AdminHeader
        title={
          data && !data.error
            ? `${data.bid.property.price.currency} ${formatAmountToPKR(Number(data.bid.property.price.askingPrice))}`
            : ""
        }
        link={
          searchParams.user
            ? `${ADMIN_USERS_PAGE}/${searchParams.user}?filter=bids`
            : ADMIN_BIDS_AND_FOLLOW_UPS_PAGE
        }
      />
      {data && !data.error ? (
        <BidAndFollowUp bid={data.bid} token={token} />
      ) : (
        <TextLg text={data.message} sx={{ mt: "3rem", textAlign: "center" }} />
      )}
    </>
  );
}
