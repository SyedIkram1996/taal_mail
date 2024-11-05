import { auth } from "@/../firebase";
import FilledButton from "@/components/common/Button/FilledButton";
import MUILink from "@/components/common/MUILink/MUILink";
import CrossFilled from "@/components/common/SvgIcons/CrossFilled";
import LoadingIcon from "@/components/common/SvgIcons/LoadingIcon";
import TickCheckboxFilled from "@/components/common/SvgIcons/TickCheckboxFilled";
import SvgIconText from "@/components/common/SvgIconText";
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
      <SvgIconText
        text={
          loading
            ? "Verifying Email"
            : isInvalidCode
              ? isInvalidCode
              : "Email Verification Successful!"
        }
        icon={
          loading ? (
            <LoadingIcon
              sx={{
                path: { fill: "#344054" },
                width: "50px",
                height: "50px",
              }}
            />
          ) : isInvalidCode ? (
            <CrossFilled sx={{ width: "50px", height: "50px" }} />
          ) : (
            <TickCheckboxFilled sx={{ width: "50px", height: "50px" }} />
          )
        }
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
