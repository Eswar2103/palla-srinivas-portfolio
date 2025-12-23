import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Menu from "../components/Menu";
import ResponsiveHeader from "./ResponsiveHeader";

function Header() {
  const [scroll, setScroll] = useState(4);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollPercent <= 0) {
        setScroll(4);
      } else if (scrollPercent >= 10) {
        setScroll(1);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between bg-amber-400 px-6 py-${scroll} duration-300 transition-all ease-linear`}
      >
        <Link
          to="/"
          aria-label="Go to Telugu Desam Party homepage"
        >
          <img
            className={`h-11 w-11 duration-300 transition-all rounded-xl`}
            src="/images/tdp-logo.jpg"
            alt="Palla Srinivas Rao — Home"
          />
        </Link>
        <div className="hidden sm:block">
          <menu className="flex gap-x-2">
            <Menu />
          </menu>
        </div>
        <div className="sm:hidden">
          {isOpen ? (
            <FaTimes
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </header>
      <ResponsiveHeader
        isOpen={isOpen}
        onMenuItemClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Header;
