import { auth } from "@/../firebase";
import FilledButton from "@/components/common/Button/FilledButton";
import IconText from "@/components/common/IconText";
import MUILink from "@/components/common/MUILink/MUILink";
import {
  CrossRed,
  LoadingDarkIcon,
  TickCheckboxGreen,
} from "@/constants/images.routes";
import { LOGIN } from "@/constants/page.routes";
import { Stack } from "@mui/material";
import { memo, useEffect, useState } from "react";

interface Props {
  oobCode: string;
}

const EmailVerified = ({ oobCode }: Props) => {
  const [loading, setLoading] = useState(true);
  const [isInvalidCode, setIsInvalidCode] = useState("");

  useEffect(() => {
    if (loading) {
      const applyingActionCode = async () => {
        try {
          await auth.applyActionCode(oobCode);
        } catch (error: any) {
          if (error.code === "auth/invalid-action-code") {
            setIsInvalidCode("Invalid code / Code Expired");
          }
        }

        setLoading(false);
      };

      applyingActionCode();
    }
  }, []);

  return (
    <Stack
      sx={{
        gap: "2rem",
        alignItems: "center",
        boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
        padding: "2rem",
        borderRadius: "0.5rem",
      }}
    >
      <IconText
        iconClassName={loading ? "rotating" : ""}
        text={
          loading
            ? "Verifying Email"
            : isInvalidCode
              ? isInvalidCode
              : "Email Verification Successful!"
        }
        icon={
          loading
            ? LoadingDarkIcon
            : isInvalidCode
              ? CrossRed
              : TickCheckboxGreen
        }
        iconWidth={50}
        iconHeight={50}
        sxRow={{ gap: "1rem" }}
        sxText={{ fontSize: "2rem" }}
      />
      {!loading && (
        <MUILink href={LOGIN}>
          <FilledButton text="Continue" />
        </MUILink>
      )}
    </Stack>
  );
};

export default memo(EmailVerified);
