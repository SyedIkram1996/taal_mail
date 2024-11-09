import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import CrossIcon from "@/components/common/SvgIcons/CrossIcon";
import MeetingIcon from "@/components/common/SvgIcons/MeetingIcon";
import PlusIcon from "@/components/common/SvgIcons/PlusIcon";
import TextMd from "@/components/common/Text/TextMd";
import { updateFollowUp } from "@/services/bidAndFollowUp.services";
import { toastSuccess } from "@/utils/toaster";
import { Dialog, Grid2, Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const AddFollowUpMeeting = ({ followUps, bidId, token }: Props) => {
  const [openMeetingModal, setOpenMeetingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const router = useRouter();
  const meetingMutation = useMutation({
    mutationFn: async () =>
      updateFollowUp(selectedDate.valueOf(), bidId, token),
    onSuccess: (data) => {
      toastSuccess("Meeting Added");
      router.refresh();
      setOpenMeetingModal(false);
    },
    onError: (error) => {},
  });

  return (
    <>
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
            onClick={() => setOpenMeetingModal(true)}
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

      <Dialog open={openMeetingModal} fullWidth scroll="body" maxWidth="md">
        <Stack
          sx={{
            padding: "3rem",
            alignItems: "center",
          }}
        >
          <DialogHeader
            title="Schedule Meeting"
            setOpen={setOpenMeetingModal}
            sxIcon={{ top: "3rem" }}
            sxTitle={{ fontWeight: "400" }}
          />
          <Grid2
            container
            spacing={3}
            sx={{
              my: "3.75rem",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Grid2 size={7} sx={{ display: "flex", alignItems: "center" }}>
              <Stack
                sx={{
                  boxShadow: "8px 3px 22px 10px rgba(150, 150, 150, 0.11)",
                  borderRadius: "1rem",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    dayOfWeekFormatter={(date) => days[dayjs(date).day()]}
                    disableHighlightToday
                    disablePast
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    sx={{
                      ".MuiPickersCalendarHeader-root": {},
                      ".MuiDayCalendar-header ": {
                        borderTop: "1px solid #E4E5E7",
                      },
                      ".MuiDayCalendar-weekDayLabel": {
                        fontWeight: "700",
                        fontStyle: "italic",
                        color: "var(--old-silver)",
                        fontSize: "0.625rem",
                      },

                      ".MuiDayCalendar-weekContainer": {
                        button: {
                          fontSize: "0.875rem",
                          fontWeight: "600",
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid2>
            <Grid2 size={5}>
              <TextMd
                text="Date:"
                sx={{
                  fontSize: "1.125rem",
                  color: "var(--text-black)",
                  fontWeight: "400",
                }}
              />
              <TextMd
                text={dayjs(selectedDate).format("DD/MM/YYYY")}
                sx={{
                  fontSize: "1.125rem",
                  border: "1px solid var(--platinum)",
                  borderRadius: "0.625rem",
                  padding: "0.87rem",
                  fontWeight: "400",
                }}
              />
            </Grid2>
          </Grid2>
          <FilledButton
            loading={meetingMutation.isPending}
            disabled={meetingMutation.isPending}
            onClick={() => meetingMutation.mutate()}
            text="Schedule Meeting"
            sx={{ padding: "0", width: "14.5rem", height: "3.4375rem" }}
          />
        </Stack>
      </Dialog>
    </>
  );
};

export default AddFollowUpMeeting;
