import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary";
import multer from "multer";



export const profileStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: "candidate_images",
    format: "jpg",
  }),
});

const parser = multer({ storage: profileStorage });