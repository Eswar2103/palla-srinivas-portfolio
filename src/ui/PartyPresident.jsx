function PartyPresident() {
  return (
    <section className="px-6 sm:px-40 py-10">
      <div className="flex flex-col items-center gap-y-3 py-4 border-amber-500 border-4 rounded-2xl">
        <div className="flex flex-col sm:flex-row gap-x-20 gap-y-6 px-2 justify-center">
          <img
            className="w-[400px] h-[400px]"
            src="./SPP2.jpg"
            alt="palla srinivas and chandra babu naidu photo"
          />
          <img
            className="w-[400px] h-[400px]"
            src="./SPP_photo.jpg"
            alt="palla srinivas and lokesh photo"
          />
        </div>
        <p className="text-xl px-2">
          Taken charge as <span className="font-bold">Telugu Desam Party</span>{" "}
          president on{" "}
          <span className="text-red-700 uppercase font-bold">
            JUNE 28, 2014
          </span>
        </p>
      </div>
    </section>
  );
}

export default PartyPresident;
