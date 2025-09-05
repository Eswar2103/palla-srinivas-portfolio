import { useState } from "react";
import Timeline from "../components/Timeline";
import { SocialMediaLinks } from "./utils";

function About() {
  const insta =
    "https://www.instagram.com/palla_srinivas_tdp?igsh=MTRvMGc1ZWZpNTFqaQ";
  const fb = "https://www.facebook.com/share/19fkMd55UU/";
  const x = "https://x.com/Pallasrinivas4u?t=kX_PeiyuX5qX2i-Di0qLiA&s=08";
  const about = {
    mla: (
      <>
        <p className="capitalize text-4xl text-amber-500 font-bold mb-8">
          Palla srinivas rao
          <span className="text-sm text-black"> - A People&#8217;s Leader</span>
        </p>
        <p>
          Born to the legacy of his father, Palla Simhachalam, Mr. Srinivasarao
          entered politics with a vision for state development. Through decades
          of committed service, he became a symbol of the people&#8217;s trust.
          From contesting as a first-time MP in 2009 to winning as MLA from
          Gajuwaka in 2014 with a massive majority, he has consistently
          delivered governance with dedication and integrity.
          <br />
          <br />
          In the 2024 elections, he achieved a historic victory with the largest
          majority in Andhra Pradesh—95,235 votes—and was appointed State
          President of the Andhra Pradesh Telugu Desam Party by the
          party&#8217;s national president, Nara Chandrababu Naidu. This
          milestone is not just a personal triumph—it is a testament to the
          faith and love of the people.
          <br />
          <br /> A true people&#8217;s leader, Mr. Palla Srinivasarao continues
          to stand as a beacon of courage, service, and steadfast devotion,
          forging an enduring bond with the people of Andhra Pradesh.
          <br />
          <br />
          &quot;Visakhapatnam Steel is the Right of the Andhras&quot; — not just
          a slogan, but the heartbeat of every Andhra. To defend this right from
          private interests, Mr. Palla Srinivasarao undertook a seven-day hunger
          strike in 2021, a righteous protest that became a symbol of honor and
          self-respect for the people of Visakhapatnam.
          <br />
          <br />
          Known for his calm and simple demeanor, his unwavering resolve and
          fearless dedication redefine leadership. For him, politics is not a
          throne of power—it is service. Taking the people&#8217;s problems and
          the struggles of party workers as his own, he travels any distance to
          find solutions. “Gentle in spirit, yet courageous when needed—standing
          with the people, among the people, and for the people”—this defines
          his leadership.
        </p>
      </>
    ),
    president: (
      <>
        <p className="capitalize text-4xl text-amber-500 font-bold mb-8">
          Palla srinivas rao
        </p>
        <p>
          As State President of the Telugu Desam Party, Palla Srinivasarao has
          redefined leadership with vision and action. He made grievance
          redressal simple and effective, expanded party membership to an
          unprecedented one crore, and strengthened the cadre by uniting leaders
          and workers at every level.
          <br />
          <br /> Through the Prajadarbar initiative, he brought power closer to
          the people, ensuring that MLAs and MPs remain accessible to address
          public concerns. Under his dynamic leadership, the party successfully
          conducted the historic Mahanadu in Kadapa and achieved a stunning
          victory in the ZPTC elections in the opposition&#8217;s own
          stronghold.
          <br />
          <br /> More than a leader, Srinivasarao is a symbol of courage,
          service, and trust. He carries the people&#8217;s hopes in his heart
          and their struggles on his shoulders. His journey proves that true
          leadership is not about power, but about lifting people, strengthening
          teams, and turning challenges into victories.
        </p>
      </>
    ),
  };
  const [aboutOf, setAboutOf] = useState("mla");
  return (
    <div className="py-8 bg-yellow-300/10">
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full h-[380px] w-[380px] mb-10"
            src="/media.jpg"
          />
          <div className="flex gap-x-4 mb-5 font-bold">
            <button
              className={`border rounded-2xl py-1 px-2 cursor-pointer capitalize ${
                aboutOf === "mla"
                  ? "bg-red-500 text-white transition-all duration-300"
                  : "hover:bg-red-500 transition-all duration-300"
              }`}
              onClick={() => setAboutOf("mla")}
            >
              As MLA
            </button>
            <button
              className={`border rounded-2xl py-1 px-2 cursor-pointer capitalize ${
                aboutOf === "president"
                  ? "bg-red-500 text-white transition-all duration-300"
                  : "hover:bg-red-500 transition-all duration-300"
              }`}
              onClick={() => setAboutOf("president")}
            >
              As TDP state president
            </button>
          </div>
          <SocialMediaLinks insta={insta} fb={fb} x={x} entity="on" />
        </div>
        <div className="max-w-[600px]">{about[aboutOf]}</div>
      </div>
      <Timeline />
    </div>
  );
}

export default About;
