import { Stack } from "@mui/material";
import TextLg from "../Text/TextLg";
import TextSm from "../Text/TextSm";

interface Props {
  title: string;
  desc?: string;
  error?: string;
}

const FieldTitleDesc = ({ title, desc, error }: Props) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ alignItems: "center", gap: "0.62rem" }}
    >
      <TextLg
        text={title}
        sx={{ fontWeight: "400", color: "var(--text-black)" }}
      />
      {desc && (
        <TextSm
          text={desc}
          sx={{ fontWeight: "400", color: "var(--spanish-gray)" }}
        />
      )}

      {error && <TextSm text={`(${error})`} sx={{ color: "var(--error)" }} />}
    </Stack>
  );
};

export default FieldTitleDesc;
