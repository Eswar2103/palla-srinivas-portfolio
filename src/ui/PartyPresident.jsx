import { useState } from "react";

function PartyPresident() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="px-6 sm:px-40 py-10 text-lg">
      <header className="text-center bg-yellow-200 p-8 rounded-2xl shadow mb-5">
        <h1 className="text-4xl font-bold">Palla Srinivasa Rao</h1>
        <p className="text-lg mt-2">State President, Telugu Desam Party</p>
      </header>
      <div className="flex flex-col items-center gap-y-3 py-4 border-amber-500 border-4 rounded-2xl">
        <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6 px-2 justify-center">
          <img
            className="w-[400px] h-[350px] sm:w-[400px] sm:h-[400px]"
            src="./SPP2.jpg"
            alt="palla srinivas and chandra babu naidu photo"
          />
          <img
            className="w-[400px] h-[300px] sm:w-[400px] sm:h-[400px]"
            src="./SPP_photo.jpg"
            alt="palla srinivas and lokesh photo"
          />
        </div>
        <p className="text-xl px-2">
          Taken charge as <span className="font-bold">Telugu Desam Party</span>{" "}
          Andhra Pradesh state president on{" "}
          <span className="text-red-700 uppercase font-bold">
            JUNE 28, 2024
          </span>
        </p>
      </div>
      <div className="px-10 sm:px-20 mt-6 text-lg/6 font-[500]">
        <p>
          With the triumph victory as MLA with state highest majority in 2024
          General Elections, TDP Supremo and Chief Minister Shri Nara Chandra
          Babu Naidu Garu recognised the efforts of Palla Srinivasa Rao and
          appointed as Andhra Pradesh State Party President. Palla Srinivasa Rao
          assumed the office and taken charge as SPP on June28th 2024.
          <br />
          <br />
          As State President of the Telugu Desam Party, Palla Srinivasarao has
          redefined leadership with vision and action. He made grievance
          redressal simple and effective, expanded party membership to an
          unprecedented one crore, and strengthened the cadre by uniting leaders
          and workers at every level.
          <br />
        </p>
        {!showInfo && (
          <button
            className="text-red-500 cursor-pointer"
            onClick={() => setShowInfo(true)}
          >
            ...read more
          </button>
        )}
        {showInfo && (
          <p>
            <br /> Through the Prajadarbar initiative, he brought power closer
            to the people, ensuring that MLAs and MPs remain accessible to
            address public concerns. Under his dynamic leadership, the party
            successfully conducted the historic Mahanadu in Kadapa and achieved
            a stunning victory in the ZPTC elections in the opposition&#8217;s
            own stronghold.
            <br />
            <br /> More than a leader, Srinivasarao is a symbol of courage,
            service, and trust. He carries the people&#8217;s hopes in his heart
            and their struggles on his shoulders. His journey proves that true
            leadership is not about power, but about lifting people,
            strengthening teams, and turning challenges into victories.
          </p>
        )}
        {showInfo && (
          <button
            className="text-red-500 cursor-pointer"
            onClick={() => setShowInfo(false)}
          >
            ...read less
          </button>
        )}
      </div>
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-6 underline">
            Key Milestones
          </h2>
          <div className="grid gap-6">
            <div className="bg-white shadow p-6 rounded-xl md:col-span-2">
              <h3 className="text-xl font-bold mb-3">
                Super Six Super Hit Program (Anantapur)
              </h3>
              <p className="mb-2">
                A massive public meeting organized by TDP, highlighting welfare
                initiatives.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Over 3 lakh people attended.</li>
                <li>
                  Chief Minister Nara Chandrababu Naidu, Deputy CM Pawan Kalyan,
                  and BJP AP President Madhav participated.
                </li>
                <li>
                  Palla Srinivasa Rao played a key role in organizing and
                  promoting the event.
                </li>
              </ul>
              <p className="mt-3 text-sm text-blue-600 underline">
                <a href="https://share.google/u4Kf0NkwKb4QjuJyY">
                  Read more: The Hindu Coverage
                </a>
              </p>
            </div>

            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                TDP 1 Crore Party Membership Drive
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Innovative Use of Technology:</strong> Nara
                  Lokesh&#39;s idea to use of technology, enabled seamless
                  registration and provided real-time insights into grassroots
                  efforts. Srinivasa Rao played a crucial role in the TDP&#39;s
                  membership drive, which successfully registered over one crore
                  members. This achievement highlights the party&#39;s growing
                  influence and increasing support from the people.
                </li>
                <li>
                  <strong>Leadership and Coordination:</strong> His leadership
                  was instrumental in registering over 1 crore members.
                </li>
                <li>
                  <strong>Ground Monitoring:</strong> Personally monitored
                  progress and engaged with workers and leaders.
                </li>
              </ul>
            </div>

            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Vizag Mayor Elections</h3>
              <p className="mb-2">
                Mastermind behind TDP-led alliance victory.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Strategic Leadership:</strong> Palla Srinivasa Rao
                  spearheaded the alliance&#39;s strategy, building a strong
                  coalition with Jana Sena and BJP. He ensured corporators were
                  aligned and present for critical GVMC council meetings.
                </li>
                <li>
                  <strong>Key Architect:</strong> Palla Srinivasa Rao&#39;s
                  efforts were instrumental in passing the no- confidence motion
                  against the YSRCP mayor, paving the way for TDP&#39;s Peela
                  Srinivasa Rao to be elected unanimously as Mayor.
                </li>
                <li>
                  <strong>Party Strengthener:</strong> Palla Srinivasa Rao’s
                  grassroots efforts and leadership helped build the TDP&#39;s
                  presence in Vizag, contributing to the party&#39;s success in
                  the 2024 legislative assembly elections. <br />
                  Palla Srinivasa Rao&#39;s leadership and prioritization skills
                  were key to the alliance&#39;s victory, highlighting his
                  ability to bring together diverse groups and achieve a common
                  goal.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 shadow p-6 rounded-xl">
          <h3 className="text-xl font-bold">Mahanadu 2025 (Kadapa)</h3>
          <blockquote className="italic text-lg text-gray-700 my-3">
            Palla Srinivasa Rao played a crucial role in the success of Mahanadu
            in Kadapa, serving as the state president of the Telugu Desam Party
            (TDP).
          </blockquote>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Leadership:</strong> Palla Srinivasa Rao led the
              coordination meeting at the Mahanadu venue, ensuring preparations
              were on track for the massive event, which drew a huge gathering
              of five lakh people on its last day.
            </li>
            <li>
              <strong>Organizational Skills:</strong> He oversaw the formation
              of committees to manage various aspects of the Mahanadu,
              highlighting his ability to organize and execute large-scale
              events.
            </li>
            <li>
              <strong>Strategic Planning:</strong> Palla Srinivasa Rao&#39;s
              experience and strategic thinking were instrumental in choosing
              Kadapa as the venue for Mahanadu, a decision that helped the TDP
              strengthen its presence in the region.
            </li>
            <li>
              <strong>Party Promotion:</strong> Through Mahanadu, Palla
              Srinivasa Rao promoted the TDP&#39;s ideology and vision,
              highlighting the party&#39;s commitment to the people of Andhra
              Pradesh.
            </li>
            <li>
              <strong>Community Engagement:</strong> His efforts ensured that
              the event was well-attended and engaging for the local community,
              fostering a sense of connection between the party and its
              supporters.
              <br /> Overall, Palla Srinivasa Rao&#39;s leadership and
              organizational skills were vital to the success of Mahanadu in
              Kadapa, demonstrating his importance within the TDP.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3">Elections</h3>
          <h4 className="font-semibold underline">Graduate MLC Elections</h4>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li>
              <strong>Candidate Selection:</strong>
              Palla Srinivasa Rao announced the TDP candidates for the
              Krishna-Guntur and East Godavari-West Godavari graduate MLC seats.
              Alapati Rajendra Prasad was selected for the Interna l
              Krishna-Guntur seat, while Perabattula Rajasekhar contested the
              East Godavari-West Godavari district seat.
            </li>
            <li>
              <strong>TDP&#39;s Electoral Efforts:</strong> The TDP&#39;s
              efforts in the elections were focused on securing seats in the
              Andhra Pradesh Legislative Council, with Palla Srinivasa Rao&#39;s
              guidance playing a crucial role in the party&#39;s candidate
              selection and campaign.
            </li>
          </ul>
          <h4 className="font-semibold underline">Local Body By-Elections</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Under his dynamic leadership, the party successfully conducted the
              historic Mahanadu in Kadapa and achieved a stunning victory in the
              ZPTC elections in the opposition&#39;s own stronghold.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PartyPresident;
