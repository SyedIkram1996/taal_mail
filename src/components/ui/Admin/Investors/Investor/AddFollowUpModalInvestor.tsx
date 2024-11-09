import FilledButton from "@/components/common/Button/FilledButton";
import DialogHeader from "@/components/common/Dialog/DialogHeader";
import FieldTitle from "@/components/common/Input/FieldTitle";
import LabelTopTextField from "@/components/common/Input/LabelTopTextField";
import TextMd from "@/components/common/Text/TextMd";
import { updateInvestmentFollowUp } from "@/services/investment.services";
import { investFollowUpSchema } from "@/validators/investment";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Props {
  openAddFollowUpModal: boolean;
  setOpenAddFollowUpModal: (value: boolean) => void;
  token?: RequestCookie;
  followUps: {
    title: string;
    meeting: Date;
  }[];
}

const AddFollowUpModalInvestor = ({
  openAddFollowUpModal,
  setOpenAddFollowUpModal,
  followUps,
  token,
}: Props) => {
  const router = useRouter();
  const { id }: { id: string } = useParams();
  const [openFollowUpAdded, setOpenFollowUpAdded] = useState(false);
  const formik = useFormik<{
    title: string;
  }>({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      addFollowUpMutation.mutate();
    },
    validationSchema: toFormikValidationSchema(investFollowUpSchema),
    enableReinitialize: true,
  });

  const formikErrors = formik.errors;
  const formikValues = formik.values;

  const addFollowUpMutation = useMutation({
    mutationFn: async () =>
      updateInvestmentFollowUp(id, token, undefined, formikValues),
    onSuccess: (data) => {
      router.refresh();
      setOpenAddFollowUpModal(false);
      setOpenFollowUpAdded(true);
    },
    onError: (error) => {},
  });

  return (
    <>
      <Dialog
        scroll="body"
        open={openAddFollowUpModal}
        PaperProps={{
          sx: {
            width: "50.6875rem",
          },
        }}
      >
        <Stack
          component={"form"}
          onSubmit={formik.handleSubmit}
          sx={{
            padding: { xs: "1rem", md: "2.81rem 3.12rem 2.34rem 3.12rem" },
            gap: "1.87rem",
            position: "relative",
          }}
        >
          <DialogHeader
            title="Add Follow Up"
            setOpen={setOpenAddFollowUpModal}
            sxIcon={{ top: "3rem" }}
            sxTitle={{ fontWeight: "400" }}
          />

          <Stack sx={{ gap: "1.5rem" }}>
            <FieldTitle
              title="Title:"
              error={
                formikErrors.title && formik.touched.title
                  ? formikErrors.title
                  : ""
              }
              sxTitle={{ fontWeight: "400" }}
            />
            <LabelTopTextField
              value={formikValues.title}
              onChange={(e) => formik.setFieldValue("title", e.target.value)}
              sx={{
                ".MuiInputBase-root": {
                  input: {
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                  },
                },
              }}
            />
          </Stack>

          <FilledButton
            loading={addFollowUpMutation.isPending}
            disabled={addFollowUpMutation.isPending}
            type="submit"
            text="Bid"
            sx={{
              width: "12.1875rem",
              height: "3.4375rem",
              fontSize: "1.25rem",
              fontWeight: "600",
              padding: "0.31rem 1.44rem",
              alignSelf: "center",
            }}
          />
        </Stack>
      </Dialog>

      <Dialog
        open={openFollowUpAdded}
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
            padding: "1.88rem",
            pb: "1.19rem",
            alignItems: "center",
          }}
        >
          <TextMd
            text={"Follow Up Added!"}
            sx={{
              width: "9rem",
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
              setOpenFollowUpAdded(false);
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

export default AddFollowUpModalInvestor;
