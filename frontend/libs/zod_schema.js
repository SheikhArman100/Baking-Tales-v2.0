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

//create FormNewProduct
export const createProductSchema=z.object({
  title:z.string().nonempty("Add a title"),
  description:z.string().nonempty("Add a description"),
  category:z.string().nonempty("Select a category"),
  flavors:z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one flavor",
  }),
  price:z.coerce.number().refine(
    (val)=>!isNaN(val) && val > 0,{
      message: "Price must be a valid integer and greater than 0",
    }
  ),
  sizes:z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one size",
  }),
  images:z.array(z.string()).refine((value) => value.length===5, {
    message: "You have to add total 5 images",
  }),
})

//cart item form
export const cartSchema = z.object({
  flavor: z.string({
    required_error: "Add a flavor",
  }),
  size: z.string({
    required_error: "Add a size",
  }),
  quantity:z.coerce.number().refine(
    (val)=>!isNaN(val) && 11> val > 0,{
      message: "You can not buy more than 10",
    }
  ),
});
