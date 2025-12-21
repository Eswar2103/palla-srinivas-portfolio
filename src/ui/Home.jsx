// import { Link } from "react-router-dom";
// import Biography from "../components/Biography";
import Corousel from "../components/Corousel";
import Events from "../components/Events";
import Impact from "../components/Impact";
import News from "../components/News";
// import Schedules from "../components/Schedules";
import Speeches from "../components/Speeches";
// import Guarantees from "../components/guarantees";

function Home() {
  return (
    <>
      <Corousel />
      {/* <Guarantees /> */}
      <Speeches />
      <Impact />
      {/* <Schedules /> */}
      <News />
      <Events type="home" />
    </>
  );
}

export default Home;
