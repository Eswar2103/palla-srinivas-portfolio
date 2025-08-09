import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

function Home() {
  const [corouselImage, setCorouselImage] = useState(0);
  const images = [
    {
      url: "/img1.jpg",
      key: "abc",
    },
    {
      url: "/img2.jpeg",
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
  function handleCorouselImage(direction) {
    if (!images.length) {
      return;
    }
    const imageLength = images.length - 1;
    console.log("imageLength---:", imageLength);
    if (direction == "left" && corouselImage > 0) {
      console.log("---- line 24------");
      setCorouselImage((img) => img - 1);
    } else if (direction == "right" && corouselImage < imageLength) {
      console.log("---- line 27------", corouselImage);
      setCorouselImage((img) => img + 1);
    }
  }

  function goToSlide(index) {
    setCorouselImage(index);
  }
  return (
    <div className="relative w-full group">
      {/* <div className="transition duration-700 ease-out">
        <img src={images[corouselImage].url} alt="corousel image" className="rounded-xl h-[600px] w-full" />
      </div> */}
      <div
        style={{ backgroundImage: `url(${images[corouselImage].url})` }}
        className="bg-cover bg-center h-[600px] duration-700 ease-out transition"
      ></div>
      <div
        onClick={() => handleCorouselImage("left")}
        className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%] top-[50%] left-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
      >
        <BsChevronCompactLeft />
      </div>
      <div
        onClick={() => handleCorouselImage("right")}
        className="hidden group-hover:block absolute -translate-x-0 translate-y-[-50%]  top-[50%] right-5 text-2xl rounded-2xl bg-black/50 p-[5px] text-stone-400 hover:text-stone-100 cursor-pointer"
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex justify-center text-2xl">
        {images.map((img, imgIndex) => (
          <div
            onClick={() => goToSlide(imgIndex)}
            className="cursor-pointer"
            key={img.key}
          >
            {corouselImage == imgIndex ? <RxDotFilled className="text-yellow-500" /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
