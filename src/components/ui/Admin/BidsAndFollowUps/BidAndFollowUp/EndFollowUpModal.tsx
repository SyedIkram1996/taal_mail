import FilledButton from "@/components/common/Button/FilledButton";
import TextMd from "@/components/common/Text/TextMd";
import { Dialog, Stack } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

interface Props {
  openEndFollowUpModal: boolean;
  setOpenEndFollowUpModal: (value: boolean) => void;
  token?: RequestCookie;
}

const EndFollowUpModal = ({
  openEndFollowUpModal,
  setOpenEndFollowUpModal,
  token,
}: Props) => {
  return (
    <Dialog
      open={openEndFollowUpModal}
      PaperProps={{
        sx: {
          width: "12.625rem",
          textAlign: "center",
          borderRadius: "1.875rem",
        },
      }}
    >
      <Stack
        sx={{
          padding: "2rem 1.19rem 1.5rem 1.19rem",
          alignItems: "center",
          gap: "2.06rem",
        }}
      >
        <TextMd
          text={"Are you sure you want to end this follow up?"}
          sx={{
            fontSize: "1.125rem",
            fontWeight: "400",
            color: "var(--text-black)",
            lineHeight: "normal",
          }}
        />

        <Stack direction={"row"} sx={{ gap: "1.44rem" }}>
          <FilledButton
            //   loading={mutation.isPending}
            //   disabled={mutation.isPending}
            text="Yes"
            //   onClick={() => {
            //     mutation.mutate();
            //   }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
            }}
          />
          <FilledButton
            //   disabled={mutation.isPending}
            text="No"
            onClick={() => {
              setOpenEndFollowUpModal(false);
            }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
            }}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default EndFollowUpModal;
