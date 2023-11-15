"use server"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "./firebase/firebaseConfig";

export const handleSignup = async (data) => {
  if (data.image) {
    const imageRef = ref(firebaseStorage, `users/${data.phoneNumber}`);
    uploadBytes(imageRef, data.image[0]).then((image) => {
      getDownloadURL(image.ref).then((url) => {
        console.log("photo uploaded");
      });
    });
  }
};
