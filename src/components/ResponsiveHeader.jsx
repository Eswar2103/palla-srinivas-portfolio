import Menu from "./Menu";

function ResponsiveHeader({ isOpen, onMenuItemClick }) {
  return (
    <div
      className={`z-10 fixed bg-amber-400 w-full transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <menu className="flex flex-col gap-y-3 py-3 items-end mr-2">
        <Menu onMenuItemClick={onMenuItemClick} />
      </menu>
    </div>
  );
}

export default ResponsiveHeader;
