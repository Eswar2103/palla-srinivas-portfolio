function Biography() {
  return (
    <div className="py-10 px-4 sm:px-30 flex flex-col justify-center items-center">
      <iframe
        className="w-[350px] h-[200px] sm:w-[650px] sm:h-[400px] shadow-xl/30"
        src="https://www.youtube.com/embed/L3jBZK-UjFo?si=MB58_h4P0EPXj2LT&amp;start=10"
        title="Palla Srinivas biography"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Biography;
