import { Grid2, Stack } from "@mui/material";
import PropertySkeleton from "./PropertySkeleton";

const PropertiesSkeleton = () => {
  return (
    <Stack sx={{ alignItems: "center", width: "100%" }}>
      <Grid2
        maxWidth={"lg"}
        container
        spacing={4}
        rowSpacing={12}
        sx={{ padding: "2rem", py: "6.25rem", width: "100%" }}
      >
        {Array.from({ length: 3 }).map((val, idx) => (
          <Grid2
            key={idx}
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PropertySkeleton />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default PropertiesSkeleton;
