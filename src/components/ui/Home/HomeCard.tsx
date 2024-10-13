import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { Stack, SxProps } from "@mui/material";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  desc: string;
  index: number;
  sxRow?: SxProps;
}

const HomeCard = ({ image, title, desc, index, sxRow }: Props) => {
  return (
    <Stack
      direction={"row"}
      sx={{ gap: "15.69rem", alignItems: "center", ...sxRow }}
    >
      <Image src={image} alt="Home card" width={350} height={350} />
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "18.75rem",
          height: "18.75rem",
          backgroundColor:
            index % 2 == 0 ? "var(--myrtle-green)" : "var(--accent-color-1)",
          textAlign: "center",
          borderRadius: "50%",
          ">p": { color: "white" },
        }}
      >
        <TextLg text={title} />
        <TextMd text={desc} sx={{ width: "16rem" }} />
      </Stack>
    </Stack>
  );
};

export default HomeCard;
