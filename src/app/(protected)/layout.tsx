import UserState from "@/context/userContext";
import * as React from "react";

export default function ProtectedLayout(props: { children: React.ReactNode }) {
  return (
    <UserState>
      <>{props.children}</>
    </UserState>
  );
}
