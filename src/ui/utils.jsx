import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export function SocialMediaLinks({ insta, fb, x }) {
  return (
    <>
      {/* <p className="text-xl mb-3">Follow {entity}</p> */}
      <div className="flex gap-8 sm:gap-6 text-3xl">
        <SocialMediaButton onClick={() => window.open(x, "_blank")}>
          <FaSquareXTwitter />
        </SocialMediaButton>
        <SocialMediaButton onClick={() => window.open(fb, "_blank")}>
          <FaFacebookSquare className="text-blue-700" />
        </SocialMediaButton>
        <SocialMediaButton onClick={() => window.open(insta, "_blank")}>
          <FaSquareInstagram className="text-pink-700" />
        </SocialMediaButton>
      </div>
    </>
  );
}

function SocialMediaButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-3xl cursor-pointer transition-all duration-200 hover:scale-120"
    >
      {children}
    </button>
  );
}

export function Loading({ text }) {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-black border-solid mr-4"></div>
      <span className="text-sm text-black font-semibold">
        {text || "Submitting..."}
      </span>
    </div>
  );
}

export function LoadingButton({ text1, text2, isLoading }) {
  return (
    <button
      className={`cursor-pointer font-bold text-black px-3 py-2 bg-amber-400 rounded-lg hover:bg-amber-500 disabled:opacity-70 disabled:cursor-not-allowed`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <Loading text={text1} /> : text2}
    </button>
  );
}
