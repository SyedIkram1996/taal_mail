import Users from "@/components/ui/Admin/Users/Users";
import { USERS } from "@/constants/api.routes";
import { cookies } from "next/headers";

export default async function UsersPage() {
  const token = cookies().get("token");

  const response = await fetch(`${USERS}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return <>{!res.error && <Users users={res.users} />}</>;
}
