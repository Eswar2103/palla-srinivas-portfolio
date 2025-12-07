import { toast } from "react-toastify";

export async function storeData(url, params) {
  try {
    const response = await fetch(url, params);
    if (!response.ok) {
      toast.error("Failed to submit data");
    }
    const json = await response.json();
    toast.success(json);
  } catch (err) {
    console.error("Error occurred while submitting data:", err);
    toast.error("Failed to submit data");
  }
}
