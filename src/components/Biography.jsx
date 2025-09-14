function Biography() {
  return (
    <div className="py-10 px-4 sm:px-30 flex flex-col justify-center items-center">
      {/* <div className="font-bold uppercase pb-10 flex justify-center">
        <p className="text-center border rounded-2xl bg-yellow-400 px-5 py-1">
          Biography
        </p>
      </div> */}
      <iframe
        className="w-[350px] h-[200px] sm:w-[650px] sm:h-[400px]"
        src="https://www.youtube.com/embed/L3jBZK-UjFo?si=MB58_h4P0EPXj2LT&amp;start=10"
        title="Palla Srinivas biography"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Biography;
