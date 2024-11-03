import MUILink from "@/components/common/MUILink/MUILink";
import { BasemapImage, LogoIcon } from "@/constants/images.routes";
import { HOME } from "@/constants/page.routes";
import { Grid2 } from "@mui/material";
import Image from "next/image";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Grid2
      container
      sx={{ height: "100vh", width: "100vw", overflowX: "hidden" }}
    >
      <Grid2
        size={{ xs: 12, sm: 6 }}
        sx={{ backgroundColor: "var(--text-secondary)" }}
      >
        <LoginForm />
      </Grid2>

      <Grid2
        size={{ xs: 12, sm: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          position: "relative",
          ".mapImage": { objectFit: "cover" },
        }}
      >
        <MUILink
          href={HOME}
          sx={{
            zIndex: "1",
            position: "absolute",
            top: "1rem",
            alignSelf: "center",
            backgroundColor: "white",
            borderRadius: "0.3rem",
            pr: "1rem",
          }}
        >
          <Image src={LogoIcon} priority alt="Logo" width={200} height={60} />
        </MUILink>

        <Image className="mapImage" src={BasemapImage} alt="map" fill />
      </Grid2>
    </Grid2>
  );
};

export default Login;
