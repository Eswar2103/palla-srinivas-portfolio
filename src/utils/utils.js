import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";

async function storeData(url, params) {
  try {
    const response = await fetch(url, params);
    if (!response.ok) {
      toast.error("Failed to submit data");
    }
    const json = await response.json();
    console.log("Response JSON:", json);
    if (json.error) {
      toast.error(json.error);
      return;
    }
    toast.success(json.result);
  } catch (err) {
    console.error("Error occurred while submitting data:", err);
    toast.error("Failed to submit data");
  }
}

async function compressImage(file, size = 1.5) {
  return await imageCompression(file, {
    maxSizeMB: size,
    maxWidthOrHeight: 1280,
    useWebWorker: true,
  });
}

export { storeData, compressImage };
