import { useState } from "react";
import { RxDotFilled, RxDot } from "react-icons/rx";

function Speeches() {
  const [selectedSpeech, setSelectedSpeech] = useState(0);
  const speeches = [
    {
      url: "https://www.youtube-nocookie.com/embed/YD8grlYJghg?si=uOBmKUiUOD9-rViA",
      title: "mahanadu speech",
      description:
        "Speech in mahanadu about the six principle's introduced by Nara Lokesh.",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/HSdz_9mQa4c?si=TKIJfhbjRodCBQrI",
      title: "ananthapur speech",
      description: "Speech in ananthapur meeting about supex six.",
    },
    {
      url: "https://www.youtube-nocookie.com/embed/nN86yEKxkPU?si=B8ufFXoiVo55WYRL",
      title: "ananthapur speech",
      description:
        "Palla Srinivasa Rao Powerful Speech at TDP Mahanadu 2025 Public Meeting.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-30 gap-y-3 flex flex-col justify-center items-center">
      {/* <div className="font-bold uppercase pb-8 flex justify-center"> */}
      {/* <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
          Speeches
        </p> */}
      {/* </div> */}
      <div className="w-full max-w-[1300px] overflow-hidden">
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
              className="w-[1300px] grid grid-rows sm:grid-cols-2 items-center"
            >
              <EmbeddedVideo url={s.url} title={s.title} />
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
    </section>
  );
}

function EmbeddedVideo({ url, title }) {
  return (
    <iframe
      // w-[350px] h-[200px] sm:w-[650px] sm:h-[400px]
      className="w-full h-[200px] sm:h-[450px]"
      src={`${url}`}
      title={`${title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default Speeches;
