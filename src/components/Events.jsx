import { Link } from "react-router-dom";
import { EventCard } from "./ComponentUtils";

function Events() {
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

  const eventsToShow = events.slice(0, 4);

  return (
    <section className="bg-yellow-300/25 mt-15">
      <div className="px-25 sm:px-55 py-5 flex flex-col">
        <div className="font-bold uppercase pb-8 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1 tracking-widest">
            Events
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {eventsToShow.map((event) => (
            <EventCard key={event.description} event={event} />
          ))}
        </div>
        <Link
          className="text-red-600 font-bold text-center tracking-wider mt-4 hover:underline cursor-pointer uppercase"
          to="/events"
        >
          MORE Events
        </Link>
      </div>
    </section>
  );
}

export default Events;
