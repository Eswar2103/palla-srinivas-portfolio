import { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

function Corousel() {
  const [corouselImageIndex, setCorouselImageIndex] = useState(0);
  const intervalRef = useRef(0);
  const images = [
    {
      url: "palla.jpg",
      key: "abc",
    },
    {
      url: "palla1.jpg",
      key: "def",
    },
    {
      url: "/img3.jpg",
      key: "ghi",
    },
    {
      url: "/img4.jpg",
      key: "yah",
    },
  ];

  useEffect(() => {
    imageCorouselInterval();
  }, []);

  function imageCorouselInterval() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const lenght = images.length - 1;
      setCorouselImageIndex((prev) => {
        const value = prev === lenght ? 0 : prev + 1;
        return value;
      });
    }, 5000);
  }

  function handleCorouselImage(direction) {
    if (!images.length) {
      return;
    }
    clearInterval(intervalRef.current);
    const imageLength = images.length - 1;
    if (direction === "left") {
      if (corouselImageIndex > 0) {
        setCorouselImageIndex((img) => img - 1);
      } else if (corouselImageIndex == 0) {
        setCorouselImageIndex(imageLength);
      }
      imageCorouselInterval();
    } else if (direction === "right") {
      if (corouselImageIndex < imageLength) {
        setCorouselImageIndex((img) => img + 1);
      } else if (corouselImageIndex == imageLength) {
        setCorouselImageIndex(0);
      }
      imageCorouselInterval();
    }
  }

  function goToSlide(index) {
    clearInterval(intervalRef.current);
    setCorouselImageIndex(index);
    imageCorouselInterval();
  }

  function handleMouseEnter() {
    clearInterval(intervalRef.current);
  }

  function handleMouseLeave() {
    imageCorouselInterval();
  }
  return (
    <div
      className="relative group w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${corouselImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={image.key}
              src={image.url}
              alt="corousel image"
              aria-hidden={index === corouselImageIndex}
              className="h-[600px] w-screen flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        aria-label="Previous slide"
        role="button"
        onClick={() => handleCorouselImage("left")}
        className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%] top-[50%] z-10 left-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
      >
        <BsChevronCompactLeft />
      </button>
      <button
        aria-label="Next slide"
        role="button"
        onClick={() => handleCorouselImage("right")}
        className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%] top-[50%] z-10 right-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
      >
        <BsChevronCompactRight />
      </button>
      <div className="flex justify-center text-2xl">
        {images.map((img, imgIndex) => (
          <div
            onClick={() => goToSlide(imgIndex)}
            className="cursor-pointer"
            key={img.key}
          >
            {corouselImageIndex == imgIndex ? (
              <RxDotFilled className="text-yellow-500" />
            ) : (
              <RxDot />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Corousel;
