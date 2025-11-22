import { Link } from "react-router-dom";
import { EventCard } from "./ComponentUtils";
import { useContext } from "react";
import EventsViewPage from "./EventsViewPage";
// import { ModalContext } from "./Modal";

function ViewEvents({ type, ModalContext }) {
  const { openModal } = useContext(ModalContext);

  const event = {
    title: "Testing the event modal overview",
    publishedOn: "2024-07-15",
    description:
      "This is a detailed description of the event. It provides insights into what the event is about, its significance, and other relevant information that attendees might find useful.This is a detailed description of the event. It provides insights into what the event is about, its significance, and other relevant information that attendees might find useful. It provides insights into what the event is about, its significance, and other relevant information that attendees might find useful. It provides insights into what the event is about, its significance, and other relevant information that attendees might find useful.",
    coverPhoto: "/images/palla.jpg",
    photos: ["/images/palla1.jpg", "/images/palla2.jpg", "/images/palla4.jpg"],
  };

  function handleEventClick(event) {
    openModal(<EventsViewPage event={event} />);
    // setModalContent(<EventsViewPage event={event} />);
  }

  const events = [
    {
      title: "Event 1",
      publishedOn: "2024-07-15",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 2",
      publishedOn: "2024-07-15",
      description: "Description for Event 1",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 3",
      publishedOn: "2024-07-15",
      description: "Description for Event 2",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 4",
      publishedOn: "2024-07-15",
      description: "Description for Event 3",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 5",
      publishedOn: "2024-07-15",
      description: "Description for Event 4",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 6",
      publishedOn: "2024-07-15",
      description: "Description for Event 5",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 7",
      publishedOn: "2024-07-15",
      description: "Description for Event 6",
      mainImage: "/images/palla-news1.png",
    },
    {
      title: "Event 8",
      publishedOn: "2024-07-15",
      description: "Description for Event 7",
      mainImage: "/images/palla-news1.png",
    },
  ];

  if (type === "home") {
    const eventsToShow = events.slice(0, 4);

    return (
      <div className="bg-yellow-500/30 mt-15 px-25 sm:px-55 py-5 flex flex-col">
        <div className="font-bold uppercase pb-8 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1 tracking-widest">
            Events
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {eventsToShow.map((e) => (
            <EventCard
              key={e.title}
              event={e}
              modalClick={() => handleEventClick(event)}
            />
          ))}
        </div>
        <Link
          className="text-red-600 font-bold text-center tracking-wider mt-4 hover:underline cursor-pointer uppercase"
          to="/events"
        >
          MORE Events
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="w-full h-[100px] font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
        Main Events
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-10 sm:px-30 py-15 font-sans">
        {events.map((e) => (
          <div
            key={e.publishedOn}
            className="border-none rounded-t-2xl rounded-b-lg flex flex-col justify-between bg-stone-200 hover:bg-amber-400 overflow-hidden hover:translate-y-[-5px] transform-transition duration-300"
            onClick={() => handleEventClick(event)}
          >
            <img src={e.mainImage} className="w-auto h-[200px] mb-2" />
            {/* <a href={event.link} target="_blank" rel="noopener noreferrer">
            {event.title}
          </a> */}
            <div className="px-2 mb-2">
              <p className="capitalize px-2 mb-3">{e.description}</p>
              <p className="flex items-end justify-end px-2 text-black/60">
                {e.publishedOn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViewEvents;
