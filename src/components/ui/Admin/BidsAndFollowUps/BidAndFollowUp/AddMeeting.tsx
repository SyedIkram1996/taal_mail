import { updateFollowUp } from "@/services/bidAndFollowUp.services";
import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import AddMeetingModal from "./AddMeetingModal";

interface Props {
  openMeetingModal: boolean;
  setOpenMeetingModal: (value: boolean) => void;
  token?: RequestCookie;
}

const AddMeeting = ({
  openMeetingModal,
  setOpenMeetingModal,
  token,
}: Props) => {
  const [openSetMeetingTime, setOpenSetMeetingTime] = useState(false);
  const { bidId }: { bidId: string } = useParams();
  const router = useRouter();

  const meetingMutation = useMutation({
    mutationFn: async (date: number) =>
      updateFollowUp(bidId, token, date, undefined),
    onSuccess: (data) => {
      router.refresh();
      setOpenSetMeetingTime(false);
    },
    onError: (error) => {},
  });

  return (
    <AddMeetingModal
      openMeetingModal={openMeetingModal}
      setOpenMeetingModal={setOpenMeetingModal}
      token={token}
      meetingMutation={meetingMutation}
      openSetMeetingTime={openSetMeetingTime}
      setOpenSetMeetingTime={setOpenSetMeetingTime}
    />
  );
};

export default AddMeeting;
