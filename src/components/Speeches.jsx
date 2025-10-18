function Speeches() {
  const speeches = [
    {
      url: "https://www.youtube.com/embed/YD8grlYJghg?si=uOBmKUiUOD9-rViA",
      title: "mahanadu speech",
      description:
        "Speech in mahanadu about the six principle's introduced by Nara Lokesh.",
    },
    {
      url: "https://www.youtube.com/embed/HSdz_9mQa4c?si=TKIJfhbjRodCBQrI",
      title: "ananthapur speech",
      description: "Speech in ananthapur meeting about supex six.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-30 gap-y-3 flex flex-col justify-center items-cente">
      <div className="font-bold uppercase pb-8 flex justify-center">
        <p className="text-center border rounded-2xl bg-yellow-400 px-5 py-1">
          Speeches
        </p>
      </div>
      <div className="grid grid-auto-fit-speeches gap-x-18 gap-y-10">
        {speeches.map((s) => {
          return (
            <div key={s.url} className="flex flex-col items-center gap-y-3">
              <EmbeddedVideo url={s.url} title={s.title} />
              <p className="font-bold text-md">{s.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function EmbeddedVideo({ url, title }) {
  return (
    <iframe
      className="w-[350px] h-[200px] sm:w-[650px] sm:h-[400px] shadow-xl/30"
      src={`${url}`}
      title={`${title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}

export default Speeches;
