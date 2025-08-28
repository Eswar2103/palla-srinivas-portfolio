import { toast } from "react-toastify";

export async function storeData(data) {
  try {
    const gatewayUrl =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/connectWithLeader";
    const { name, phone, type, description } = data;
    const params = {
      method: "POST",
      headers: {
        "x-full-name": name,
        "x-phone-number": phone,
        "x-message-type": type,
      },
      body: description,
    };
    const response = await fetch(gatewayUrl, params);
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
