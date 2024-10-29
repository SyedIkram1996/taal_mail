import VerifyEmailTemplate from "@/components/common/EmailTemplates/VerifyEmailTemplate";
import { EMAIL, EMAIL_PASS } from "@/constants/environment";
import { ISendEmail } from "@/interfaces/api";
import { render } from "@react-email/components";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

export const sendEmail = async (data: ISendEmail) => {
  try {
    const { subject, body, sentTo } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: sentTo,
      subject: subject,
      html: body,
    });

    return;
  } catch (error) {
    console.log("error", error);
  }
};

export const verifyEmail = async (email: string) => {
  const emailLink = await admin.auth().generateEmailVerificationLink(email);

  const html = await render(<VerifyEmailTemplate link={emailLink} />, {
    pretty: true,
  });

  await sendEmail({
    sentTo: email,
    subject: "Verify your Email Address",
    body: html,
  });

  return;
};
