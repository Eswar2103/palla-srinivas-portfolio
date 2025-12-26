import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";

async function storeData(url, params) {
  try {
    const response = await fetch(url, params);
    if (response.status === 401 || response.status === 403) {
      toast.error("Unauthorized access, please login again");
      return "unauthorized";
    }
    if (!response.ok) {
      throw new Error(`${response.status}`);
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

async function getData(url, params = { method: "GET" }) {
  try {
    const response = await fetch(url, params);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const json = await response.json();
    if (json.result) {
      return json.result;
    } else if (json.error) {
      throw new Error(json.error);
    }
  } catch (err) {
    console.error("Error occurred while fetching data:", err);
    toast.error("Failed to fetch data");
    return null;
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

function computedDescription(description, maxLength = 90) {
  if (description.length <= maxLength) {
    return description;
  }
  const truncated = description.slice(0, maxLength) + "...";
  return truncated;
}

export {
  storeData,
  compressImage,
  Authenticated,
  computedDescription,
  getData,
};
