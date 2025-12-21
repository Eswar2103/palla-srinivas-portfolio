import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function PhotoView({ photos, description }) {
  const [index, setImageIndex] = useState(0);
  if (photos.length === 0) return null;
  const imageLength = photos.length - 1;
  function handleImageLeft() {
    if (photos.length === 0) return;
    if (index > 0) {
      setImageIndex(index - 1);
    } else if (index === 0) {
      setImageIndex(imageLength);
    }
  }

  function handleImageRight() {
    if (photos.length === 0) return;
    if (index < imageLength) {
      setImageIndex(index + 1);
    } else if (index === imageLength) {
      setImageIndex(0);
    }
  }
  return (
    <div className=" w-[90%] sm:w-[70%] mx-auto pb-10 flex justify-center items-center">
      <div className="relative flex flex-col w-full items-center">
        <div className="overflow-hidden w-[320px] sm:w-[600px] ">
          <img
            src={photos[index]}
            className="w-full h-[180px] sm:h-[350px] object-fill"
          />
        </div>
        <p className="text-center mt-3">{description}</p>
        {photos.length > 1 && (
          <>
            <button
              aria-label="Previous slide"
              role="button"
              onClick={() => handleImageLeft()}
              className="absolute -translate-x-0 translate-y-[-50%] top-[50%] z-10 left-3 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
            >
              <BsChevronCompactLeft />
            </button>
            <button
              aria-label="Next slide"
              role="button"
              onClick={() => handleImageRight()}
              className="absolute -translate-x-0 translate-y-[-50%] top-[50%] z-10 right-3 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
            >
              <BsChevronCompactRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotoView;
