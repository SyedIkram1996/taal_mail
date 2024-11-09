import FilledButton from "@/components/common/Button/FilledButton";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import MeetingIcon from "@/components/common/SvgIcons/MeetingIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import { Grid2 } from "@mui/material";

const AddFollowUpMeeting = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <FilledButton
          text="Add Follow Up"
          startIcon={<PlusIcon sx={{ width: "30px", height: "30px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
      <Grid2 size={4}>
        <FilledButton
          text="Setup Meeting"
          startIcon={<MeetingIcon sx={{ width: "40px", height: "40px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
      <Grid2 size={4}>
        <FilledButton
          text="End Follow up"
          startIcon={<CrossIcon sx={{ width: "40px", height: "40px" }} />}
          sx={{ height: "3.4375rem", padding: "0.25rem 1rem" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default AddFollowUpMeeting;
