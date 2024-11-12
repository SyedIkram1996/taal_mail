import { CircularProgress, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      maxWidth={"900px"}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "31.625rem",
      }}
    >
      <CircularProgress />
    </Stack>
  );
}
