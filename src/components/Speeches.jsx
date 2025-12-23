import { useState } from "react";
import { createContext, useContext } from "react";
import { RxDotFilled, RxDot } from "react-icons/rx";
import Modal from "../features/modal/Modal";

const ModalContext = createContext();

function Speeches() {
  const speeches = [
    {
      url: "https://www.youtube-nocookie.com/embed/HSdz_9mQa4c?si=TKIJfhbjRodCBQrI",
      title: "ananthapur speech",
      description: "Speech in ananthapur meeting about supex six.",
      thumbnail: "/images/video3-thumbnail.png",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/nN86yEKxkPU?si=B8ufFXoiVo55WYRL",
      title: "ananthapur speech",
      description:
        "Palla Srinivasa Rao Powerful Speech at TDP Mahanadu 2025 Public Meeting.",
      thumbnail: "/images/video1-thumbnail.png",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/YD8grlYJghg?si=uOBmKUiUOD9-rViA",
      title: "mahanadu speech",
      description:
        "Speech in mahanadu about the six principle's introduced by Nara Lokesh.",
      thumbnail: "/images/video2-thumbnail.png",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-30 gap-y-3 flex flex-col justify-center items-center">
      {/* <div className="font-bold uppercase pb-8 flex justify-center"> */}
      {/* <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
          Speeches
        </p> */}
      {/* </div> */}
      <Modal ModalContext={ModalContext}>
        <SpeechesVideos speeches={speeches} />
        <Modal.Window ModalContext={ModalContext} />
      </Modal>
    </section>
  );
}

function SpeechesVideos({ speeches }) {
  const [selectedSpeech, setSelectedSpeech] = useState(0);
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <div className="w-full max-w-325 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            width: `${speeches.length * 100}%`,
            transform: `translateX(-${selectedSpeech * (100 / speeches.length)}%)`,
          }}
        >
          {speeches.map((s) => (
            <div
              key={s.url}
              className="w-325 grid grid-rows sm:grid-cols-2 items-center overflow-hidden group"
              onClick={() => {
                openModal(
                  <EmbeddedVideo
                    url={s.url}
                    title={s.title}
                    description={s.description}
                  />
                );
              }}
            >
              {/* <EmbeddedVideo url={s.url} title={s.title} /> */}
              <img
                src={s.thumbnail}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <p className="font-bold text-xl sm:text-3xl mx-10 text-[#942222]">
                {`"${s.description}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center text-2xl">
        {speeches.map((s, i) => (
          <div
            key={s.description}
            className="cursor-pointer"
            onClick={() => setSelectedSpeech(i)}
          >
            {selectedSpeech == i ? (
              <RxDotFilled className="text-yellow-500 scale-140" />
            ) : (
              <RxDot />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function EmbeddedVideo({ url, title, description }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <iframe
        className="w-full h-50 sm:h-[450px]"
        src={`${url}`}
        title={`${title}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <strong className="text-md sm:text-2xl text-[#410606] text-justify">
        {description}
      </strong>
    </div>
  );
}

export default Speeches;
