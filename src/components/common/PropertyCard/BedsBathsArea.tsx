import { Grid2 } from "@mui/material";
import SvgIconText from "../SvgIconText";
import AreaIcon from "../SvgIcons/AreaIcon";
import BathroomIcon from "../SvgIcons/BathroomIcon";
import BedroomIcon from "../SvgIcons/BedroomIcon";

interface Props {
  bathrooms: string;
  bedrooms: string;
  area: string;
}

const BedsBathsArea = ({ bathrooms, bedrooms, area }: Props) => {
  return (
    <Grid2 container>
      <Grid2 size={3.5}>
        <SvgIconText
          noWrap
          icon={<BedroomIcon sx={{ width: "20px", height: "20px" }} />}
          text={bedrooms}
        />
      </Grid2>
      <Grid2 size={3.5}>
        <SvgIconText
          noWrap
          icon={<BathroomIcon sx={{ width: "20px", height: "20px" }} />}
          text={bathrooms}
          sxRow={{ justifyContent: "center" }}
        />
      </Grid2>
      <Grid2 size={5}>
        <SvgIconText
          noWrap
          icon={<AreaIcon sx={{ width: "20px", height: "20px" }} />}
          text={area}
          sxRow={{ justifyContent: "flex-end" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default BedsBathsArea;
