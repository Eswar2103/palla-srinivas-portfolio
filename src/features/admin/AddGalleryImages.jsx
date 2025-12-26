import { useRef, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { storeData, compressImage } from "../../utils/utils";
import { LoadingButton } from "../../features/utils/utils";

function AddGalleryImages() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [file, setFile] = useState([]);
  const [subFiles, setSubFiles] = useState([]);
  const [mainPhotoerror, setMainPhotoError] = useState(null);
  const [subPhotoserror, setSubPhotosError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleImage(e) {
    try {
      const data = e.target.files[0];
      if (!data) return;
      setMainPhotoError(null);
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
      const images = e.target.files;
      if (!images) return;
      const data = Object.values(images);
      setSubPhotosError(null);
      let s = 1.5;
      if (data.length > 3) {
        s = 1;
      }
      const f = await Promise.all(
        data.map(async (file) => {
          const size = file.size / (1024 * 1024);
          if (size.toFixed(2) > 2) {
            file = await compressImage(file, s);
          }
          return file;
        })
      );
      setSubFiles(f);
    } catch (err) {
      console.error("Error during image handling:", err);
      setSubPhotosError(
        "An error occurred while processing the images, please check and upload again."
      );
      return;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (!subFiles) {
      setSubPhotosError("Please select a cover photo");
      return;
    }
    const formData = new FormData(formRef.current);
    formData.delete("cover-photo");
    formData.delete("sub-photo");
    formData.append("id", `${Date.now()}-${Math.floor(Math.random() * 10000)}`);
    formData.append("mainPhoto", file, file.name);
    subFiles.forEach((f) => {
      formData.append(`subPhotos`, f, f.name);
    });
    const url =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/StoreNewsImages";
    const params = {
      method: "PUT",
      headers: {
        "x-type": "gallery",
        "x-api-key": localStorage.getItem("token"),
      },
      body: formData,
    };
    const res = await storeData(url, params);
    formRef.current.reset();
    setSubFiles([]);
    setIsLoading(false);
    setFile(null);
    if (res === "unauthorized") {
      navigate("/admin", { replace: true });
    }
  }

  return (
    <div className="flex justify-center mt-15">
      <Form onSubmit={handleSubmit} ref={formRef}>
        <div className="input-base">
          <label
            htmlFor="description"
            className="basis-20 sm:basis-30 text-sm sm:text-lg"
          >
            Description
          </label>
          <input
            name="description"
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
            required
          />
          {file && <p className="ml-4 text-md font-bold">{file.name}</p>}
          {mainPhotoerror && (
            <p className="text-red-500 text-sm">{mainPhotoerror}</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <label
            htmlFor="sub-photo"
            className="text-sm sm:text-[16px] border-none p-2 rounded-lg bg-stone-300 hover:bg-stone-400 cursor-pointer"
          >
            upload sub photos
          </label>
          <input
            name="sub-photo"
            id="sub-photo"
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleSubImages}
          />
          {subFiles &&
            subFiles.map((f, idx) => (
              <p key={idx} className="ml-4 text-md font-bold">
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
export default AddGalleryImages;
