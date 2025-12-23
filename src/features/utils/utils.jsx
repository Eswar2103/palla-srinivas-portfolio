import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function SocialMediaLinks({ insta, fb, x }) {
  return (
    <>
      {/* <p className="text-xl mb-3">Follow {entity}</p> */}
      <div className="flex gap-8 sm:gap-6 text-3xl">
        <SocialMediaButton
          href={x}
          ariaLabel="Open palla srinivas rao X profile"
          title="Open X"
        >
          <FaSquareXTwitter />
        </SocialMediaButton>
        <SocialMediaButton
          href={fb}
          ariaLabel="Open palla srinivas rao Facebook profile"
          title="Open Facebook"
        >
          <FaFacebookSquare className="text-blue-700" />
        </SocialMediaButton>
        <SocialMediaButton
          href={insta}
          ariaLabel="Open palla srinivas rao Instagram profile"
          title="Open Instagram"
        >
          <FaSquareInstagram className="text-pink-700" />
        </SocialMediaButton>
      </div>
    </>
  );
}

function SocialMediaButton({ children, href, ariaLabel, title }) {
  const baseClass = "text-3xl transition-all duration-200 hover:scale-120";
  if (href) {
    const srText = `${ariaLabel || title || "Open link"} (opens in a new tab)`;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={title}
        className={`${baseClass} cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-800 rounded`}
      >
        {children}
        <span className="sr-only">{srText}</span>
      </a>
    );
  }
  // Fallback non-interactive element when no href provided
  const fallbackText = ariaLabel || title || "Unavailable";
  return (
    <span
      aria-disabled="true"
      title={title}
      className={`${baseClass} opacity-50 cursor-not-allowed select-none`}
    >
      {children}
      <span className="sr-only">{fallbackText}</span>
    </span>
  );
}

function Loading({ text }) {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-black border-solid mr-4"></div>
      <span className="text-sm text-black font-semibold">
        {text || "Submitting..."}
      </span>
    </div>
  );
}

function LoadingButton({ text1, text2, isLoading }) {
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

function EventCard({ event, modalClick }) {
  return (
    <div
      className="flex flex-col sm:flex-row justify-center items-center"
      onClick={modalClick}
    >
      <div className="border border-none bg-white w-[350px] sm:w-150 flex flex-col sm:flex-row group/event cursor-pointer hover:translate-y-[-5px] transform-transition duration-300">
        <img src={event.mainImage} className="h-40 w-auto p-2" />
        <div className="flex flex-col justify-between px-3 py-2 gap-y-2">
          <p className="font-extrabold group-hover/event:text-[#760b0b]">
            {event.description}
          </p>
          <p className="text-stone-800/50 group-hover/event:text-[#760b0b] font-bold text-sm font-mono flex justify-end sm:justify-start">
            {event.publishedOn}
          </p>
        </div>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-amber-500 border-solid mb-6"></div>
      <p className="text-xl text-amber-500 font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
}

export {
  SocialMediaLinks,
  SocialMediaButton,
  Loading,
  LoadingButton,
  EventCard,
  LoadingScreen,
};
