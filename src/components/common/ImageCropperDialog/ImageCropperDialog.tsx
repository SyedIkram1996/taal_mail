import { revalidatePage } from "@/app/actions";
import { useUserContext } from "@/context/userContext";
import { uploadUserAvatar } from "@/services/user.services";
import { toastError } from "@/utils/toaster";
import { Dialog, DialogActions, DialogContent, Stack } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useRef, useState } from "react";
import {
  CircleStencil,
  Cropper,
  CropperRef,
  ImageRestriction,
} from "react-advanced-cropper";
import FilledButton from "../Button/FilledButton";

interface Props {
  setAvatar: (avatar: string) => void;
  openChangeImage: boolean;
  setOpenChangeImage: (openChangeImage: boolean) => void;
  tempAvatar: string;
  token?: RequestCookie;
}

const circleProps = {
  aspectRatio: { maximum: 1, minimum: 1 },
};

const ImageCropperDialog = ({
  setAvatar,
  openChangeImage,
  setOpenChangeImage,
  tempAvatar,
  token,
}: Props) => {
  const { setUser } = useUserContext();
  const cropperRef = useRef<CropperRef>(null);
  const [loading, setLoading] = useState(false);

  const onCrop = async () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      if (canvas) {
        const image = canvas.toDataURL();

        setLoading(true);
        const response = await uploadUserAvatar(image, token);

        //@ts-ignore
        if (response && response.data && response.data.user) {
          setAvatar(canvas.toDataURL());
          //@ts-ignore
          setUser(response.data.user);
        } else {
          toastError("Error in uploading image");
        }
        revalidatePage("myInfo");
        setOpenChangeImage(false);
        setLoading(false);
      }
    }
  };

  return (
    <Dialog
      open={openChangeImage}
      fullWidth
      PaperProps={{
        sx: {
          gap: "20px",
          margin: "0",
          borderRadius: "6px",
          backgroundColor: "white",
          backdropFilter: " blur(45px)",
          border: "1px solid var(--borders-20, rgba(255, 255, 255, 0.20))",
          padding: "20px",
          width: { xs: "95%", md: "initial" },
        },
      }}
    >
      <DialogContent sx={{ padding: { xs: "0", md: "0.5rem" } }}>
        <Cropper
          ref={cropperRef}
          crossOrigin="anonymous"
          style={{ height: "100%", width: "100%" }}
          {...circleProps}
          src={tempAvatar}
          checkOrientation={false}
          transformImage={{
            adjustStencil: false,
          }}
          // onChange={onChange}
          imageRestriction={ImageRestriction.stencil}
          stencilComponent={CircleStencil}
        />
      </DialogContent>

      <DialogActions sx={{ px: { md: "1.5rem" } }}>
        <Stack sx={{ width: "100%" }} spacing={1}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              alignSelf: "flex-end",
              gap: "10px",
              width: { xs: "100%", md: "initial" },
            }}
          >
            <FilledButton
              disabled={loading}
              secondary
              text="Cancel"
              onClick={() => setOpenChangeImage(false)}
              sx={{ color: "black", height: "36px" }}
            />

            <FilledButton
              disabled={loading}
              loading={loading}
              text="Upload"
              onClick={() => {
                onCrop();
              }}
              sx={{ height: "36px" }}
            />
          </Stack>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ImageCropperDialog;
