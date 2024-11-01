import { Stack } from "@mui/material";
import TextMd from "../Text/TextMd";
import TextSm from "../Text/TextSm";

interface Props {
  title: string;
  error?: string;
}

const FieldTitle = ({ title, error }: Props) => {
  return (
    <Stack direction={"row"} sx={{ alignItems: "center", gap: "0.62rem" }}>
      <TextMd
        text={title}
        sx={{ fontWeight: "700", color: "var(--text-black)" }}
      />
      {error && <TextSm text={`(${error})`} sx={{ color: "var(--error)" }} />}
    </Stack>
  );
};

export default FieldTitle;
