import { useState } from "react";

function PartyPresident() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="px-2 sm:px-40 py-10 text-lg">
      <header className="text-center bg-yellow-200 p-8 rounded-2xl shadow mb-5">
        <h1 className="text-4xl font-bold">Palla Srinivasa Rao</h1>
        <p className="text-lg mt-2">State President, Telugu Desam Party</p>
      </header>
      <div className="px-2 flex flex-col items-center gap-y-3 py-4 border-amber-500 border-4 rounded-3xl">
        <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6 px-2 justify-center">
          <img
            className="w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] rounded-4xl"
            src="/images/MLA.jpg"
            alt="palla srinivas and chandra babu naidu photo"
          />
          <img
            className="w-[400px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-4xl"
            src="/images/SPP_photo.jpg"
            alt="palla srinivas and lokesh photo"
          />
        </div>
        <p className="text-xl px-2 capitalize">
          Taken charge as <span className="font-bold">Telugu Desam Party</span>{" "}
          Andhra Pradesh state party president on{" "}
          <span className="text-red-700 uppercase font-bold">
            JUNE 28, 2024
          </span>
        </p>
      </div>
      <div className="px-4 sm:px-20 mt-6 text-lg/6 font-[500] text-justify">
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
      {/* <div className="flex justify-center items-center  font-serif py-14 gap-x-4">
        <div className="border border-gray-300 rounded-lg p-6 m-4 max-w-4xl w-full bg-yellow-50 shadow-xl shadow-amber-300 h-[250px]">
          <p className="font-extrabold text-center mb-5 text-2xl">Mission</p>
          <p className="tracking-wide">
            To serve the people of Gajuwaka with dedication and integrity,
            prioritizing their needs and concerns, and working tirelessly.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 m-4 max-w-4xl w-full bg-yellow-50 shadow-xl shadow-amber-300 h-[250px]">
          <p className="font-extrabold text-center mb-5 text-2xl">Vision</p>
          <p className="tracking-wide">
            Transforming Gajuwaka into a thriving, sustainable, and inclusive
            hub, where every citizen enjoys access to quality infrastructure,
            healthcare, education, and economic opportunities, while preserving
            the environment and promoting social justice.
          </p>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto px-3 py-6 space-y-10">
        <section>
          <div className="flex flex-col mb-6 justify-center items-center gap-y-1">
            <h2 className="text-4xl font-extrabold">Key Milestones</h2>
            <p className="w-[120px] bg-amber-400 h-1 rounded-2xl"></p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white shadow p-6 rounded-xl md:col-span-2 text-justify">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-x-3">
                <img src="/icons/announcement.png" className="w-12 h-12" />
                Super Six Super Hit Program (Anantapur)
              </h3>
              <p className="mb-2">
                A massive public meeting organized by TDP, highlighting welfare
                initiatives.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <ul>Over 3 lakh people attended.</ul>
                <ul>
                  Chief Minister Nara Chandrababu Naidu, Deputy CM Pawan Kalyan,
                  and BJP AP President Madhav participated.
                </ul>
                <ul>
                  Palla Srinivasa Rao played a key role in organizing and
                  promoting the event.
                </ul>
              </ul>
              <p className="mt-3 text-md font-bold text-purple-500 hover:underline">
                <a href="https://share.google/u4Kf0NkwKb4QjuJyY">
                  Read more: The Hindu Coverage
                </a>
              </p>
            </div>

            <div className="bg-white shadow p-6 rounded-xl text-justify">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-x-3">
                <img src="/icons/membership.png" className="w-12 h-12" />
                TDP 1 Crore Party Membership Drive
              </h3>
              <ul className="list-disc pl-5 space-y-4">
                <ul>
                  <strong>Innovative Use of Technology:</strong> Nara
                  Lokesh&#39;s idea to use of technology, enabled seamless
                  registration and provided real-time insights into grassroots
                  efforts. Srinivasa Rao played a crucial role in the TDP&#39;s
                  membership drive, which successfully registered over one crore
                  members. This achievement highlights the party&#39;s growing
                  influence and increasing support from the people.
                </ul>
                <ul>
                  <strong>Leadership and Coordination:</strong> His leadership
                  was instrumental in registering over 1 crore members.
                </ul>
                <ul>
                  <strong>Ground Monitoring:</strong> Personally monitored
                  progress and engaged with workers and leaders.
                </ul>
              </ul>
            </div>

            <div className="bg-white shadow p-6 rounded-xl text-justify">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-x-3">
                <img src="/icons/election.png" className="w-12 h-12" />
                Vizag Mayor Elections
              </h3>
              <p className="mb-2">
                Mastermind behind TDP-led alliance victory.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <ul>
                  <strong>Strategic Leadership:</strong> Palla Srinivasa Rao
                  spearheaded the alliance&#39;s strategy, building a strong
                  coalition with Jana Sena and BJP. He ensured corporators were
                  aligned and present for critical GVMC council meetings.
                </ul>
                <ul>
                  <strong>Key Architect:</strong> Palla Srinivasa Rao&#39;s
                  efforts were instrumental in passing the no- confidence motion
                  against the YSRCP mayor, paving the way for TDP&#39;s Peela
                  Srinivasa Rao to be elected unanimously as Mayor.
                </ul>
                <ul>
                  <strong>Party Strengthener:</strong> Palla Srinivasa Rao’s
                  grassroots efforts and leadership helped build the TDP&#39;s
                  presence in Vizag, contributing to the party&#39;s success in
                  the 2024 legislative assembly elections. <br />
                  Palla Srinivasa Rao&#39;s leadership and prioritization skills
                  were key to the alliance&#39;s victory, highlighting his
                  ability to bring together diverse groups and achieve a common
                  goal.
                </ul>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gray-100 shadow p-6 rounded-xl text-justify">
          <h3 className="text-xl font-bold flex items-center gap-x-3">
            <img src="/icons/meeting.png" className="w-12 h-12" />
            Mahanadu 2025 (Kadapa)
          </h3>
          <blockquote className="italic text-lg text-gray-700 my-3">
            Palla Srinivasa Rao played a crucial role in the success of Mahanadu
            in Kadapa, serving as the state president of the Telugu Desam Party
            (TDP).
          </blockquote>
          <ul className="list-disc pl-5 space-y-3">
            <ul>
              <strong>Leadership:</strong> Palla Srinivasa Rao led the
              coordination meeting at the Mahanadu venue, ensuring preparations
              were on track for the massive event, which drew a huge gathering
              of five lakh people on its last day.
            </ul>
            <ul>
              <strong>Organizational Skills:</strong> He oversaw the formation
              of committees to manage various aspects of the Mahanadu,
              highlighting his ability to organize and execute large-scale
              events.
            </ul>
            <ul>
              <strong>Strategic Planning:</strong> Palla Srinivasa Rao&#39;s
              experience and strategic thinking were instrumental in choosing
              Kadapa as the venue for Mahanadu, a decision that helped the TDP
              strengthen its presence in the region.
            </ul>
            <ul>
              <strong>Party Promotion:</strong> Through Mahanadu, Palla
              Srinivasa Rao promoted the TDP&#39;s ideology and vision,
              highlighting the party&#39;s commitment to the people of Andhra
              Pradesh.
            </ul>
            <ul>
              <strong>Community Engagement:</strong> His efforts ensured that
              the event was well-attended and engaging for the local community,
              fostering a sense of connection between the party and its
              supporters.
              <br /> Overall, Palla Srinivasa Rao&#39;s leadership and
              organizational skills were vital to the success of Mahanadu in
              Kadapa, demonstrating his importance within the TDP.
            </ul>
          </ul>
        </div>

        <div className="bg-white shadow p-6 rounded-xl text-justify">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-x-3">
            <img src="/icons/election.png" className="w-12 h-12" />
            Elections
          </h3>
          <h4 className="font-semibold">Graduate MLC Elections</h4>
          <ul className="list-disc pl-5 mb-3 space-y-3">
            <ul>
              <strong>Candidate Selection:</strong>
              Palla Srinivasa Rao announced the TDP candidates for the
              Krishna-Guntur and East Godavari-West Godavari graduate MLC seats.
              Alapati Rajendra Prasad was selected for the Interna l
              Krishna-Guntur seat, while Perabattula Rajasekhar contested the
              East Godavari-West Godavari district seat.
            </ul>
            <ul>
              <strong>TDP&#39;s Electoral Efforts:</strong> The TDP&#39;s
              efforts in the elections were focused on securing seats in the
              Andhra Pradesh Legislative Council, with Palla Srinivasa Rao&#39;s
              guidance playing a crucial role in the party&#39;s candidate
              selection and campaign.
            </ul>
          </ul>
          <h4 className="font-semibold">Local Body By-Elections</h4>
          <ul className="list-disc pl-5 space-y-1">
            <ul>
              Under his dynamic leadership, the party successfully conducted the
              historic Mahanadu in Kadapa and achieved a stunning victory in the
              ZPTC elections in the opposition&#39;s own stronghold.
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PartyPresident;
