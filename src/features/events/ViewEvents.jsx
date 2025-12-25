import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import EventsViewPage from "./EventsViewPage";
import { computedDescription, getData } from "../../utils/utils";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function ViewEvents({ type, ModalContext }) {
  const { openModal } = useContext(ModalContext);
  const [data, setData] = useState(null);
  const [nextKey, setNextKey] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getData(
        "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/storeEvents"
      );
      // console.log("data-------", data);
      if (response?.Items && response.Items.length > 0) {
        setData(response.Items);
        console.log("first fetch data-------", response);
      }
      if (response.LastEvaluatedKey) {
        setNextKey(response.LastEvaluatedKey);
      } else {
        setNextKey(null);
      }
    }
    fetchData();
  }, []);

  function handleEventClick(event) {
    openModal(<EventsViewPage event={event} />);
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
    <section className="min-h-300 flex flex-col justify-between">
      <div>
        <div className="w-full h-25 font-extrabold tracking-wider text-5xl flex justify-center items-center text-amber-500">
          Main Events
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-10 sm:px-30 py-15 font-sans">
          {data?.length &&
            data.map((e) => (
              <div
                key={e.itemId}
                className="border-none rounded-t-2xl rounded-b-lg flex flex-col justify-between bg-stone-200 hover:bg-amber-400 overflow-hidden hover:-translate-y-1.25 transform-transition duration-300"
                onClick={() => handleEventClick(e)}
              >
                {console.log("event item-------", e.mainPhoto)}
                <img
                  src={e.mainPhoto}
                  alt={e.title}
                  className="w-auto h-50 mb-2 object-center"
                />
                {/* <a href={event.link} target="_blank" rel="noopener noreferrer">
            {event.title}
          </a> */}
                <div className="px-2 mb-2">
                  <p className="capitalize px-2 mb-3">
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
      <Pagination setData={setData} setNextKey={setNextKey} nextKey={nextKey} />
    </section>
  );
}

function Pagination({ setData, setNextKey, nextKey }) {
  const [prevKey, setPrevKey] = useState([]);

  async function handlePrev() {
    console.log("prevKey state-------", prevKey);
    if (!prevKey.length) return;
    // fetch data with prevKey
    console.log("prevKey-------", prevKey);
    const newPrevKeys = [...prevKey];
    newPrevKeys.splice(-1, 1);
    const lastKey = newPrevKeys[newPrevKeys.length - 1];
    console.log("lastKey-------", lastKey);
    const headers = lastKey
      ? { lastevaluatedkey: JSON.stringify(lastKey) }
      : {};
    const response = await getData(
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/storeEvents",
      { headers, method: "GET" }
    );
    if (response?.Items && response.Items.length > 0) {
      setData(response.Items);
      setPrevKey(newPrevKeys);
      console.log("prev fetch data-------", response);
    }
    if (response.LastEvaluatedKey) {
      setNextKey(response.LastEvaluatedKey);
    } else {
      setNextKey(null);
    }
  }

  async function handleNext() {
    if (!nextKey) return;
    setPrevKey((prev) => [...prev, nextKey]);
    // fetch data with nextKey
    console.log("nextKey-------", nextKey);
    const response = await getData(
      "https://18en4k39hg.execute-api.ap-south-2.amazonaws.com/default/storeEvents",
      { headers: { lastevaluatedkey: JSON.stringify(nextKey) }, method: "GET" }
    );
    if (response?.Items && response.Items.length > 0) {
      setData(response.Items);
      console.log("next fetch data-------", response);
    }
    if (response.LastEvaluatedKey) {
      setNextKey(response.LastEvaluatedKey);
    } else {
      setNextKey(null);
    }
  }

  return (
    <div className="flex justify-center gap-x-20 mb-5 text-md">
      <button
        onClick={handlePrev}
        className="flex justify-center items-center gap-2 border border-none rounded-3xl bg-stone-400 px-2 py-1 hover:bg-amber-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={prevKey.length === 0}
      >
        <FaArrowLeftLong /> Prev
      </button>
      <button
        onClick={handleNext}
        className="flex justify-center items-center gap-2 border border-none rounded-3xl bg-stone-400 px-2 py-1 hover:bg-amber-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={!nextKey}
      >
        Next <FaArrowRightLong />
      </button>
    </div>
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
          <p className="text-stone-800/80 group-hover/event:text-[#760b0b] font-bold text-sm font-mono flex justify-end sm:justify-start">
            {event.publishedDate.split("#")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewEvents;
