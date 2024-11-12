import Investors from "@/components/ui/Admin/Investors/Investors";
import { INVESTMENTS } from "@/constants/api.routes";
import { cookies } from "next/headers";

interface Params {
  searchParams: { search: string };
}

export default async function InvestorsPage({ searchParams }: Params) {
  const token = cookies().get("token");

  const response = await fetch(
    `${INVESTMENTS}?search=${searchParams.search || ""}`,
    {
      cache: "no-store",
      headers: {
        Authorization: token ? `Bearer ${token.value}` : "",
        "Content-Type": "application/json",
      },
    },
  );
  const res = await response.json();

  return (
    <>{!res.error && <Investors data={res.investments} token={token} />}</>
  );
}
