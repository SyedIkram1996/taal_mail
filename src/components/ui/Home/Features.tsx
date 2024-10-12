import { homeCards } from "@/constants/home";
import { Line } from "@/constants/images.routes";
import { Stack } from "@mui/material";
import Image from "next/image";
import HomeCard from "./HomeCard";

const Features = () => {
  return (
    <Stack sx={{ pt: "6.94rem", gap: "12.46rem" }}>
      {homeCards.map(({ title, desc, image }, index) => (
        <Stack
          key={title}
          sx={{
            position: "relative",
            ".lineImage": {
              position: "absolute",
              bottom: "-20rem",
              right: index % 2 == 0 ? "15rem" : "auto",
              left: index % 2 == 1 ? "15rem" : "auto",
              transform: index % 2 == 0 ? "initial" : "rotate(90deg)",
            },
          }}
        >
          <HomeCard
            title={title}
            desc={desc}
            image={image}
            index={index}
            sxRow={{
              flexDirection: index % 2 == 0 ? "row" : "row-reverse",
              zIndex: 1,
            }}
          />

          {index !== homeCards.length - 1 && (
            <Image
              className="lineImage"
              src={Line}
              alt="Line"
              width={400}
              height={400}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default Features;
