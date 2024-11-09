import Users from "@/components/ui/Admin/Users/Users";
import { USERS } from "@/constants/api.routes";
import { cookies } from "next/headers";

interface Params {
  searchParams: { search: string };
}

export default async function UsersPage({ searchParams }: Params) {
  const token = cookies().get("token");

  const response = await fetch(`${USERS}?search=${searchParams.search || ""}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return <>{!res.error && <Users users={res.users} />}</>;
}
