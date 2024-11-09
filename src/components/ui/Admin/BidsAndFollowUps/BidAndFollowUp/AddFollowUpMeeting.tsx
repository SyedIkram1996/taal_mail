import FilledButton from "@/components/common/Button/FilledButton";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import MeetingIcon from "@/components/common/SvgIcons/MeetingIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import { updateFollowUp } from "@/services/bidAndFollowUp.services";
import { toastSuccess } from "@/utils/toaster";
import { Grid2 } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";

interface Props {
  bidId: string;
  token?: RequestCookie;
  followUps: {
    title: string;
    sellerOffer: string;
    bidderBid: string;
    meeting: Date;
  }[];
}

const AddFollowUpMeeting = ({ followUps, bidId, token }: Props) => {
  const router = useRouter();
  const meetingMutation = useMutation({
    mutationFn: async () => updateFollowUp(bidId, token),
    onSuccess: (data) => {
      toastSuccess("Meeting Added");
      router.refresh();
    },
    onError: (error) => {},
  });

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <FilledButton
          disabled={
            !followUps[followUps.length - 1].meeting ||
            meetingMutation.isPending
          }
          text="Add Follow Up"
          startIcon={<PlusIcon sx={{ width: "30px", height: "30px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
      <Grid2 size={4}>
        <FilledButton
          loading={meetingMutation.isPending}
          disabled={meetingMutation.isPending}
          onClick={() => meetingMutation.mutate()}
          text="Setup Meeting"
          startIcon={<MeetingIcon sx={{ width: "40px", height: "40px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
      <Grid2 size={4}>
        <FilledButton
          disabled={meetingMutation.isPending}
          text="End Follow up"
          startIcon={<CrossIcon sx={{ width: "40px", height: "40px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default AddFollowUpMeeting;
