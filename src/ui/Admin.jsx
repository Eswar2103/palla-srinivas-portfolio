import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex justify-center mt-15">
      <Link
        className="border rounded-lg bg-amber-300 px-2 py-1 hover:bg-amber-400"
        to="update-schedule"
      >
        Update schedule
      </Link>
    </div>
  );
}

export default Admin;
