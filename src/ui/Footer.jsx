import { FaHandshake } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-amber-400 bottom-0 py-4 px-10 mt-10 flex flex-col gap-y-4 items-center justify-center">
      <div className="flex gap-4">
        <a
          href="https://www.telugudesam.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brown-900 text-md rounded-2xl border px-3 py-1 font-bold hover:bg-amber-500 md:text-sm capitalize"
        >
          Telugu Desam party
        </a>
        <a
          href="https://telugudesam.org/membership-2024-26/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-stone-100 rounded-2xl border border-brown-900 px-3 py-1 font-bold bg-red-600 hover:bg-red-700 md:text-sm"
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
          className="flex items-center gap-2 text-stone-100 border-brown-900 text-sm rounded-2xl border px-3 py-1 font-bold bg-green-600 hover:bg-green-700 md:text-sm"
        >
          <span>
            <BiDonateHeart />
          </span>
          Donate
        </a>
      </div>
      <div>
        <p className="text-xl mb-3">Follow</p>
        <div className="flex gap-4 text-3xl">
          <a>
            <FaSquareXTwitter />
          </a>
          <a>
            <FaFacebookSquare />
          </a>
          <a>
            <FaSquareInstagram />
          </a>
        </div>
      </div>
      <p>Copyright @2025. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
