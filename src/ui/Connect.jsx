import ShowMap from "../components/ShowMap";
import GrevienceForm from "../components/GrevienceForm";

function Connect() {
  return (
    <div className="grid sm:grid-cols-2 justify-center items-center gap-y-6 pt-16">
      <GrevienceForm />
      <ShowMap />
    </div>
  );
}

export default Connect;
