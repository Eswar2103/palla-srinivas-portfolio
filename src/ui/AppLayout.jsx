import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <Header />
      <div
        role="main"
        id="main-content"
        className="overflow-auto bg-yellow-300/10 min-h-[550px]"
      >
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
