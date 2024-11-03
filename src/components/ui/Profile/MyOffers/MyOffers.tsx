import TextXl from "@/components/common/Text/TextXl";
import { Grid2 } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import MyOffer from "./MyOffer";

interface Props {
  data: any;
  token?: RequestCookie;
}

const MyOffers = ({ data, token }: Props) => {
  return (
    <Grid2
      maxWidth={"lg"}
      container
      spacing={4}
      rowSpacing={12}
      sx={{ padding: "2rem", py: "6.25rem", width: "100%" }}
    >
      {data.length ? (
        data.map((val: any, index: number) => (
          <Grid2
            size={{ xs: 12, sm: 6, lg: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <MyOffer val={val} />
          </Grid2>
        ))
      ) : (
        <TextXl text="No Offers Added" />
      )}
    </Grid2>
  );
};

export default MyOffers;
