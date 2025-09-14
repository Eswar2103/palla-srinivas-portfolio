import { Link } from "react-router-dom";
import Biography from "../components/Biography";
import Corousel from "../components/Corousel";
import News from "../components/News";
import Schedules from "../components/Schedules";
// import Guarantees from "../components/guarantees";

function Home() {
  return (
    <>
      <Corousel />
      {/* <Guarantees /> */}
      <Schedules />
      <News />
      <div className="font-bold uppercase pt-15 flex justify-center">
        <p className="text-center border rounded-2xl bg-yellow-400 px-5 py-1">
          Biography
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <Biography />
        <p className="">
          <Link
            to="/about"
            className="uppercase text-amber-600 font-bold hover:text-amber-500"
          >
            click here
          </Link>{" "}
          to know more details about <br />
          Palla Srinivasa Rao
        </p>
      </div>
    </>
  );
}

export default Home;
