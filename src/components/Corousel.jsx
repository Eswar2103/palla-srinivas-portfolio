import { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

function Corousel() {
  const [corouselImageIndex, setCorouselImageIndex] = useState(0);
  const intervalRef = useRef(0);
  const corouselRef = useRef(null);
  const images = [
    {
      url: "/images/palla2.jpg",
      key: "ghi",
    },
    {
      url: "/images/palla.jpg",
      key: "abc",
    },
    {
      url: "/images/palla4.jpg",
      key: "2j4",
    },
    {
      url: "/images/palla1.jpg",
      key: "def",
    },
  ];

  useEffect(() => {
    imageCorouselInterval();

    const hiddenVisibility = () =>
      document.hidden ? stopCarousel() : imageCorouselInterval();
    document.addEventListener("visibilitychange", hiddenVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) imageCorouselInterval();
        else stopCarousel();
      },
      {
        threshold: 0.5,
      },
    );

    if (corouselRef.current) {
      observer.observe(corouselRef.current);
    }

    return () => {
      stopCarousel();
      document.removeEventListener("visibilitychange", hiddenVisibility);
    };
  }, []);

  const imageLength = images.length - 1;
  function imageCorouselInterval() {
    stopCarousel();
    intervalRef.current = setInterval(() => {
      const lenght = images.length - 1;
      setCorouselImageIndex((prev) => {
        const value = prev === lenght ? 0 : prev + 1;
        return value;
      });
    }, 5000);
  }

  const stopCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  function handleCorouselLeft() {
    if (corouselImageIndex > 0) {
      setCorouselImageIndex((img) => img - 1);
    } else if (corouselImageIndex == 0) {
      setCorouselImageIndex(imageLength);
    }
    imageCorouselInterval();
  }

  function handlerCorouselRight() {
    if (corouselImageIndex < imageLength) {
      setCorouselImageIndex((img) => img + 1);
    } else if (corouselImageIndex == imageLength) {
      setCorouselImageIndex(0);
    }
    imageCorouselInterval();
  }

  function goToSlide(index) {
    stopCarousel();
    setCorouselImageIndex(index);
    imageCorouselInterval();
  }

  return (
    <div className="relative group w-full" ref={corouselRef}>
      <div className="overflow-hidden flex flex-col w-full">
        <div
          className="flex transition-transform duration-700 ease-out "
          // style={{ transform: `translateX(-${corouselImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={image.key}
              className="bg-amber-400 w-full h-[250px] sm:h-[350px] md:h-[720px] flex-shrink-0 flex justify-center items-center"
            >
              <img
                src={images[corouselImageIndex].url}
                alt={`corousel image ${index + 1}`}
                aria-hidden={index === corouselImageIndex}
                className="h-[250px] sm:h-[350px] md:h-175 w-325 sm:rounded-3xl"
                fetchPriority="high"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="Previous slide"
        role="button"
        onClick={() => handleCorouselLeft()}
        className="hidden group-hover:block absolute translate-x-0 translate-y-[-50%] top-[50%] z-10 left-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
      >
        <BsChevronCompactLeft />
      </button>
      <button
        aria-label="Next slide"
        role="button"
        onClick={() => handlerCorouselRight()}
        className="hidden group-hover:block absolute translate-x-0 translate-y-[-50%] top-[50%] z-10 right-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
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
