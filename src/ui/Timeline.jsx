import { useRef, useState } from "react";

function Timeline() {
  const events = [
    {
      year: "2025",
      title: "Started React Portfolio",
      description:
        "Began building my personal portfolio using React and Tailwind CSS.",
    },
    {
      year: "2024",
      title: "Joined TDP",
      description: "Became an active member of the Telugu Desam Party.",
    },
    {
      year: "2023",
      title: "Graduated",
      description: "Completed my degree in Computer Science.",
    },
    {
      year: "2022",
      title: "Internship",
      description: "Completed internship at XYZ Company.",
    },
    {
      year: "2021",
      title: "Hackathon Winner",
      description: "Won 1st place in ABC Hackathon.",
    },
    {
      year: "2020",
      title: "Started College",
      description: "Began undergraduate studies.",
    },
    {
      year: "2019",
      title: "High School",
      description: "Graduated from high school.",
    },
    {
      year: "2018",
      title: "Volunteering",
      description: "Volunteered at local NGO.",
    },
    {
      year: "2017",
      title: "Coding Club",
      description: "Joined school coding club.",
    },
    {
      year: "2016",
      title: "First Website",
      description: "Built my first website.",
    },
    {
      year: "2015",
      title: "Started Coding",
      description: "Wrote my first line of code.",
    },
    // Add more if needed
  ];

  const cardWidth = 240;
  const visibleCards = 4;
  const maxIndex = events.length - visibleCards;

  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-8 text-amber-600 text-center">
        Journey
      </h2>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="rounded-full bg-amber-400 hover:bg-amber-500 text-white px-3 py-1.5 shadow disabled:opacity-50"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="overflow-hidden flex w-full max-w-6xl px-2 pb-8">
          <div
            className="flex items-start duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
              minWidth: `${events.length * cardWidth}px`,
            }}
          >
            {events.map((event, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-shrink-0 w-56 mx-4 relative"
              >
                {/* Dot */}
                <div className="w-5 h-5 bg-amber-400 rounded-full border-4 border-white z-10"></div>
                {/* Content */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">{event.year}</p>
                  <p className="font-semibold text-lg text-amber-700">
                    {event.title}
                  </p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={index == maxIndex}
          className="rounded-full bg-amber-400 hover:bg-amber-500 text-white px-3 py-1.5 shadow disabled:opacity-50"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Timeline;
