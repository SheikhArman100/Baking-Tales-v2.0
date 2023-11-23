import { z } from "zod";

//signin schema
export const signinSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Not a valid email",
  }),
});

//signup schema
const phoneRegex = new RegExp(/^01[3-9]\d{8}$/);
export const signupSchema = z.object({
  name: z.string().nonempty("name is required"),
  phoneNumber: z
    .string()
    .nonempty("Phone Number is required")
    .regex(phoneRegex, {
      message: "Must e a bangladeshi number",
    }),
  email: z.string().nonempty("Email is required").email({
    message: "not a valid mail",
  }),
});

export const otpSchema = z.object({
  otp1: z.string().nonempty("can not ne empty"),
  otp2: z.string().nonempty("can not ne empty"),
  otp3: z.string().nonempty("can not ne empty"),
  otp4: z.string().nonempty("can not ne empty"),
  otp5: z.string().nonempty("can not ne empty"),
  otp6: z.string().nonempty("can not ne empty"),
});
