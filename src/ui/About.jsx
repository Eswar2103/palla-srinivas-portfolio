import { useEffect, useState } from "react";
import Timeline from "../components/Timeline";
import { SocialMediaLinks } from "../features/utils/utils";
import Biography from "../components/Biography";

function About() {
  const [showText, setShowText] = useState(false);

  const aim = {
    mission:
      "To serve the people with integrity, compassion, and vision,prioritizing the well-being of the most vulnerable, promoting social justice, and driving economic growth through transparent, accountable, and collaborative governance.",
    vision:
      "Transforming Gajuwaka into a thriving, sustainable, and inclusive hub, where every citizen enjoys access to quality infrastructure, healthcare, education, and economic opportunities, while preserving the environment and promoting social justice.",
  };

  useEffect(() => {
    setShowText(true);
  }, []);

  const insta =
    "https://www.instagram.com/palla_srinivas_tdp?igsh=MTRvMGc1ZWZpNTFqaQ";
  const fb = "https://www.facebook.com/share/19fkMd55UU/";
  const x = "https://x.com/Pallasrinivas4u?t=kX_PeiyuX5qX2i-Di0qLiA&s=08";
  return (
    <div className="">
      {/* grid-row sm:grid-row md:grid-row */}
      <div className="pt-18 grid sm:grid-cols-2 gap-y-8 justify-center">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-50 w-50 sm:h-95 sm:w-100 mb-10"
            src="/images/media.jpg"
            alt="Palla Srinivas Rao"
          />
          <div>
            <p className="text-xl mb-3">Follow on</p>
            <SocialMediaLinks insta={insta} fb={fb} x={x} entity="on" />
          </div>
        </div>
        <div className="flex justify-center sm:justify-start">
          <div className="flex flex-col justify-center items-center w-3/4">
            <p
              className={`capitalize text-2xl sm:text-4xl text-amber-500 font-extrabold transition-all ease-in duration-700 ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Palla srinivas rao
              <span className="text-sm text-black">
                - A People&#8217;s Leader
              </span>
            </p>
            <div className="text-md font-semibold sm:text-lg py-8 text-justify">
              <p
                className={`transition-all ease-in duration-1000 ${
                  showText
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Born to the legacy of his father, Palla Simhachalam, Mr.
                Srinivasarao entered politics with a vision for state
                development. Through decades of committed service, he became a
                symbol of the people&#8217;s trust. From contesting as a
                first-time MP in 2009 to winning as MLA from Gajuwaka in 2014
                with a massive majority, he has consistently delivered
                governance with dedication and integrity.
                <br />
                <br />
                In the 2024 elections, he achieved a historic victory with the
                largest majority in Andhra Pradesh—95,235 votes—and was
                appointed State President of the Andhra Pradesh Telugu Desam
                Party by the party&#8217;s national president, Nara Chandrababu
                Naidu. This milestone is not just a personal triumph—it is a
                testament to the faith and love of the people.
                <br />
                <br /> A true people&#8217;s leader, Mr. Palla Srinivasarao
                continues to stand as a beacon of courage, service, and
                steadfast devotion, forging an enduring bond with the people of
                Andhra Pradesh.
                <br />
                <br />
                &quot;Visakhapatnam Steel is the Right of the Andhras&quot; —
                not just a slogan, but the heartbeat of every Andhra. To defend
                this right from private interests, Mr. Palla Srinivasarao
                undertook a seven-day hunger strike in 2021, a righteous protest
                that became a symbol of honor and self-respect for the people of
                Visakhapatnam.
                <br />
                <br />
                Known for his calm and simple demeanor, his unwavering resolve
                and fearless dedication redefine leadership. For him, politics
                is not a throne of power—it is service. Taking the
                people&#8217;s problems and the struggles of party workers as
                his own, he travels any distance to find solutions. “Gentle in
                spirit, yet courageous when needed—standing with the people,
                among the people, and for the people”—this defines his
                leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="font-bold uppercase pb-4 pt-10 flex justify-center">
          <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
            Biography
          </p>
        </div>
        <Biography />
      </div>
      <div className="flex flex-col justify-center items-center px-10 sm:px-50 font-serif py-14 text-md sm:text-xl gap-y-8">
        <div className="border border-gray-300 rounded-lg p-6 m-4 max-w-4xl w-full bg-yellow-50 shadow-xl shadow-amber-300 ">
          <p className="font-extrabold text-center mb-5 text-2xl">Mission</p>
          <p className="tracking-wide">{aim.mission}</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 m-4 max-w-4xl w-full bg-yellow-50 shadow-xl shadow-amber-300">
          <p className="font-extrabold text-center mb-5 text-2xl">Vision</p>
          <p className="tracking-wide">{aim.vision}</p>
        </div>
      </div>
      <Timeline />
    </div>
  );
}

export default About;
