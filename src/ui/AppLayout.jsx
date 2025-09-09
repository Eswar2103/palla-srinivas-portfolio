import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="overflow-auto w-auto pb-16 bg-yellow-300/10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
