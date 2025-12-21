import { useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function Impact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChildOpen, setIsChildOpen] = useState(null);

  const data = [
    { title: "100+ Speeches Delivered", info: "more info here 1" },
    { title: "50+ Projects Initiated", info: "more info here 2" },
    { title: "30 Awards Received", info: "more info here 3" },
  ];

  return (
    <div className="px-25 sm:px-55 py-15">
      <div className="font-bold uppercase pb-8 flex justify-center">
        <p className="text-center rounded-2xl bg-yellow-400 px-5 py-1">
          Political Impact
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-x-3 gap-y-3 ">
        <div>
          <div
            className={`flex flex-col border-2 border-amber-500 rounded-4xl w-80 h-80 text-center pulse-border items-center justify-center font-bold text-orange-600 ${isOpen && "bg-amber-500 text-white"} duration-500`}
            onClick={() => {
              setIsOpen((prev) => !prev);
              setIsChildOpen(null);
            }}
          >
            <p className="text-5xl leading-14">20 years in Public Life</p>
            <p className="text-xl mt-12">more info here</p>
            <p
              className={`text-2xl mt-4 ${isOpen ? `rotate-180 duration-200` : `duration-200`}`}
            >
              <FaRegArrowAltCircleDown />
            </p>
          </div>

          {isOpen && (
            <div className="border-2 border-amber-600 px-5 py-2 rounded-2xl sm:block md:hidden mt-5">
              <p
                className="text-red-600 text-2xl right-0 cursor-pointer flex justify-end"
                onClick={() => {
                  setIsChildOpen(null);
                  setIsOpen(false);
                }}
              >
                <RxCrossCircled className="hover:text-white hover:bg-red-600" />
              </p>
              {isOpen && (
                <p className="font-bold text-lg">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              )}
            </div>
          )}
        </div>
        {data.map((d, idx) => (
          <div key={d.title}>
            <div
              key={d.title}
              className={`pulse-border px-5 flex flex-col justify-center items-center text-center border-2 rounded-4xl w-60 h-60 border-amber-500 text-2xl font-bold text-orange-600  ${isChildOpen === idx && "bg-amber-500 text-white"} duration-500`}
              onClick={() => {
                setIsChildOpen(idx === isChildOpen ? null : idx);
                setIsOpen(false);
              }}
            >
              <p>{d.title}</p>
              <p
                className={`text-2xl mt-8 ${isChildOpen === idx ? `rotate-180 duration-200` : `duration-200`}`}
              >
                <FaRegArrowAltCircleDown />
              </p>
            </div>
            {isChildOpen === idx && (
              <div className="border-2 border-amber-600 px-5 py-2 rounded-2xl mt-5 sm:block md:hidden">
                <p
                  className="text-red-600 text-2xl right-0 cursor-pointer flex justify-end"
                  onClick={() => {
                    setIsChildOpen(null);
                    setIsOpen(false);
                  }}
                >
                  <RxCrossCircled className="hover:text-white hover:bg-red-600" />
                </p>
                {isChildOpen != null && <p>{data[isChildOpen].info}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        // className={`mt-8 ${isOpen ? `opacity-100 translate-y-2 pointer-events-auto relative` : `opacity-0 -translate-y-2 pointer-events-none absolute`} duration-150`}
        className="mt-8 hidden md:block"
      >
        {(isOpen || isChildOpen != null) && (
          <div className="border-2 border-amber-600 px-5 py-2 rounded-2xl">
            <p
              className="text-red-600 text-2xl right-0 cursor-pointer flex justify-end"
              onClick={() => {
                setIsChildOpen(null);
                setIsOpen(false);
              }}
            >
              <RxCrossCircled className="hover:text-white hover:bg-red-600" />
            </p>
            {isOpen && (
              <p className="font-bold text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            )}
            {isChildOpen != null && <p>{data[isChildOpen].info}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Impact;
