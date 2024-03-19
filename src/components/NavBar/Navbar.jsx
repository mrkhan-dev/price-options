import {useState} from "react";
import Link from "../Link/Link";
import {CiMenuBurger} from "react-icons/ci";
import {IoCloseOutline} from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About", path: "/about"},
    {id: 3, name: "Services", path: "/services"},
    {id: 4, name: "Contact", path: "/contact"},
    {id: 5, name: "Blog", path: "/blog"},
  ];

  return (
    <nav className="p-6 md:p-0">
      <div className=" md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoCloseOutline className="text-3xl"></IoCloseOutline>
        ) : (
          <CiMenuBurger className="text-2xl"></CiMenuBurger>
        )}
      </div>
      <ul
        className={`md:flex gap-10 justify-center mt-5 duration-1000 absolute md:static bg-[#0d6] md:bg-[#0d6efd]  text-white
         ${open ? "left-10" : "-left-60"}
      px-12 md:px-0 rounded-sm md:rounded-none py-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
