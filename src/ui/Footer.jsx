import { FaHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { SocialMediaLinks } from "../features/utils/utils";

function Footer() {
  const insta = "https://www.instagram.com/jai_tdp?igsh=dnp0dzRrNTlvd3o2";
  const fb = "https://www.facebook.com/share/1CJQDSg85g";
  const x = "https://x.com/JaiTDP?t=diPS0f68rgN3JOhJ6DRMQQ&s=08";

  return (
    <footer className="bg-amber-400 bottom-0 py-4 px-10 flex flex-col gap-y-4 items-center justify-center">
      <div className="flex justify-center gap-4">
        <a
          href="https://www.telugudesam.org/"
          target="_blank"
          rel="noopener noreferrer"
          // className="text-brown-900 text-md rounded-2xl border px-3 py-1 font-bold hover:bg-amber-500 md:text-sm capitalize"
          className="flex items-center capitalize text-[12px] border px-2 py-1 sm:text-[16px] font-bold rounded-2xl hover:bg-amber-500 shrink-0"
        >
          Telugu Desam party
        </a>
        <a
          href="https://telugudesam.org/membership-2024-26/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[12px] text-stone-100 rounded-2xl border sm:text-[16px] border-none px-3 py-1 font-bold bg-red-600 hover:bg-red-700 shrink-0"
        >
          <span>
            <FaHandshake />
          </span>
          Join in TDP
        </a>
        <a
          href="https://tdpforandhra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-stone-100 border-none text-[12px] rounded-2xl border px-2 py-1 font-bold bg-green-600 hover:bg-green-700 sm:text-[16px]"
        >
          <span>
            <BiDonateHeart />
          </span>
          Donate
        </a>
      </div>
      <div className="my-5 flex flex-col justify-center items-center ">
        <p className="font-bold text-center mb-5 uppercase tracking-wider font-serif text-lg">
          Quick links
        </p>
        <div className="flex justify-center items-center gap-x-15 font-bold text-[#450404]">
          <div className="flex flex-col gap-1.5 *:hover:text-[#ab1818]">
            <a
              href="https://www.telugudesam.org/our-philosophy/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Our Philosophy
            </a>
            <a
              href="https://www.telugudesam.org/jai-hind-and-jai-telugu-desam/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Jai hind - Jai Telugu Desam
            </a>
            <a
              href="https://www.telugudesam.org/tdp-history/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              TDP History
            </a>
            <a
              href="https://www.telugudesam.org/tdp-impact-on-the-nation/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              TDP impact on the Nation
            </a>
          </div>
          <div className="flex flex-col gap-1.5 *:hover:text-[#ab1818]">
            <a
              href="https://www.telugudesam.org/life-and-history-of-our-founder/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Founder&apos;s Biography
            </a>
            <a
              href="https://www.telugudesam.org/life-and-history-of-our-leader-ncbn/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Life and History of our Leader N CBN
            </a>
            <a
              href="https://www.telugudesam.org/role-in-building-the-nation/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Role in Building the Nation
            </a>
            <a
              href="https://www.telugudesam.org/praja-manifesto-2024/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Manifesto
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl mb-3">Follow TDP</p>
        <SocialMediaLinks insta={insta} fb={fb} x={x} entity="TDP" />
      </div>
      <p className="text-[16px] font-sans font-bold">
        Copyright @2025. All rights reserved by TDP.
      </p>
    </footer>
  );
}

export default Footer;
