import FilledButton from "@/components/common/Button/FilledButton";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import MeetingIcon from "@/components/common/SvgIcons/MeetingIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import { Grid2 } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useState } from "react";
import AddFollowUpModalInvestor from "./AddFollowUpModalInvestor";
import AddMeetingInvestor from "./AddMeetingInvestor";

interface Props {
  token?: RequestCookie;
  followUps: {
    title: string;
    meeting: Date;
  }[];
}

const AddFollowUpMeetingInvestor = ({ followUps, token }: Props) => {
  const [openMeetingModal, setOpenMeetingModal] = useState(false);
  const [openAddFollowUpModal, setOpenAddFollowUpModal] = useState(false);
  const [openEndFollowUpModal, setOpenEndFollowUpModal] = useState(false);

  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <FilledButton
            onClick={() => setOpenAddFollowUpModal(true)}
            disabled={!followUps[followUps.length - 1].meeting}
            text="Add Follow Up"
            startIcon={<PlusIcon sx={{ width: "30px", height: "30px" }} />}
            sx={{
              height: "3.4375rem",
              padding: "0.25rem 1rem",
              width: { xs: "100%", md: "fit-content" },
            }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <FilledButton
            onClick={() => setOpenMeetingModal(true)}
            text="Setup Meeting"
            startIcon={<MeetingIcon sx={{ width: "40px", height: "40px" }} />}
            sx={{
              height: "3.4375rem",
              padding: "0.25rem 1rem",
              width: { xs: "100%", md: "fit-content" },
            }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          <FilledButton
            onClick={() => setOpenEndFollowUpModal(true)}
            text="End Follow up"
            startIcon={<CrossIcon sx={{ width: "40px", height: "40px" }} />}
            sx={{
              height: "3.4375rem",
              padding: "0.25rem 1rem",
              width: { xs: "100%", md: "fit-content" },
            }}
          />
        </Grid2>
      </Grid2>

      <AddMeetingInvestor
        openMeetingModal={openMeetingModal}
        setOpenMeetingModal={setOpenMeetingModal}
        token={token}
      />

      <AddFollowUpModalInvestor
        token={token}
        setOpenAddFollowUpModal={setOpenAddFollowUpModal}
        openAddFollowUpModal={openAddFollowUpModal}
        followUps={followUps}
      />

      {/* {openEndFollowUpModal && (
        <EndFollowUpModal
          openEndFollowUpModal={openEndFollowUpModal}
          setOpenEndFollowUpModal={setOpenEndFollowUpModal}
          token={token}
        />
      )}  */}
    </>
  );
};

export default AddFollowUpMeetingInvestor;
