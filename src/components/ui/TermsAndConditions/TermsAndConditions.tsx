import TextLg from "@/components/common/Text/TextLg";
import TextMd from "@/components/common/Text/TextMd";
import { Stack } from "@mui/material";

const TermsAndConditions = () => {
  const conditions = [
    "For sake of transparency, and genuineness of transaction, Seller and Buyer will finalize their deal through our Admin.during their meeting arranged by the Admin",
    "Only genuine customers are accommodated.",
    "No margin/top is allowed.",
    "If a customer is found guilty of having a margin/top, his deal would be canceled immediately.",
    "1% commission would be charged from both Seller and Buyer.",
    "Information provided by customers will not be disclosed and kept with in Admin.",
    "Only solid house/plot will be dealt with but no file.",
  ];
  return (
    <Stack sx={{ alignSelf: "start", px: { xs: "1rem", md: "4rem" } }}>
      <TextLg
        text="Our Terms and Conditions are as follows:"
        sx={{
          fontSize: { xs: "1.8rem", md: "2rem" },
          color: "var(--text-secondary)",
          mt: "2.25rem",
          mb: "1.62rem",
        }}
      />

      <Stack sx={{ mb: "3.06rem", maxWidth: "47.625rem" }}>
        {conditions.map((val, index) => (
          <Stack key={val} direction={"row"}>
            <TextMd
              key={val}
              text={`${index + 1}.`}
              sx={{ fontWeight: "400", color: "var(--text-black)" }}
            />
            <TextMd
              key={val}
              text={val}
              sx={{ fontWeight: "400", color: "var(--text-black)" }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default TermsAndConditions;
