import NavItems from "./NavItems";

const MainNav = () => {
  return (
    <nav className="hidden md:flex-between w-full max-w-xs">
      <NavItems />
    </nav>
  );
};

export default MainNav;
