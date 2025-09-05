import ShowMap from "../components/ShowMap";
import GrevienceForm from "../components/GrevienceForm";

function Connect() {
  return (
    <div className="flex gap-x-[60px] items-center bg-yellow-300/10">
      <GrevienceForm />
      <ShowMap />
    </div>
  );
}

export default Connect;
