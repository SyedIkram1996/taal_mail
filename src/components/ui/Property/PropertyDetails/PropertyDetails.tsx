import TextLg from "@/components/common/Text/TextLg";

import { IProperty } from "@/interfaces/IProperty";
import { formatAmountToPKR } from "@/utils/maths";
import { Grid2, Stack } from "@mui/material";
import { cookies } from "next/headers";
import BidButton from "./BidButton";
import PropertiesImages from "./PropertiesImages";
import PropertyFeatures from "./PropertyFeatures";
import PropertyHeaderAndIcons from "./PropertyHeaderAndIcons";

interface Props {
  property: IProperty;
}

const PropertyDetails = ({ property }: Props) => {
  const {
    id,
    purpose,
    classification,
    type,
    duesCleared,
    status,
    city,
    location,
    area,
    price,
    bedrooms,
    bathrooms,
    features,
    name,
    description,
    images,
    allotmentLetter,
  } = property;

  const userSession = cookies().get("token");

  return (
    <>
      <PropertiesImages images={images} />
      <Stack
        sx={{ padding: { xs: "1rem", md: "2rem" }, paddingBottom: "4.69rem" }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <PropertyHeaderAndIcons
              name={name}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              area={area}
              type={type}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 2 }}>
            <Stack
              sx={{
                gap: { xs: "1rem", sm: "2.13rem" },
                alignItems: { xs: "flex-start", sm: "center" },
              }}
            >
              <TextLg
                text={`${price.currency} ${formatAmountToPKR(Number(price.askingPrice))}`}
                sx={{
                  pt: { xs: "3rem", sm: "1.5rem" },
                  fontSize: "1.875rem",
                  color: "var(--text-black)",
                }}
              />
              <BidButton userSession={userSession} />
            </Stack>
          </Grid2>
        </Grid2>

        <PropertyFeatures
          duesCleared={duesCleared}
          status={status}
          location={location}
          features={features}
          allotmentLetter={allotmentLetter}
        />
      </Stack>
    </>
  );
};

export default PropertyDetails;
