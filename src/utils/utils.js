import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";

async function storeData(url, params) {
  try {
    const response = await fetch(url, params);
    if (response.status === 401 || response.status === 403) {
      toast.error("Unauthorized access, please login again");
      return "unauthorized";
    }
    const json = await response.json();
    if (json.error) {
      toast.error(json.error);
      return false;
    }
    toast.success(json.result);
    return true;
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

function Authenticated() {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;
    const tokenParts = token.split(".");
    const decoded = JSON.parse(atob(tokenParts[1]));
    const remainingTime = decoded.exp - (Date.now() / 1000).toFixed(0);
    if (remainingTime < 0) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export { storeData, compressImage, Authenticated };
