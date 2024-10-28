import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} from "@/constants/environment";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export const cloudinaryUpload = async ({
  image,
  folder,
}: {
  image: string;
  folder: string;
}) => {
  return await cloudinary.uploader.upload(image, {
    folder,
  });
};

export const cloudinaryDestroy = async ({
  public_id,
}: {
  public_id: string;
}) => {
  return await cloudinary.uploader.destroy(public_id);
};
