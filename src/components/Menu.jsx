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
    item: "Gajuwaka MLA",
    to: "/mla",
    key: "mla1",
  },
  {
    item: "State party president",
    to: "/partypresident",
    key: "ssp1",
  },
  {
    item: "Connect with leader",
    to: "/connect",
    key: "789",
  },
];

function Menu({ onMenuItemClick }) {
  return (
    <>
      {menuData.map((menu) => (
        <Link
          key={menu.key}
          className="capitalize text-brown-900 w-40 sm:w-auto rounded-2xl border-[1.5px] px-2 py-1 font-bold hover:bg-amber-300 text-sm text-center"
          to={menu.to}
          onClick={onMenuItemClick}
        >
          {menu.item}
        </Link>
      ))}
    </>
  );
}

export default Menu;
