function GuaranteeCard({ item }) {
  function chooseStatusClass(status) {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-yellow-100 text-yellow-800";
      case "yet to start":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  }

  return (
    <div className="bg-stone-100 p-4 rounded-lg h-full min-h-[120px] flex flex-col justify-center gap-2">
      <div className="flex justify-between">
        <h3>{item.title}</h3>
        <p
          className={`capitalize border border-stone-100 rounded-2xl px-2 py-0.5 ${chooseStatusClass(
            item.status,
          )}`}
        >
          {item.status}
        </p>
      </div>
      <p>{item.description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${
            item.status === "completed" ? "bg-green-600" : "bg-blue-600"
          } h-2.5 rounded-full`}
          style={{ width: `${item.statusPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default GuaranteeCard;
