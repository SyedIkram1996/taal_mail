import { object, string } from "zod";

export const signUpSchema = object({
  name: string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must be no more than 20 characters"),
  email: string().email("Invalid email address"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
    }),
  confirmPassword: string().min(6, "Password must be at least 6 characters"),
  phoneNo: string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const loginInSchema = object({
  email: string().email("Invalid email address"),
  password: string(),
});

export const forgotPasswordSchema = object({
  email: string().email("Invalid email address"),
});

export const resetPasswordSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
    }),
  confirmPassword: string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const loginInIdTokenSchema = object({
  email: string().email("Invalid email address"),
  idToken: string(),
  uid: string(),
});

export const verifySchema = object({
  verifyCode: string().length(6, "Verification code must be 6 digits"),
});
