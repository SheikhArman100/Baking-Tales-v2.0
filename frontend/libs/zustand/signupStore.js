import { create } from "zustand";

export const useSignupStore = create(() => ({
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
  password: "",
}));

export const setSignup = (details) => {
  useSignupStore.setState({
    name: details.name,
    phoneNumber: details.phoneNumber,
    email: details.email,
    address: details.address,
    password: details.password,
  });
};
export const removeSignup = () => {
  useSignupStore.setState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
  });
};
