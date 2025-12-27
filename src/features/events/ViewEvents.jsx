import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import EventsViewCard from "./EventsViewCard.jsx";
import { computedDescription, getData } from "../../utils/utils";
import Pagination from "../../components/Pagination.jsx";
import { LoadingScreen } from "../utils/utils.jsx";

function ViewEvents({ type, ModalContext }) {
  const { openModal } = useContext(ModalContext);
  const [data, setData] = useState(null);
  const [nextKey, setNextKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const uri =
    "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/storeEvents";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getData(uri);
      if (response?.Items && response.Items.length > 0) {
        setData(response.Items);
      }
      if (response.LastEvaluatedKey) {
        setNextKey(response.LastEvaluatedKey);
      } else {
        setNextKey(null);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  function handleEventClick(event) {
    openModal(<EventsViewCard event={event} />);
  }

  if (type === "home") {
    return (
      <div className="bg-yellow-500/30 mt-15 px-25 sm:px-55 py-5 flex flex-col">
        <div className="font-bold uppercase pb-8 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1 tracking-widest">
            Events
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {data?.length &&
            data
              .slice(0, 4)
              .map((e) => (
                <EventCard
                  key={e.itemId}
                  event={e}
                  modalClick={() => handleEventClick(e)}
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
    <section className="min-h-300 flex flex-col justify-between">
      <div>
        <div className="w-full h-25 font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
          Main Events
        </div>
        {isLoading && <LoadingScreen text="Loading events..." />}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-10 sm:px-30 py-15 font-libre">
          {data?.length &&
            data.map((e) => (
              <div
                key={e.itemId}
                className="border-none rounded-t-2xl rounded-b-lg flex flex-col gap-y-2 justify-between bg-stone-200 hover:bg-amber-400 overflow-hidden hover:-translate-y-1.25 transform-transition duration-300"
                onClick={() => handleEventClick(e)}
              >
                {/* <img
                  src={e.mainPhoto}
                  alt={e.title}
                  className="w-auto h-50 mb-2 object-center"
                /> */}
                <ImageWithFloat src={e.mainPhoto} alt={e.title} />
                {/* <a href={event.link} target="_blank" rel="noopener noreferrer">
            {event.title}
          </a> */}
                <div className="px-2 mb-2">
                  <p className="capitalize px-2 mb-3 font-bold">
                    {computedDescription(e.description)}
                  </p>
                  <p className="flex items-end justify-end px-2 text-black/80">
                    {e.publishedDate.split("#")[0]}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Pagination
        uri={uri}
        setData={setData}
        setNextKey={setNextKey}
        nextKey={nextKey}
        setIsLoading={setIsLoading}
      />
    </section>
  );
}

function EventCard({ event, modalClick }) {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center"
      onClick={modalClick}
    >
      <div className="border border-none bg-white w-[350px] sm:w-150 flex flex-col sm:flex-row group/event cursor-pointer hover:translate-y-[-5px] transform-transition duration-300">
        <img
          src={event.mainPhoto}
          alt={event.title}
          className="h-40 w-auto p-2"
        />
        <div className="flex flex-col justify-between px-3 py-2 gap-y-2">
          <p className="font-extrabold group-hover/event:text-[#760b0b]">
            {computedDescription(event.description)}
          </p>
          <p className="text-stone-800/80 group-hover/event:text-[#760b0b] font-bold text-sm flex justify-end sm:justify-start">
            {event.publishedDate.split("#")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageWithFloat({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full max-h-[250px] bg-amber-100 ">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="w-4 h-4 bg-amber-300 rounded-full animate-bounce"></div>{" "}
            <div className="w-4 h-4 bg-amber-300 rounded-full animate-bounce delay-100"></div>{" "}
            <div className="w-4 h-4 bg-amber-300 rounded-full animate-bounce delay-200"></div>{" "}
          </div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full max-h-[250px] object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ViewEvents;
