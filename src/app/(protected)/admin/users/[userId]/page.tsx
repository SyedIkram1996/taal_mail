import PropertiesSkeleton from "@/components/common/Skeletons/PropertiesSkeleton";
import AdminHeader from "@/components/ui/Admin/AdminHeader";
import User from "@/components/ui/Admin/Users/User/User";
import { USER } from "@/constants/api.routes";
import { ADMIN_USERS_PAGE } from "@/constants/page.routes";
import { cookies } from "next/headers";
import { Suspense } from "react";

interface Params {
  params: { userId: string };
}

export default async function UserPage({ params }: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${USER}?id=${params.userId}`, {
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
          <AdminHeader title={res.user.name} link={ADMIN_USERS_PAGE} />

          <Suspense fallback={<PropertiesSkeleton />}>
            <User userId={params.userId} />
          </Suspense>
        </>
      )}
    </>
  );
}
