import TextXl from "@/components/common/Text/TextXl";
import { AddPropertyIcon } from "@/constants/images.routes";
import { Container, Stack } from "@mui/material";
import Image from "next/image";

interface Props {
  id?: string;
}

const AddPropertyBanner = ({ id }: Props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "var(--accent-color-1)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: "0 !important",
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "2rem 1rem", md: "6.25rem 10rem" },
            ".addPropertyIcon": {
              width: { xs: "100px", md: "401px" },
              height: "100%",
            },
            gap: { xs: "1rem", md: "0" },
          }}
        >
          <TextXl
            text={`${id ? "Edit" : "Add"} Property Info`}
            sx={{
              fontSize: { xs: "2rem", md: "2.8125rem" },
              color: "var(--text-white)",
            }}
          />
          <Image
            className="addPropertyIcon"
            src={AddPropertyIcon}
            alt="add property"
            width={401}
            height={400}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default AddPropertyBanner;
