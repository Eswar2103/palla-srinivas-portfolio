import PhotoView from "../gallery/PhotoView";

function EventsViewPage({ event }) {
  const { title, description, coverPhoto, photos, publishedOn } = event;

  return (
    <section aria-label="Events modal view">
      <div className="flex justify-between gap-x-2">
        <p className="text-left font-bold text-md sm:text-3xl mb-5">{title}</p>
        <div className="flex flex-col text-xs w-50 justify-end items-end pb-3">
          <p>Published on</p>
          <p className="font-sans font-bold">{publishedOn}</p>
        </div>
      </div>
      <div>
        <img src={coverPhoto} alt={title} className="w-full h-auto mb-4" />
      </div>
      <div className="px-4 text-justify mb-5 text-sm sm:text-lg">
        {description}
      </div>
      {photos.length > 0 && (
        <p className="text-[#9f1a1a] mb-3 font-bold">Event photos:</p>
      )}
      <PhotoView photos={photos} />
    </section>
  );
}

export default EventsViewPage;
