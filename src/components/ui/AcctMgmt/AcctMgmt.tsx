"use client";

import { Stack } from "@mui/material";
import ResetPassword from "../ResetPassword/ResetPassword";
import EmailVerified from "./EmailVerified";

interface Props {
  searchParams: {
    mode: string;
    oobCode: string;
  };
}

const AcctMgmt = ({ searchParams: { mode, oobCode } }: Props) => {
  const renderComponent = () => {
    switch (mode) {
      case "verifyEmail":
        return <EmailVerified oobCode={oobCode} />;
      case "resetPassword":
        return <ResetPassword oobCode={oobCode} />;

      default:
        return <Stack></Stack>;
    }
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {" "}
      {renderComponent()}
    </Stack>
  );
};

export default AcctMgmt;
