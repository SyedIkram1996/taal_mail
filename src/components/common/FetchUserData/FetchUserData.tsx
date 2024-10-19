import { BASE_URL } from "@/constants/environment copy";
import { cookies } from "next/headers";

const FetchUserData = async () => {
  const session = cookies().get("session");
  const res = await fetch(`${BASE_URL}/user`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  console.log(data);

  return <></>;
};

export default FetchUserData;
