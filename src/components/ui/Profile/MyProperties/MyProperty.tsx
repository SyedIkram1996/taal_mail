import MUILink from "@/components/common/MUILink/MUILink";
import PropertyCard from "@/components/common/PropertyCard/PropertyCard";
import { PencilBlueIcon, TrashRedIcon } from "@/constants/images.routes";
import { PROPERTY, SELL_PLOT } from "@/constants/page.routes";
import { IBuyRentProperty } from "@/interfaces/IBuyRent";
import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  val: IBuyRentProperty;
}

const MyProperty = ({ val }: Props) => {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <MUILink href={`${PROPERTY}/${val.id}`}>
        <PropertyCard
          id={val.id}
          title={val.title}
          bedRooms={val.bedRooms}
          bathRooms={val.bathRooms}
          area={val.area}
          type={val.type}
          location={val.location}
        >
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              mb: "1.12rem",
              gap: "2.5rem",
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
              <Image
                src={PencilBlueIcon}
                alt="pencilIcon"
                width={30}
                height={30}
              />
            </Stack>

            <Stack
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
              <Image
                src={TrashRedIcon}
                alt="pencilIcon"
                width={30}
                height={30}
              />
            </Stack>
          </Stack>
        </PropertyCard>
      </MUILink>
    </Stack>
  );
};

export default MyProperty;
