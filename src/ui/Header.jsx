import { useState, useEffect } from 'react';
import Menu from './Menu';

function Header() {
  const [scroll, setScroll] = useState(4);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollPercent <= 0) {
        setScroll(4)
      } else if (scrollPercent >= 20) {
        setScroll(1)
      } 
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between bg-amber-400 px-6 py-${scroll} duration-300 transition-all ease-linear`}>
      <img className={`h-9 w-9 duration-300 transition-all rounded-full`} src="/dummy-profile.jpg" />
      <div className="flex items-center gap-x-3">
        <Menu />
        <img className={`h-9 w-9 duration-300 transition-all rounded-full`} src="/dummy-profile-pic.jpg" />
      </div>
    </header>
  );
}

export default Header;
