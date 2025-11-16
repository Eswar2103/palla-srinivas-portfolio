function EventCard({ event, modalClick }) {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center"
      onClick={modalClick}
    >
      <div className="border border-none bg-white w-[350px] sm:w-[600px] flex flex-col sm:flex-row group/event cursor-pointer hover:translate-y-[-5px] transform-transition duration-300">
        <img src={event.mainImage} className="h-40 w-auto p-2" />
        <div className="flex flex-col justify-between px-3 py-2 gap-y-2">
          <p className="font-extrabold group-hover/event:text-[#760b0b]">
            {event.description}
          </p>
          <p className="text-stone-800/50 group-hover/event:text-[#760b0b] font-bold text-sm font-mono flex justify-end sm:justify-start">
            {event.publishedOn}
          </p>
        </div>
      </div>
    </div>
  );
}

export { EventCard };
