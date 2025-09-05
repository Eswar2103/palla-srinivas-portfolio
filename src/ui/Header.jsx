import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [scroll, setScroll] = useState(4);

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
    <header
      className={`sticky top-0 z-50 flex items-center justify-between bg-amber-400 px-6 py-${scroll} duration-300 transition-all ease-linear`}
    >
      <Link to="/">
        <img
          className={`h-11 w-11 duration-300 transition-all rounded-xl`}
          src="/tdp-logo.jpg"
        />
      </Link>
      <div className="flex items-center gap-x-3">
        <Menu />
        {/* <img className={`h-11 w-11 duration-300 transition-all rounded-xl`} src="/palla-image.jpg" /> */}
      </div>
    </header>
  );
}

export default Header;
