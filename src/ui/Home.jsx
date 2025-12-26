import Corousel from "../components/Corousel";
import Events from "../features/events/Events";
import Impact from "../components/Impact";
import News from "../features/news/News";
import Speeches from "../components/Speeches";

function Home() {
  return (
    <>
      <Corousel />
      <Speeches />
      <Impact />
      <News type="home" />
      <Events type="home" />
    </>
  );
}

export default Home;
