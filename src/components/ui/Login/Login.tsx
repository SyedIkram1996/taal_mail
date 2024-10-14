import { BasemapImage } from "@/constants/images.routes";
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
        sx={{ position: "relative", ".mapImage": { objectFit: "cover" } }}
      >
        <Image className="mapImage" src={BasemapImage} alt="map" fill />
      </Grid2>
    </Grid2>
  );
};

export default Login;
