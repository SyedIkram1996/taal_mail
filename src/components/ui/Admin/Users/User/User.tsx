import { USER_PROPERTIES } from "@/constants/api.routes";
import { cookies } from "next/headers";
import UserPropertiesBids from "./UserPropertiesBids";

interface Props {
  userId: string;
}

const User = async ({ userId }: Props) => {
  const token = cookies().get("token");

  const response = await fetch(`${USER_PROPERTIES}?id=${userId}`, {
    cache: "no-store",
    headers: {
      Authorization: token ? `Bearer ${token.value}` : "",
      "Content-Type": "application/json",
    },
  });

  const res = await response.json();

  return (
    <>
      <UserPropertiesBids
        properties={res.properties}
        bids={res.bids}
        token={token}
      />{" "}
    </>
  );
};

export default User;
