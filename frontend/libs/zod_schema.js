import { z } from "zod";

//signin schema
export const signinSchema = z.object({
  email: z.string().nonempty("Email is required").email({
    message: "Not a valid email",
  }),
  password: z.string().nonempty("Email is required").min(6, {
    message: "Password too short - should be 6 chars minimum",
  }),
});

//signup schema
const phoneRegex = new RegExp(/^01[3-9]\d{8}$/);
export const signupSchema = z
  .object({
    name: z.string().nonempty("name is required"),
    phoneNumber: z.string().nonempty("Phone Number is required").regex(phoneRegex, {
      message: "Must e a bangladeshi number",
    }),
    email: z.string().nonempty("Email is required").email({
      message: "not a valid mail",
    }),
    address: z.string().optional(),
    password: z.string().nonempty("Password is required").min(6, {
      message: "Password too short - should be 6 chars minimum",
    }),
    passwordConfirmation: z.string().nonempty("Confirm password is required"),
    image: z.any().optional()
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });
