import Marquee from "./Marquee.js";
import MobileNav from "./MobileNav.js";
import NavBar from "./NavBar.js";

const Header = () => {
  return (
    <div className="flex flex-col">
      <Marquee />
      <MobileNav/>
      <NavBar/>
    </div>
  );
};

export default Header;



