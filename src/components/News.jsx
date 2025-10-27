function News() {
  const news = [
    {
      image: "/palla-news3.png",
      title:
        "Palla Srinivasa Rao ON Super Six: We will bring investments while providing good governance in the future: Palla Srinivasa Rao",
      source: "Andhra Jyothi",
      publishedOn: "Sep 11, 2025",
      link: "https://www.andhrajyothy.com/2025/andhra-pradesh/ananthapuram/palla-srinivasa-rao-key-comments-on-super-six-meeting-vk-1445913.html",
    },
    {
      image: "/palla-news3.png",
      title:
        "Palla Srinivasa Rao Fires on Jagan: Jagan's plays are just to divert people's attention from the liquor scam.. Palla's satires",
      source: "Andhra Jyothi",
      publishedOn: "Sep 09, 2025",
      link: "https://www.andhrajyothy.com/2025/andhra-pradesh/guntur/palla-srinivasa-rao-sensational-comments-on-ys-jagan-mohan-reddy-vk-1445242.html",
    },
    {
      image: "/palla-news2.png",
      title:
        "Steel plant is not a private property under any circumstances: Palla Srinivas",
      source: "Eenadu",
      publishedOn: "Aug 26, 2025",
      link: "https://www.eenadu.net/telugu-news/andhra-pradesh/steel-plant-will-not-be-privatized-says-palla-srinivas/1701/125155889",
    },
    {
      image: "/palla-news1.png",
      title:
        "Palla Srinivasa Rao Comments on Lokesh: Nara Lokesh.. is thinking smartly: Palla Srinivasa Rao",
      link: "https://www.andhrajyothy.com/2025/andhra-pradesh/visakhapatnam/palla-srinivasa-rao-distributed-smart-ration-cards-in-visakhapatnam-vk-1440356.html",
      source: "Andhra Jyothi",
      publishedOn: "Aug 25, 2025",
    },
    {
      image: "/palla-news1.png",
      title:
        "Palla Srinivasa Rao: They are obstructing the development of AP.. Palla fires on Jagan and Co.",
      source: "Andhra Jyothi",
      publishedOn: "Jul 28, 2025",
      link: "https://www.andhrajyothy.com/2025/andhra-pradesh/guntur/telugu-desam-andhra-pradesh-president-palla-srinivasa-rao-strong-warning-to-ys-jagan-mohan-reddy-vk-1430476.html",
    },
    {
      title:
        "Palla Srinivas Rao: Jagan should change his mind. Pulivendula got independence.. Palla Srinivas Rao fire",
      source: "Andhra Jyothi",
      publishedOn: "Aug 14, 2025",
      link: "https://www.andhrajyothy.com/2025/andhra-pradesh/kadapa/palla-srinivas-rao-key-comments-on-pulivendula-zptc-bye-election-tdp-victory-vk-1436498.html",
      image: "/palla-pulivendula.png",
    },
  ];
  return (
    <div className="px-10 sm:px-20">
      <div className="font-bold uppercase pb-5 flex justify-center">
        <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">News</p>
      </div>
      <div className="grid-auto-fit justify-center gap-4">
        {news.map((n) => {
          return (
            <div
              key={n.publishedOn}
              className="border-none rounded-b-2xl px-2 py-2 flex flex-col justify-between bg-stone-300 hover:bg-amber-400 hover:scale-105 duration-300"
            >
              <img src={n.image} className="w-auto h-[200px] mb-2" />
              <a href={n.link} target="_blank" rel="noopener noreferrer">
                {n.title}
              </a>
              <div className="flex justify-between px-2">
                <p className="capitalize">{n.source}</p>
                <p>{n.publishedOn}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
