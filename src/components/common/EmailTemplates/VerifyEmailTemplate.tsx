import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  link: string;
}

export const VerifyEmailTemplate = ({ link }: Props) => (
  <Html>
    <Head />
    <Preview>Verify Email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://res.cloudinary.com/hrpayroll/image/upload/v1696017067/hr_payroll/logo/e21y7dkeq9xti2gvzj9w.png`}
            width="49"
            alt="Stripe"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Welcome to TaalMail</Text>
          <Button style={button} href={link}>
            Verify
          </Button>
          <Hr style={hr} />
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VerifyEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "50px auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#0ec648",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "24px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  letterSpacing: "50px",
  paddingLeft: "50px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
