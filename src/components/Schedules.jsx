import { FaLocationDot } from "react-icons/fa6";
import Calender from "./Calendar";

function Schedules() {
  const schedules = [
    {
      date: "13 September (Saturday)",
      place: "Gajuwaka, Visakhapatnam",
      events: [
        {
          name: "Appusma ఎయిడెడ్ స్కూల్ బెస్ట్ టీచర్స్ అవార్డ్స్ ఫంక్షన్ హాల్",
          time: "9:30 AM",
          venue:
            "డాక్టర్ బి.ఆర్ అంబేద్కర్ ఆడిటోరియం ఏఈ ఇంజనీరింగ్ కాలేజ్ క్యాంపస్",
          type: "Award function",
        },
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "10:00 AM",
          venue: "68 వార్డ్ కాపుమింది చెరువు దగ్గర",
          type: "Foundation stone laying",
        },
        {
          name: "యువ షాపింగ్ మాల్ ఓపెనింగ్ ఆహ్వానం",
          time: "10:30 AM",
          venue:
            "డాక్టర్ బి.ఆర్ అంబేద్కర్ ఆడిటోరియం ఏఈ ఇంజనీరింగ్ కాలేజ్ క్యాంపస్",
          type: "Opening ceremony",
        },
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "11:00 AM",
          venue: "65వ వార్డు వికాస్ నగర్",
          type: "Foundation stone laying",
        },
        {
          name: "పెదగంట్యాడ ఆరోగ్య కేంద్రంలో లాబరేటరీ భవనం ఓపెనింగ్ ఆహ్వానం",
          time: "11:30 AM",
          venue: "75 వార్డ్ నెల్లిముక్కు గవర్నమెంట్ హాస్పిటల్",
          type: "Opening ceremony",
        },
        {
          name: "కమ్యూనిటీ హాల్ ఓపెనింగ్ ఆహ్వానం",
          time: "12:00 PM",
          venue: "76 వార్డ్ గాంధీనగర్ ఉడా  పేస్ 2",
          type: "Opening ceremony",
        },
      ],
    },
    // {
    //   date: "12 September (Friday)",
    //   place: "Gajuwaka, Visakhapatnam",
    //   events: [
    //     {
    //       name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
    //       time: "09:00 AM",
    //       venue:
    //         "88 వార్డ్ కాపు జగరాజుపేట మరియు దువ్వాడ సెక్టర్ 1 యాదవ్ జగరాజుపేట",
    //     },
    //     {
    //       name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
    //       time: "10:00 AM",
    //       venue: "85 వార్డ్ కాపుమింది చెరువు దగ్గర",
    //     },
    //     {
    //       name: "వి యెన్ ఎమ్ రాజు వర్ధంతి ఆహ్వానం",
    //       time: "12:00 PM",
    //       venue: "79వ వార్డ్ అగనంపూడి  శివాజీ నగర్ వారు గృహం నందు",
    //     },
    //     {
    //       name: "పులి అప్పలరెడ్డి వర్ధంతి ఆహ్వానం",
    //       time: "12:00 AM",
    //       venue: "75 వార్డ్ నెల్లిముక్కు గవర్నమెంట్ హాస్పిటల్",
    //     },
    //     {
    //       name: "నరేష్ బర్త్డే ఆహ్వానం",
    //       time: "12:00 PM",
    //       venue: "67 వార్డు హైస్కూల్ రోడ్డు",
    //     },
    //   ],
    // },
  ];
  return (
    <section className="mb-5 px-3 sm:px-8 py-10">
      <div className="font-bold uppercase pb-5 flex justify-center">
        <p className="text-center border rounded-2xl bg-yellow-400 px-5 py-1">
          Latest schedules
        </p>
      </div>
      <div className="border border-none">
        <div className="grid-auto-fit gap-4">
          {schedules.map((s) => {
            const { date, place, events } = s;
            return (
              <div key={date} className="grid sm:grid-cols-3 grid-rows">
                <div className="flex flex-col custom-calendar gap-y-4 justify-center items-center p-4 bg-stone-200 ">
                  <p className="font-semibold text-xl">
                    Select the date to get the schedule
                  </p>
                  <Calender />
                </div>
                <div className="col-span-2 pt-5 px-2 sm:px-12 bg-stone-100">
                  <p className="font-bold text-center">{date}</p>
                  <div className="flex justify-center items-center mb-4">
                    <p className="font-bold uppercase">{place}</p>
                  </div>
                  <div className="divide-y divide-stone-500 divide-solid">
                    {events.map((e) => (
                      <div
                        key={e.time}
                        className="py-2 flex justify-between gap-x-2"
                      >
                        <div className="flex items-center justify-center">
                          <strong>{e.time}</strong>
                        </div>
                        <div className="text-center flex flex-col gap-y-2">
                          <strong>{e.name}</strong>
                          <div className="flex items-start sm:items-center">
                            <span className="text-amber-400">
                              <FaLocationDot className="font-light" />
                            </span>
                            <p className="text-stone-700/50 sm:text-stone-700/80">
                              {e.venue}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="text-blue-600 border border-none bg-blue-200 px-3 py-1">
                            {e.type}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Schedules;
