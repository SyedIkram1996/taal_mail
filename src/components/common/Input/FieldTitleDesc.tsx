import { Stack } from "@mui/material";
import TextLg from "../Text/TextLg";
import TextSm from "../Text/TextSm";

interface Props {
  title: string;
  desc: string;
}

const FieldTitleDesc = ({ title, desc }: Props) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ alignItems: "center", gap: "0.62rem" }}
    >
      <TextLg
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      <TextSm
        text={desc}
        sx={{ fontWeight: "400", color: "var(--spanish-gray)" }}
      />
    </Stack>
  );
};

export default FieldTitleDesc;
