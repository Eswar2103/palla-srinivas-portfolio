import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <div className="overflow-auto min-h-[100vh] w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
