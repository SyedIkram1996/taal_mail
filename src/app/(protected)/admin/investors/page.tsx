import Investors from "@/components/ui/Admin/Investors/Investors";
import { INVESTMENTS } from "@/constants/api.routes";
import { cookies } from "next/headers";

export default async function InvestorsPage() {
  const token = cookies().get("token");

  //TODO: change this api route
  const response = await fetch(`${INVESTMENTS}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return (
    <>{!res.error && <Investors data={res.investments} token={token} />}</>
  );
}
