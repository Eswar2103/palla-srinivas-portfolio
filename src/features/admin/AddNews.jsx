import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { storeData, compressImage } from "../../utils/utils";
import { LoadingButton } from "../../features/utils/utils";

function AddNews() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleImage(e) {
    const data = e.target.files[0];
    if (!data) return;
    setError(null);
    if (!["image/jpeg", "image/png", "image/jpg"].includes(data.type)) {
      setError("Please select a valid image file (jpg or png or jpeg)");
      return;
    }
    let f = data;
    const size = f.size / (1024 * 1024);
    if (size.toFixed(2) > 2.5) {
      f = await compressImage(f);
    }
    setFile(f);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!file) {
      setError("Please select a cover photo");
      return;
    }
    const formData = new FormData(formRef.current);
    formData.delete("cover-photo");
    formData.append("photo", file, file.name);
    formData.append("id", `${Date.now()}-${Math.floor(Math.random() * 10000)}`);
    const url =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/StoreNewsImages";
    const params = {
      method: "PUT",
      headers: {
        "x-type": "news",
        "x-api-key": localStorage.getItem("token"),
      },
      body: formData,
    };
    const res = await storeData(url, params);
    formRef.current.reset();
    setFile(null);
    setIsLoading(false);
    if (res === "unauthorized") {
      navigate("/admin", { replace: true });
    }
  }
  return (
    <div className="flex justify-center mt-15">
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div className="input-base">
          <label
            htmlFor="title"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Eg: Palla srinivas rao on super six"
            className="input"
            required
          />
        </div>
        <div className="input-base">
          <label
            htmlFor="source"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Source
          </label>
          <input
            name="source"
            type="text"
            placeholder="Eg: The Hindu, Times of India, Eenadu"
            className="input"
            required
          />
        </div>
        <div className="input-base">
          <label
            htmlFor="url"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Link
          </label>
          <input
            name="url"
            type="text"
            placeholder="Eg: https://www.thehindu.com/news/cities/Visakhapatnam/..."
            className="input"
            required
          />
        </div>
        <div className="input-base">
          <label
            htmlFor="publishedDate"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Published Date
          </label>
          <input name="publishedDate" type="date" className="input" required />
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="cover-photo"
            className="text-sm sm:text-[16px] border-none p-2 rounded-lg bg-stone-300 hover:bg-stone-400 cursor-pointer"
          >
            upload cover photo
          </label>
          <input
            name="cover-photo"
            id="cover-photo"
            type="file"
            hidden
            accept="image/*"
            onChange={handleImage}
          />
          {file && <p className="ml-4 text-md font-bold">{file.name}</p>}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex justify-center mt-8">
          <LoadingButton
            text1="Uploading..."
            text2="Upload"
            isLoading={isLoading}
          />
        </div>
        <button
          type="button"
          className="mt-8 ml-4 text-sm sm:text-md text-blue-600 underline"
          onClick={() => navigate("/admin")}
        >
          Go Back to admin Panel
        </button>
      </Form>
    </div>
  );
}

export default AddNews;
