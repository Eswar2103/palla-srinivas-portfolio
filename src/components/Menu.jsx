import { Link } from "react-router-dom";

const menuData = [
  {
    item: "Home",
    to: "/",
    key: "123",
  },
  {
    item: "About",
    to: "/about",
    key: "456",
  },
  {
    item: "Connect with leader",
    to: "/connect",
    key: "789",
  },
];

function Menu() {
  return (
    <menu className="flex gap-x-2 capitalize">
      {menuData.map((menu) => (
        <Link
          key={menu.key}
          className="text-brown-900 text-md rounded-2xl border-[1.5px] px-2 py-1 font-bold hover:bg-amber-300 md:text-sm"
          to={menu.to}
        >
          {menu.item}
        </Link>
      ))}
    </menu>
  );
}

export default Menu;
