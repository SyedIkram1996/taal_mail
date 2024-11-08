import BidsAndFollowUps from "@/components/ui/Admin/BidsAndFollowUps/BidsAndFollowUps";
import { BIDS_AND_FOLLOW_UPS } from "@/constants/api.routes";
import { cookies } from "next/headers";

export default async function BidsAndFollowUpsPage() {
  const token = cookies().get("token");

  const response = await fetch(`${BIDS_AND_FOLLOW_UPS}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return (
    <>{!res.error && <BidsAndFollowUps data={res.bids} token={token} />}</>
  );
}
