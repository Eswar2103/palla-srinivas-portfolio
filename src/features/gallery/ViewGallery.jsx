import { useContext, useState, useEffect, useMemo } from "react";
import PhotoViewCard from "./PhotoViewCard";
import { Link } from "react-router-dom";
import { computedDescription, getData } from "../../utils/utils";
import Pagination from "../../components/Pagination";
import { LoadingScreen } from "../utils/utils.jsx";

function ViewGallery({ type, ModalContext }) {
  const { openModal } = useContext(ModalContext);
  const [data, setData] = useState(null);
  const [nextKey, setNextKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const uri =
    "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/StoreNewsImages";
  const headers = useMemo(() => {
    return { "x-type": "gallery" };
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getData(uri, {
        method: "GET",
        headers,
      });
      if (response?.Items && response.Items.length > 0) {
        setData(response.Items);
      }
      if (response?.LastEvaluatedKey) {
        setNextKey(response.LastEvaluatedKey);
      } else {
        setNextKey(null);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [headers]);

  function handleImageClick(img) {
    openModal(
      <PhotoViewCard photos={img.photos} description={img.description} />
    );
  }

  if (type === "page") {
    return (
      <section className="mt-14 py-8 bg-yellow-500/30">
        <div className="font-bold uppercase pb-8 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
            Image Gallery
          </p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-8 sm:px-5 md:px-15 lg:px-30">
          {data?.length &&
            data.slice(0, 3).map((img) => {
              return (
                <ImageCard
                  key={img.itemId}
                  img={img}
                  handleImageClick={handleImageClick}
                />
              );
            })}
        </div>
        <Link
          className="text-red-600 font-bold flex justify-center tracking-wider mt-8 hover:underline cursor-pointer uppercase"
          to="/gallery"
        >
          MORE Images
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-220 flex flex-col justify-between">
      <div>
        <div className="w-full h-25 font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
          Gallery
        </div>
        {isLoading && <LoadingScreen text="Loading images..." />}
        <div className="grid sm:grid-cols-3 place-items-center px-5 sm:px-40 gap-y-14  py-15">
          {data?.length &&
            data.map((img, i) => {
              return (
                <ImageCard
                  key={img.itemId}
                  img={img}
                  handleImageClick={handleImageClick}
                  alt={`Gallery image ${i + 1}`}
                />
              );
            })}
        </div>
      </div>
      <Pagination
        uri={uri}
        setData={setData}
        setNextKey={setNextKey}
        nextKey={nextKey}
        headers={headers}
        setIsLoading={setIsLoading}
      />
    </section>
  );
}

function ImageCard({ img, handleImageClick, alt }) {
  return (
    <div
      className="relative rounded-2xl w-[380px] h-60 group overflow-hidden"
      onClick={() => handleImageClick(img)}
    >
      <img
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        src={img.photos[0]}
        alt={alt}
      />
      <div className="absolute bottom-0 left-0 text-white font-bold w-full px-3 py-3 text-md bg-linear-to-t from-black/80 via-black/80 to-transparent rounded-b-2xl">
        <p>{computedDescription(img.description, 85)}</p>
        <p>{img.publishedDate.split("#")[0]}</p>
      </div>
    </div>
  );
}

export default ViewGallery;
