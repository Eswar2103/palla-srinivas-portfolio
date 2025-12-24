import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { storeData, compressImage } from "../../utils/utils";
import { LoadingButton } from "../../features/utils/utils";

function AddEvents() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [mainPhotoerror, setMainPhotoError] = useState(null);
  const [subPhotoserror, setSubPhotosError] = useState(null);
  const [description, setDescription] = useState("");
  const [isLenghtExcluded, setIsLengthExcluded] = useState(false);
  const [subFiles, setSubFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleImage(e) {
    try {
      const data = e.target.files[0];
      if (!data) return;
      setMainPhotoError(null);
      if (!["image/jpeg", "image/png", "image/jpg"].includes(data.type)) {
        setMainPhotoError(
          "Please select a valid image file (jpg or png or jpeg)"
        );
        return;
      }
      let f = data;
      const size = f.size / (1024 * 1024);
      if (size.toFixed(2) > 2.5) {
        f = await compressImage(f);
      }
      setFile(f);
    } catch (error) {
      console.error("Error during image handling:", error);
      setMainPhotoError(
        "An error occurred while processing the cover photo, please check and upload again."
      );
      return;
    }
  }

  async function handleSubImages(e) {
    try {
      const files = e.target.files;
      if (!files) return;
      const data = Object.values(files);
      if (data.length === 0) return;
      let compress = true;
      if (data.length < 3) compress = false;
      setSubPhotosError(null);
      const f = await Promise.all(
        data.map(async (file) => {
          const size = file.size / (1024 * 1024);
          if (size.toFixed(2) > 1.5 && compress) {
            file = await compressImage(file);
          }
          return file;
        })
      );
      setSubFiles(f);
    } catch (error) {
      console.error("Error during sub image handling:", error);
      setSubPhotosError(
        "An error occurred while processing sub photos, please check and upload again."
      );
      return;
    }
  }

  function handleDescription(e) {
    const maxWords = 250;
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setDescription(inputText);
      setIsLengthExcluded(false);
    } else {
      setIsLengthExcluded(true);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!file.name) {
      setMainPhotoError("Please select a cover photo");
      return;
    }
    if (subFiles.length === 0) {
      setSubPhotosError("Please select sub photos");
      return;
    }
    const formData = new FormData(formRef.current);
    formData.delete("cover-photo");
    formData.delete("sub-photos");
    formData.append("mainPhoto", file, file.name);
    subFiles.forEach((f) => {
      formData.append(`subPhotos`, f, f.name);
    });
    formData.append("id", `${Date.now()}-${Math.floor(Math.random() * 10000)}`);
    const url =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/storeEvents";
    const params = {
      method: "PUT",
      body: formData,
      headers: {
        "x-api-key": localStorage.getItem("token"),
      },
    };
    const res = await storeData(url, params);
    formRef.current.reset();
    setFile({});
    setSubFiles([]);
    setDescription("");
    setIsLoading(false);
    if (res === "unauthorized") {
      navigate("/admin", { replace: true });
    }
  }

  return (
    <div className="flex justify-center my-15">
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
            htmlFor="publishedDate"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Published Date
          </label>
          <input name="publishedDate" type="date" className="input" required />
        </div>
        <div className="input-base">
          <label
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
            htmlFor="description"
          >
            Description
          </label>
          <div className="flex w-2/3 flex-col">
            <textarea
              className="description"
              name="description"
              type="text"
              placeholder="Enter upto 250 words..."
              onChange={handleDescription}
              value={description}
              required
            />
            {isLenghtExcluded && (
              <p className="mt-2 mb-2 rounded-full bg-red-100 px-2 py-1 text-center text-xs text-red-500 sm:text-sm">
                Only 250 words are allowed to send as a message
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-6">
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
          {mainPhotoerror && (
            <p className="text-red-500 text-sm">{mainPhotoerror}</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="sub-photos"
            className="text-sm sm:text-[16px] border-none p-2 rounded-lg bg-stone-300 hover:bg-stone-400 cursor-pointer"
          >
            upload sub photos
          </label>
          <input
            name="sub-photos"
            id="sub-photos"
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleSubImages}
          />
          {subFiles &&
            subFiles.map((f) => (
              <p key={f.name} className="ml-4 text-md font-bold">
                {f.name}
              </p>
            ))}
          {subPhotoserror && (
            <p className="text-red-500 text-sm">{subPhotoserror}</p>
          )}
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

export default AddEvents;
