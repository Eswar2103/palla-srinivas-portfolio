import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export function SocialMediaLinks({ insta, fb, x, entity }) {
  return (
    <>
      <p className="text-xl mb-3">Follow {entity}</p>
      <div className="flex gap-8 sm:gap-6 text-3xl">
        <SocialMediaButton onClick={() => window.open(x, "_blank")}>
          <FaSquareXTwitter />
        </SocialMediaButton>
        <SocialMediaButton onClick={() => window.open(fb, "_blank")}>
          <FaFacebookSquare />
        </SocialMediaButton>
        <SocialMediaButton onClick={() => window.open(insta, "_blank")}>
          <FaSquareInstagram />
        </SocialMediaButton>
      </div>
    </>
  );
}

function SocialMediaButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-stone-900 hover:text-black text-3xl cursor-pointer transition-all duration-200 hover:scale-120"
    >
      {children}
    </button>
  );
}
