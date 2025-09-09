import ShowMap from "../components/ShowMap";
import GrevienceForm from "../components/GrevienceForm";

function Connect() {
  return (
    <div className="flex gap-x-[60px] items-center">
      <GrevienceForm />
      <ShowMap />
    </div>
  );
}

export default Connect;
