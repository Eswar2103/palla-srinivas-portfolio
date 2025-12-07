import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 mt-15">
      <Link
        className="border-none rounded-lg bg-amber-300 px-2 py-1 hover:bg-amber-400"
        to="add-news"
      >
        Add news
      </Link>
      <Link
        className="border-none rounded-lg bg-amber-300 px-2 py-1 hover:bg-amber-400"
        to="add-events"
      >
        Add Events
      </Link>
      <Link
        className="border-none rounded-lg bg-amber-300 px-2 py-1 hover:bg-amber-400"
        to="add-gallery-images"
      >
        Add Gallery images
      </Link>
    </div>
  );
}

export default Admin;
