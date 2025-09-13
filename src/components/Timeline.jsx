import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Timeline() {
  const events = [
    {
      year: "2009",
      description: "Contested as MP from Vishakapatanam.",
    },
    {
      year: "2014",
      description:
        "Won in the Andhra Pradesh state elections as an MLA from Gajuwaka with 21,702 majority.",
    },
    {
      year: "2019",
      description: "Contested in state assembly elections and lost.",
    },
    {
      year: "2021",
      description:
        "February 2021, Lead a hunger strike against Vizag Steel plant privatization.",
    },
    {
      year: "2024",
      description:
        "Won in the Andhra Pradesh state elections as an MLA from Gajuwaka with the state highest majority of 95,235 votes.",
    },
    {
      year: "2024",
      description: "June, appointed as Telugu Desam Party state PRESIDENT.",
    },
  ];

  const cardWidth = 308;
  // const cardWidth = 250;
  // const visibleCards = 3;

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    function handleResize() {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = events.length - visibleCards;
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="mt-25 px-1 sm:px-0">
      <h2 className="text-2xl font-bold mb-8 text-amber-600 text-center">
        Journey
      </h2>
      <div className="flex justify-center items-center gap-x-0 sm:gap-x-8 h-auto">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="rounded-full bg-amber-400 hover:bg-amber-500 text-white px-3 py-3 disabled:opacity-50"
          aria-label="Previous"
        >
          <BsChevronCompactLeft
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}
          />
        </button>
        <div className="overflow-hidden w-full max-w-[930px] h-auto py-4">
          {/* <div className="overflow-x-scroll overflow-y-hidden flex items-center w-full max-w-[800px] h-[250px] px-4 py-8 border-4 border-red-800"> */}
          <div
            className="flex h-[250px] max-w-[930px] justify-evenly items-center px-0 gap-x-2 duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {events.map((event, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-start flex-shrink-0 h-[250px] w-[300px] px-2`}
                // className="flex flex-col items-center justify-center flex-shrink-0 w-[250px] h-[240px] py-4 border-2 border-green-600"
              >
                <div className="w-5 h-5 bg-amber-400 rounded-full border-4 border-white z-10"></div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-bold text-gray-500">
                    {event.year}
                  </p>
                  {/* <p className="font-semibold text-lg text-amber-700">
                    {event.title}
                  </p> */}
                  <p className="text-gray-700 font-semibold text-md sm:text-lg">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={index == maxIndex}
          className="rounded-full bg-amber-400 hover:bg-amber-500 text-white px-3 py-3 disabled:opacity-50"
          aria-label="Next"
        >
          <BsChevronCompactRight
            style={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Timeline;
