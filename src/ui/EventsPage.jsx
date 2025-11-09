function EventsPage() {
  const events = [
    {
      title: "Event 1",
      publishedOn: "2024-07-15",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 2",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 3",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 4",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 5",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 6",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 7",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
    {
      title: "Event 8",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/palla-news1.png",
    },
  ];
  return (
    <section>
      <div className="bg-stone-200/80 w-full h-[100px] font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
        Events
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 sm:px-30 py-20 font-sans">
        {events.map((event) => (
          <div
            key={event.publishedOn}
            className="border-none rounded-b-2xl px-2 py-2 flex flex-col justify-between bg-stone-200 hover:bg-amber-400 overflow-hidden hover:translate-y-[-5px] transform-transition duration-300"
          >
            <img src={event.mainImage} className="w-auto h-[200px] mb-2" />
            {/* <a href={event.link} target="_blank" rel="noopener noreferrer">
            {event.title}
          </a> */}
            <p className="capitalize px-2 mb-3">{event.description}</p>
            <p className="flex items-end justify-end px-2">
              {event.publishedOn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
