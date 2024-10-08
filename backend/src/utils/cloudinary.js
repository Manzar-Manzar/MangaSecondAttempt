import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

// This configuration will give the user access to upload the file

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File has been uploaded successfully
        console.log("File has been uploaded successfully on cloudinary")
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed.
        fs.unlinkSync(localFilePath)
        return null;
    }
}


export {uploadOnCloudinary}