import TextLg from "@/components/common/Text/TextLg";
import PropertiesImages from "@/components/ui/Property/PropertyDetails/PropertiesImages";
import PropertyFeatures from "@/components/ui/Property/PropertyDetails/PropertyFeatures";
import PropertyHeaderAndIcons from "@/components/ui/Property/PropertyDetails/PropertyHeaderAndIcons";
import { IProperty } from "@/interfaces/IProperty";
import { formatAmountToPKR } from "@/utils/maths";
import { Grid2, Stack } from "@mui/material";

interface Props {
  property: IProperty;
}

const PropertyDetails = ({ property }: Props) => {
  const {
    name,
    bedrooms,
    bathrooms,
    area,
    type,
    duesCleared,
    status,
    location,
    features,
    allotmentLetter,
    price,
    images,
  } = property;
  return (
    <>
      <PropertiesImages images={images} />
      <Stack
        maxWidth={"xl"}
        sx={{
          mt: { md: "2.38rem" },
          px: { xs: "1rem", md: "3.5rem" },
          pb: "5rem",
        }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <PropertyHeaderAndIcons
              name={name}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              area={area}
              type={type}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 3 }}>
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
