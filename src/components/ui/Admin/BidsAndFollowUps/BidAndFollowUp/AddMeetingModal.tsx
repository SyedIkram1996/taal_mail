import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import TextMd from "@/components/common/Text/TextMd";
import { Dialog, Grid2, Stack } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useState } from "react";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface Props {
  openMeetingModal: boolean;
  setOpenMeetingModal: (value: boolean) => void;
  meetingMutation: any;
  openSetMeetingTime: boolean;
  setOpenSetMeetingTime: (value: boolean) => void;
  token?: RequestCookie;
}

const AddMeetingModal = ({
  openMeetingModal,
  setOpenMeetingModal,
  meetingMutation,
  openSetMeetingTime,
  setOpenSetMeetingTime,
  token,
}: Props) => {
  console.log(meetingMutation);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [openMeetingScheduled, setOpenMeetingScheduled] = useState(false);

  return (
    <>
      <Dialog
        open={openMeetingModal}
        fullWidth
        scroll="body"
        maxWidth="md"
        PaperProps={{
          sx: {
            width: { xs: "100%", md: "calc(100% - 64px)" },
            maxWidth: {
              xs: "100% !important",
              md: "900px !important",
            },
            margin: { xs: "0", md: "32px" },
          },
        }}
      >
        <Stack
          sx={{
            padding: { xs: "0.5rem", md: "3rem" },
            alignItems: "center",
          }}
        >
          <DialogHeader
            title="Schedule Meeting"
            setOpen={setOpenMeetingModal}
            sxIcon={{ top: { xs: "0", md: "3rem" } }}
            sxTitle={{ fontWeight: "400" }}
          />
          <Grid2
            container
            spacing={3}
            sx={{
              my: { xs: "2rem", md: "3.75rem" },
              width: "100%",
              alignItems: "center",
            }}
          >
            <Grid2
              size={{ xs: 12, md: 7 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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

            <Grid2 size={{ xs: 12, md: 5 }}>
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
            onClick={() => {
              setOpenSetMeetingTime(true);
              setOpenMeetingModal(false);
            }}
            text="Schedule Meeting"
            sx={{ padding: "0", width: "14.5rem", height: "3.4375rem" }}
          />
        </Stack>
      </Dialog>

      <Dialog
        open={openSetMeetingTime}
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
            text={"Set meeting time:"}
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
            }}
          />

          <TextMd
            text={dayjs(selectedDate).format("DD/MM/YYYY")}
            sx={{
              fontSize: "1.125rem",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          />

          <Stack direction={"row"} sx={{ gap: "1.44rem" }}>
            <FilledButton
              loading={meetingMutation.isPending}
              disabled={meetingMutation.isPending}
              onClick={() => meetingMutation.mutate(selectedDate.valueOf())}
              text="Yes"
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
              disabled={meetingMutation.isPending}
              text="No"
              onClick={() => {
                setOpenSetMeetingTime(false);
                setOpenMeetingModal(true);
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

      <Dialog
        open={openMeetingScheduled}
        PaperProps={{
          sx: {
            width: "15.625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem",
            pb: "1.19rem",
            alignItems: "center",
          }}
        >
          <TextMd
            text={"Meeting Scheduled!"}
            sx={{
              width: "11.875rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />

          <FilledButton
            text="Ok"
            onClick={() => {
              setOpenMeetingScheduled(false);
            }}
            sx={{
              width: "4.125rem",
              height: "2rem",
              fontSize: "1rem",
              fontWeight: "400",
              borderRadius: "0.9375rem",
              padding: "0.31rem 1.44rem",
              mt: "1.86rem",
            }}
          />
        </Stack>
      </Dialog>
    </>
  );
};

export default AddMeetingModal;
