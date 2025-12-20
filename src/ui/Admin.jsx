import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 mt-15">
      <Link
        className="border-none rounded-lg bg-amber-400 px-4 py-2 hover:bg-amber-500 text-center"
        to="/admin/add-news"
      >
        Add News
      </Link>
      <Link
        className="border-none rounded-lg bg-amber-400 px-4 py-2 hover:bg-amber-500 text-center"
        to="/admin/add-events"
      >
        Add Events
      </Link>
      <Link
        className="border-none rounded-lg bg-amber-400 px-4 py-2 hover:bg-amber-500 text-center"
        to="/admin/add-gallery-images"
      >
        Add Gallery Images
      </Link>
    </div>
  );
}

export default Admin;
