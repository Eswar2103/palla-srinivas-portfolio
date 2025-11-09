function DevelopmentInitiatives() {
  return (
    <div className="mx-5 sm:mx-35 border border-none rounded-2xl bg-stone-50 shadow-xl/30 py-5 mt-15 px-4">
      <p className="font-bold text-2xl sm:text-3xl text-center">
        Key Developmental Initiatives
      </p>
      <p className="px-0 mt-3 text-md sm:text-[16px] mb-4 tracking-wide">
        <strong>
          Under the Leadership of MLA Shri Palla Srinivasa Rao garu, Gajuwaka is
          undergoing significant development, with various infrastructure
          projects and real estate initiatives.
        </strong>
      </p>
      <section className="grid sm:grid-cols-2 grid-cols-1 grid-rows-3 gap-x-4 gap-y-4">
        <div className="bg-gray-200 shadow p-2 rounded-xl row-span-2">
          <p className="font-bold mt-4 text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
            <img src="./infra.png" className="w-12 h-12" />
            Infrastructure Projects:
          </p>
          <ul className="text-md sm:text-[16px]">
            Construction of VRCC drains in different areas, such as from
            D.No.2-7-1 to near Sony Grand and from Vivekananda Colony to Gail
            compound wall, with values of ₹1.34 crore and ₹1.07 crore,
            respectively
            <br />
            <br />
            Construction of Retaining Wall: A retaining wall is being built from
            (link unavailable)-41-21/1 to 23-41-21/3 at Dayal Nagar Lova in Ward
            74 of Gajuwaka, with a value of ₹15.90 lakh.
            <br />
            <br />
            Laying of internal CC roads, CC drains, and CC culverts near
            Kurmanaplaem Ramalyam, in Ward 86 Gajuwaka valued at ₹15.90 lakh.
          </ul>
        </div>
        <div className="bg-gray-200 shadow p-2 rounded-xl">
          <p className="font-bold mt-4 text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
            <img src="./statue.png" className="w-12 h-12" />
            Statue Erection:
          </p>
          <ul className="text-md sm:text-[16px]">
            A statue of Alluri Sita Rama Raju is being erected at a park in HB
            Colony in Ward No.76 in Gajuwaka, with a value of ₹13.59 lakh.
          </ul>
        </div>
        <div className="bg-gray-200 shadow p-2 rounded-xl">
          <p className="font-bold mt-4  text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
            <img src="./power.png" className="w-12 h-12" />
            Power Line Modifications:
          </p>
          <ul className="text-md sm:text-[16px]">
            Shifting/modifications of 220 kV power line crossing works are being
            done for maintaining required railway crossing clearances between
            Loc No.880/5 S-880/6 S.
          </ul>
        </div>
        <div className="bg-gray-200 shadow p-2 rounded-xl">
          <p className="font-bold mt-4  text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
            <img src="./land_rights.png" className="w-12 h-12" />
            Land Rights:
          </p>
          <ul className="text-md sm:text-[16px]">
            The government has issued GO No. 44, granting land rights to
            thousands of residents living on government lands in Gajuwaka,
            benefiting around 23,500 families.
          </ul>
        </div>
        <div className="bg-gray-200 shadow p-2 rounded-xl">
          <p className="font-bold mt-4  text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
            <img src="./womens_hostel.png" className="w-12 h-12" />
            Working Women&#39;s Hostel:
          </p>
          <ul className="text-md sm:text-[16px]">
            A working women&#39;s hostel is being constructed in Gajuwaka under
            the Special Assistance to States for Capital Investment 2024-25
            (SASCI), valued at ₹22.44 crore.
          </ul>
        </div>
      </section>
      <div className="bg-gray-200 shadow p-2 rounded-xl my-3">
        <p className="font-bold mt-4  text-xl sm:text-[18px] mb-4 flex items-center gap-x-3">
          <img src="./other.png" className="w-12 h-12" />
          Other:
        </p>
        <ul className="text-md sm:text-[16px]">
          The Visakhapatnam Metropolitan Regional Development Authority (VMRDA)
          is setting up a massive open auditorium in Gajuwaka, expected to boost
          the local economy.
          <br />
          <br />
          Gajuwaka is experiencing growth due to its proximity to industries, IT
          parks, and educational institutions, making it an attractive location
          for residential and commercial real estate investments.
        </ul>
      </div>
    </div>
  );
}

export default DevelopmentInitiatives;
