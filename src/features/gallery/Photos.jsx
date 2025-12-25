import { useContext } from "react";
import PhotoView from "./PhotoView";
import { Link } from "react-router-dom";
import { computedDescription } from "../../utils/utils";

function Photos({ type, ModalContext }) {
  const { openModal } = useContext(ModalContext);

  function handleImageClick(img) {
    openModal(<PhotoView photos={img.src} description={img.description} />);
  }

  const images = [
    {
      src: ["/images/palla-news1.png", "/images/palla-news2.png"],
      description:
        "Test description for image gallery. Test description for image gallery. Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["/images/palla-news2.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["/images/palla-news3.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["/images/palla1.jpg", "/images/palla-news2.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["/images/SPP_photo.jpg"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
    {
      src: ["/images/palla-news2.png"],
      description: "Test description for image gallery.",
      publishedOn: "Nov 15, 2025",
    },
  ];

  if (type === "page") {
    const imagesToShow = images.slice(0, 3);
    return (
      <section className="mt-14 py-8 bg-yellow-500/30">
        <div className="font-bold uppercase pb-8 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
            Image Gallery
          </p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-8 sm:px-5 md:px-15 lg:px-30">
          {imagesToShow.map((img) => {
            return (
              <ImageCard
                key={img.src[0]}
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
    <section>
      <div className="w-full h-25 font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
        Gallery
      </div>
      <div className="grid sm:grid-cols-3 place-items-center px-5 sm:px-40 gap-y-14 my-6">
        {images.map((img, i) => {
          return (
            <ImageCard
              key={img.src[0]}
              img={img}
              handleImageClick={handleImageClick}
              alt={`Gallery image ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}

function ImageCard({ img, handleImageClick, alt }) {
  return (
    <div
      className="relative rounded-2xl w-[350px] h-50 group overflow-hidden"
      onClick={() => handleImageClick(img)}
    >
      <img
        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
        src={img.src[0]}
        alt={alt}
      />
      <div className="absolute bottom-0 left-0 text-white font-bold w-full px-3 py-3 text-md bg-linear-to-t from-black/80 via-black/80 to-transparent rounded-b-2xl">
        <p>{computedDescription(img.description, 40)}</p>
        <p>{img.publishedOn}</p>
      </div>
    </div>
  );
}

export default Photos;
