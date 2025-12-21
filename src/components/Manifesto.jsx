import { FaRegCheckCircle } from "react-icons/fa";

function Manifesto() {
  const agendas = [
    {
      agenda: "Promised to fight for stopping vizag steel plant privatization.",
      url: "https://www.facebook.com/share/v/1BJcDKNkLd/",
    },

    {
      agenda: "Removal of Aganampudi NH 5 toll gate.",
      url: "https://www.facebook.com/share/v/15TMnUUkqz/",
    },

    {
      agenda: "Rajiv Gruha Kalpa Houses allotment to poor people.",
      url: "https://www.facebook.com/share/v/1AGS7rBWod/",
    },
    {
      agenda:
        "Promised to establish Polytechnic and Degree colleges in Gajuwaka constituency.",
      url: "https://www.facebook.com/share/v/1CXaexmMQJ/",
    },
    {
      agenda:
        "Will Take appropriate action on controlling pollution which is due to GANGAVARAM PORT, for better livelihood of Gangavaram people.",
      url: "https://www.facebook.com/share/v/1BUENK5HKc/",
    },
    {
      agenda:
        "Promised to work for betterment of basic amenities to all the people of gajuwaka.",
      url: "https://www.facebook.com/share/v/1BHbd3p9SS/",
    },
    {
      agenda:
        "Water and other basic amenities problems in Hill areas would be resolved on war foot basis.",
      url: "https://www.facebook.com/share/v/17J6PGPx5K/",
    },
  ];
  return (
    <div>
      <p className="font-bold  text-3xl sm:text-4xl text-center mt-6 mb-2">
        Mana Gajuwaka
      </p>
      <div className="mx-5 sm:mx-35 border border-none rounded-2xl bg-stone-50 shadow-xl/30 py-5">
        <p className="font-bold tracking-wide text-2xl sm:text-3xl text-center mb-5">
          Mana Manifesto
        </p>
        {/* <div className="flex justify-center">
          <div className="px-4 sm:px-35 flex flex-col justify-center mt-7 gap-y-5">
            {agendas.map((a, i) => {
              return (
                <div
                  key={a.url}
                  className={`bg-stone-200 px-5 py-2 border-t-2 rounded-2xl shadow-md transition-transform duration-300 ease-in-out 
            hover:-translate-y-2 hover:shadow-xl`}
                  style={{ borderColor: `${a.color}` }}
                >
                  <p className="text-blue-600 text-md sm:text-[18px]">
                    Agenda {i + 1}
                  </p>
                  <div className="text-center text-md sm:text-[18px]">
                    {a.agenda}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 px-5 tracking-wide">
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[0].agenda} />
            </div>
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[1].agenda} />
            </div>
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[2].agenda} />
            </div>
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[3].agenda} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-3 sm:px-10">
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[4].agenda} />
            </div>
            <div className="p-3 rounded flex justify-center items-center">
              <Formatter t={agendas[5].agenda} />
            </div>
            <div className="p-2 rounded flex justify-center items-center">
              <Formatter t={agendas[6].agenda} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Formatter({ t }) {
  return (
    <div className="flex justify-center items-center gap-x-3 text-md">
      <p>
        <FaRegCheckCircle />
      </p>
      <p>{t}</p>
    </div>
  );
}

export default Manifesto;
