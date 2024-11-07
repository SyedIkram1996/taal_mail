import BidsAndFollowUps from "@/components/ui/Admin/BidsAndFollowUps/BidsAndFollowUps";
import { PROPERTIES } from "@/constants/api.routes";
import { cookies } from "next/headers";

export default async function BidsAndFollowUpsPage() {
  const token = cookies().get("token");

  //TODO: change this api route
  const response = await fetch(`${PROPERTIES}`, {
    cache: "no-store",
  });
  const res = await response.json();

  return (
    <>
      {!res.error && <BidsAndFollowUps data={res.properties} token={token} />}
    </>
  );
}
