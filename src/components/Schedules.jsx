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
        },
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "10:00 AM",
          venue: "68 వార్డ్ కాపుమింది చెరువు దగ్గర",
        },
        {
          name: "యువ షాపింగ్ మాల్ ఓపెనింగ్ ఆహ్వానం",
          time: "10:30 AM",
          venue:
            "డాక్టర్ బి.ఆర్ అంబేద్కర్ ఆడిటోరియం ఏఈ ఇంజనీరింగ్ కాలేజ్ క్యాంపస్",
        },
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "11:00 AM",
          venue: "65వ వార్డు వికాస్ నగర్",
        },
        {
          name: "పెదగంట్యాడ ఆరోగ్య కేంద్రంలో లాబరేటరీ భవనం ఓపెనింగ్ ఆహ్వానం",
          time: "11:30 AM",
          venue: "75 వార్డ్ నెల్లిముక్కు గవర్నమెంట్ హాస్పిటల్",
        },
        {
          name: " కమ్యూనిటీ హాల్ ఓపెనింగ్ ఆహ్వానం",
          time: "12:00 PM",
          venue: "76 వార్డ్ గాంధీనగర్ ఉడా  పేస్ 2",
        },
      ],
    },
    {
      date: "12 September (Friday)",
      place: "Gajuwaka, Visakhapatnam",
      events: [
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "09:00 AM",
          venue:
            "88 వార్డ్ కాపు జగరాజుపేట మరియు దువ్వాడ సెక్టర్ 1 యాదవ్ జగరాజుపేట",
        },
        {
          name: "జీవీఎంసీ వర్క్స్ శంకుస్థాపన ఆహ్వానం",
          time: "10:00 AM",
          venue: "85 వార్డ్ కాపుమింది చెరువు దగ్గర",
        },
        {
          name: "వి యెన్ ఎమ్ రాజు వర్ధంతి ఆహ్వానం",
          time: "12:00 PM",
          venue: "79వ వార్డ్ అగనంపూడి  శివాజీ నగర్ వారు గృహం నందు",
        },
        {
          name: "పులి అప్పలరెడ్డి వర్ధంతి ఆహ్వానం",
          time: "12:00 AM",
          venue: "75 వార్డ్ నెల్లిముక్కు గవర్నమెంట్ హాస్పిటల్",
        },
        {
          name: "నరేష్ బర్త్డే ఆహ్వానం",
          time: "12:00 PM",
          venue: "67 వార్డు హైస్కూల్ రోడ్డు",
        },
      ],
    },
  ];
  return (
    <section className="px-4 mb-5">
      <div className="font-bold uppercase pb-5 flex justify-center">
        <p className="text-center border rounded-2xl bg-yellow-400 px-5 py-1">
          Latest schedules
        </p>
      </div>
      <div className="grid-auto-fit gap-4">
        {schedules.map((s) => {
          const { date, place, events } = s;
          return (
            <div key={date} className="border rounded-2xl p-4">
              <p className="font-bold text-center">{date}</p>
              <div className="flex justify-center">
                <p className="font-bold">{place}</p>
              </div>
              {events.map((e) => (
                <div key={e.time} className="py-2">
                  {console.log("e----", JSON.stringify(e))}
                  <div className="flex">
                    <p className="font-semibold basis-15">Event:</p>
                    <p>{e.name}</p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold basis-15">Timing:</p>
                    <p>{e.time}</p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold basis-15">Venue:</p>
                    <p>{e.venue}</p>
                  </div>
                  <div className="text-center">
                    ---------------- X ----------------
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Schedules;
