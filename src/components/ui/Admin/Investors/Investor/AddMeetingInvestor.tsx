import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { updateInvestmentFollowUp } from "@/services/investment.services";
import AddMeetingModal from "../../BidsAndFollowUps/BidAndFollowUp/AddMeetingModal";

interface Props {
  openMeetingModal: boolean;
  setOpenMeetingModal: (value: boolean) => void;
  token?: RequestCookie;
}

const AddMeetingInvestor = ({
  openMeetingModal,
  setOpenMeetingModal,
  token,
}: Props) => {
  const [openSetMeetingTime, setOpenSetMeetingTime] = useState(false);
  const { id }: { id: string } = useParams();
  const router = useRouter();

  const meetingMutation = useMutation({
    mutationFn: async (date: number) =>
      updateInvestmentFollowUp(id, token, date, undefined),
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

export default AddMeetingInvestor;
