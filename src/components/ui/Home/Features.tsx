import { homeCards } from "@/constants/home";

import LineIcon from "@/components/common/SvgIcons/LineIcon";
import { Stack } from "@mui/material";
import HomeCard from "./HomeCard";

const Features = () => {
  return (
    <Stack sx={{ pt: "6.94rem", gap: "12.46rem" }}>
      {homeCards.map(({ title, desc, image }, index) => (
        <Stack
          key={title}
          sx={{
            position: "relative",
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
            <LineIcon
              sx={{
                width: "400px",
                height: "400px",
                position: "absolute",
                bottom: "-20rem",
                right: index % 2 == 0 ? { xs: "-18%", md: "15rem" } : "auto",
                left: index % 2 == 1 ? { xs: "-15%", md: "15rem" } : "auto",
                transform:
                  index % 2 == 0
                    ? { xs: "rotate(-46deg)", md: "initial" }
                    : { xs: "rotate(-46deg)", md: "rotate(90deg)" },
              }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default Features;
