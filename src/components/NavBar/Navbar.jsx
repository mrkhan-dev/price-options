import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About", path: "/about"},
    {id: 3, name: "Services", path: "/services"},
    {id: 4, name: "Contact", path: "/contact"},
    {id: 5, name: "Blog", path: "/blog"},
  ];

  return (
    <nav>
      <ul className="md:flex gap-10 justify-center mt-5">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;