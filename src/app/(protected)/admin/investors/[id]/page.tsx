import AdminHeader from "@/components/ui/Admin/AdminHeader";
import Investor from "@/components/ui/Admin/Investors/Investor/Investor";
import { ADMIN_INVESTMENT } from "@/constants/api.routes";
import { ADMIN_INVESTORS_PAGE } from "@/constants/page.routes";
import { cookies } from "next/headers";

interface Params {
  params: { id: string };
}

export default async function InvestorPage({ params }: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${ADMIN_INVESTMENT}?id=${params.id}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return (
    <>
      {!res.error && (
        <>
          <AdminHeader
            title={res.investment.username}
            link={ADMIN_INVESTORS_PAGE}
          />

          <Investor investment={res.investment} token={token} />
        </>
      )}
    </>
  );
}
