import DevelopmentInitiatives from "../components/DevelopmentInitiatives";
import Gallery from "../components/Gallery";
import Manifesto from "../components/Manifesto";

function MLA() {
  return (
    <div>
      <Manifesto />
      <DevelopmentInitiatives />
      <Gallery type="page" />
    </div>
  );
}

export default MLA;
