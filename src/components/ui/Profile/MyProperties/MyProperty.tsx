import FilledButton from "@/components/common/Button/FilledButton";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import TextMd from "@/components/common/Text/TextMd";
import { PencilBlueIcon, TrashRedIcon } from "@/constants/images.routes";
import { SELL_PLOT } from "@/constants/page.routes";
import { IProperty } from "@/interfaces/IProperty";
import { deleteProperty } from "@/services/property.services";
import { Dialog, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  val: IProperty;
  token?: RequestCookie;
}

const MyProperty = ({ val, token }: Props) => {
  const [openPropertyDelete, setOpenPropertyDelete] = useState(false);
  const router = useRouter();

  const deletePropertyMutation = useMutation({
    mutationFn: async () => {
      return deleteProperty(val.id, token);
    },
    onSuccess: (data) => {
      router.refresh();
      setOpenPropertyDelete(false);
    },
    onError: (error) => {},
  });

  return (
    <Stack
      sx={{
        alignItems: "center",
        width: { xs: "100%", md: "initial" },
        position: "relative",
      }}
    >
      <PropertyCard
        id={val.id}
        name={val.description}
        bedRooms={val.bedrooms}
        bathRooms={val.bathrooms}
        area={val.area}
        type={val.type}
        location={val.location}
        sx={{ pb: "5rem" }}
      />

      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          mb: "1.12rem",
          gap: "2.5rem",
          position: "absolute",
          bottom: "0",
        }}
      >
        <Stack
          href={`${SELL_PLOT}/${val.id}`}
          component={Link}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.9375rem",
            border: "1px solid var(--spanish-gray)",
            backgroundColor: "white",
            boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
            padding: "0.75rem",
            width: "fit-content",
          }}
        >
          <Image src={PencilBlueIcon} alt="pencilIcon" width={30} height={30} />
        </Stack>

        <Stack
          onClick={() => setOpenPropertyDelete(true)}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.9375rem",
            border: "1px solid var(--spanish-gray)",
            backgroundColor: "white",
            boxShadow: "2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
            padding: "0.75rem",
            width: "fit-content",
            cursor: "pointer",
          }}
        >
          <Image src={TrashRedIcon} alt="pencilIcon" width={30} height={30} />
        </Stack>
      </Stack>

      <Dialog
        open={openPropertyDelete}
        PaperProps={{
          sx: {
            width: "14.0625rem",
            textAlign: "center",
            borderRadius: "1.875rem",
          },
        }}
      >
        <Stack
          sx={{
            padding: "1.88rem 0.81rem 1.87rem 0.81rem",
            alignItems: "center",
            gap: "1.87rem",
          }}
        >
          <TextMd
            text={"Are you sure you want to delete this property?"}
            sx={{
              width: "12rem",
              fontSize: "1.125rem",
              fontWeight: "400",
              color: "var(--text-black)",
              lineHeight: "normal",
              textAlign: "center",
            }}
          />

          <Stack direction={"row"} sx={{ gap: "1rem", alignItems: "center" }}>
            <FilledButton
              loading={deletePropertyMutation.isPending}
              disabled={deletePropertyMutation.isPending}
              text="Yes"
              onClick={() => {
                deletePropertyMutation.mutate();
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

            <FilledButton
              disabled={deletePropertyMutation.isPending}
              text="No"
              onClick={() => {
                setOpenPropertyDelete(false);
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
    </Stack>
  );
};

export default MyProperty;
