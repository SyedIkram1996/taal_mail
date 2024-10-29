import { EMAIL_TEMPLATE_LOGO } from "@/constants/environment";
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
          <Img src={EMAIL_TEMPLATE_LOGO} height="50px" alt="Stripe" />
          <Hr style={hr} />
        </Section>
        <Section style={{ textAlign: "center" }}>
          <Text style={paragraph}>Welcome to TaalMail</Text>
          <Button style={button} href={link}>
            Verify your account
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
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: "500",
};

const button = {
  backgroundColor: "#0ec648",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "500",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "0.5rem 1rem",
};
