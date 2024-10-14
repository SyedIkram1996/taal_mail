import { Container, Stack } from "@mui/material";

export default function UnProtectedLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <Stack sx={{ alignItems: "center", mt: "6.5rem" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: "0 !important",
        }}
      >
        {props.children}
      </Container>
    </Stack>
  );
}
