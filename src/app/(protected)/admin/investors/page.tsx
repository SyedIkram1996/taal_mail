import Investors from "@/components/ui/Admin/Investors/Investors";
import { PROPERTIES } from "@/constants/api.routes";
import { cookies } from "next/headers";

export default async function InvestorsPage() {
  const token = cookies().get("token");

  //TODO: change this api route
  const response = await fetch(`${PROPERTIES}`, {
    cache: "no-store",
  });
  const res = await response.json();

  return <>{!res.error && <Investors data={res.properties} token={token} />}</>;
}
