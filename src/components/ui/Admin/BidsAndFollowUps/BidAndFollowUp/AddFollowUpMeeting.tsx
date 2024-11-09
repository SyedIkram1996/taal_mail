import FilledButton from "@/components/common/Button/FilledButton";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import MeetingIcon from "@/components/common/SvgIcons/MeetingIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import { Grid2 } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useState } from "react";
import AddFollowUpModal from "./AddFollowUpModal";
import AddMeetingModal from "./AddMeetingModal";
import EndFollowUpModal from "./EndFollowUpModal";

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
  const [openMeetingModal, setOpenMeetingModal] = useState(false);
  const [openAddFollowUpModal, setOpenAddFollowUpModal] = useState(false);
  const [openEndFollowUpModal, setOpenEndFollowUpModal] = useState(false);

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <FilledButton
            onClick={() => setOpenAddFollowUpModal(true)}
            disabled={!followUps[followUps.length - 1].meeting}
            text="Add Follow Up"
            startIcon={<PlusIcon sx={{ width: "30px", height: "30px" }} />}
            sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
          />
        </Grid2>
        <Grid2 size={4}>
          <FilledButton
            onClick={() => setOpenMeetingModal(true)}
            text="Setup Meeting"
            startIcon={<MeetingIcon sx={{ width: "40px", height: "40px" }} />}
            sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
          />
        </Grid2>
        <Grid2 size={4}>
          <FilledButton
            onClick={() => setOpenEndFollowUpModal(true)}
            text="End Follow up"
            startIcon={<CrossIcon sx={{ width: "40px", height: "40px" }} />}
            sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
          />
        </Grid2>
      </Grid2>

      <AddMeetingModal
        openMeetingModal={openMeetingModal}
        setOpenMeetingModal={setOpenMeetingModal}
        token={token}
      />

      <AddFollowUpModal
        token={token}
        setOpenAddFollowUpModal={setOpenAddFollowUpModal}
        openAddFollowUpModal={openAddFollowUpModal}
        followUps={followUps}
      />

      {openEndFollowUpModal && (
        <EndFollowUpModal
          openEndFollowUpModal={openEndFollowUpModal}
          setOpenEndFollowUpModal={setOpenEndFollowUpModal}
          token={token}
        />
      )}
    </>
  );
};

export default AddFollowUpMeeting;
