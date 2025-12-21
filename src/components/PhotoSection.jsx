import { useContext } from "react";
import PhotoView from "./PhotoView";
import { Link } from "react-router-dom";
// import { ModalContext } from "./Modal";

function PhotoSection({ ModalContext }) {
  const { openModal } = useContext(ModalContext);

  function handleImageClick(img) {
    openModal(<PhotoView photos={img.src} description={img.description} />);
  }

  const images = [
    {
      src: ["./palla-news1.png", "./palla-news2.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["./palla-news2.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["./palla-news3.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
  ];
  return (
    <section className="mt-14 py-8 bg-yellow-500/30">
      <div className="font-bold uppercase pb-8 flex justify-center">
        <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
          Image Gallery
        </p>
      </div>
      <div className="grid grid-cols-3 place-items-center px-20">
        {images.map((img) => {
          return (
            <div
              key={img.src[0]}
              className="relative rounded-2xl w-[350px] h-[200px] group overflow-hidden"
              onClick={() => handleImageClick(img)}
            >
              <img
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                src={img.src[0]}
              />
              <div className="absolute bottom-0 left-0 text-white font-bold w-full px-3 py-3 text-md bg-gradient-to-t from-black/80 via-black/80 to-transparent rounded-b-2xl">
                <p>{img.description}</p>
                <p>{img.publishedOn}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        className="text-red-600 font-bold flex justify-center tracking-wider mt-4 hover:underline cursor-pointer uppercase"
        to="/gallery"
      >
        MORE Images
      </Link>
    </section>
  );
}

export default PhotoSection;
