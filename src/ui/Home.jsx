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
    </>
  );
}

export default Home;
