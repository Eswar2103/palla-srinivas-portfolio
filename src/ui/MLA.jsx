import DevelopmentInitiatives from "../components/DevelopmentInitiatives";
import Manifesto from "../components/Manifesto";

function MLA() {
  const agendas = [
    {
      agenda:
        "Water and other basic amenities problems in Hill areas would be resolved on war foot basis.",
      url: "https://www.facebook.com/share/v/17J6PGPx5K/",
      color: "red",
    },
    {
      agenda: "Removal of Aganampudi NH 5 toll gate.",
      url: "https://www.facebook.com/share/v/15TMnUUkqz/",
      color: "purple",
    },
    {
      agenda: "Rajiv Gruha Kalpa Houses allotment to poor people.",
      url: "https://www.facebook.com/share/v/1AGS7rBWod/",
      color: "green",
    },
    {
      agenda:
        "Will Take appropriate action on controlling pollution which is due to GANGAVARAM PORT, for better livelihood of Gangavaram people.",
      url: "https://www.facebook.com/share/v/1BUENK5HKc/",
      color: "blue",
    },
    {
      agenda:
        "Promised to establish Polytechnic and Degree colleges in Gajuwaka constituency.",
      url: "https://www.facebook.com/share/v/1CXaexmMQJ/",
      color: "pink",
    },
    {
      agenda:
        "Promised to work for betterment of basic amenities to all the people of gajuwaka.",
      url: "https://www.facebook.com/share/v/1BHbd3p9SS/",
      color: "orange",
    },
    {
      agenda: "Promised to fight for stopping vizag steel plant privatization.",
      url: "https://www.facebook.com/share/v/1BJcDKNkLd/",
      color: "green",
    },
  ];

  return (
    <div>
      <Manifesto />
      <DevelopmentInitiatives />
      <p className="text-center font-bold mt-10">
        Photo gallery section coming soon.
      </p>
    </div>
  );
}

export default MLA;
