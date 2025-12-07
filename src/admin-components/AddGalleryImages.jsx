import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { storeData } from "../utils/utils";

function AddGalleryImages() {
  const formRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  function handleImages(e) {
    const files = e.target.files;
    if (!files) return;
    const data = Object.values(files);
    console.log("file----:", data);
    setError(null);
    data.map((f) => {
      const d = { fileName: f.name, fileType: f.type };
      const reader = new FileReader();
      reader.readAsDataURL(f);
      reader.onloadend = function () {
        d.data = reader.result.split(",")[1];
      };
      reader.onerror = function () {
        setError(reader.error);
      };
      setFiles((prev) => [...prev, d]);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!files) {
      setError("Please select a cover photo");
      return;
    }
    console.log("Form submitted", files);
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    data.photos = files;
    data.id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    delete data["cover-photo"];
    console.log("data-----:", data);
    const url =
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/StoreNewsImages";
    const params = {
      method: "PUT",
      headers: {
        "x-type": "gallery",
      },
      body: JSON.stringify(data),
    };
    await storeData(url, params);
    formRef.current.reset();
    setFiles([]);
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
            multiple
            accept="image/*"
            onChange={handleImages}
          />
          {files &&
            files.map((f, idx) => (
              <p key={idx} className="ml-4 text-md font-bold">
                {f.fileName}
              </p>
            ))}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="cursor-pointer font-bold text-black px-3 py-2 bg-amber-400 rounded-lg hover:bg-amber-500"
            type="submit"
          >
            Upload
          </button>
        </div>
      </Form>
    </div>
  );
}
export default AddGalleryImages;
