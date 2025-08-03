import Menu from './Menu';

function Header() {
  return (
    <header className="flex h-15 items-center justify-between bg-amber-400 px-6 py-0.5">
      <img className="h-11 w-11 rounded-full" src="/dummy-profile.jpg" />
      <div className="flex items-center gap-x-3">
        <Menu />
        <img className="h-11 w-11 rounded-full" src="/dummy-profile-pic.jpg" />
      </div>
    </header>
  );
}

export default Header;
