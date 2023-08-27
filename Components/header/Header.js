import Marquee from "./Marquee.js";
import MobileNav from "./MobileNav.js";

const Header = () => {
  return (
    <div className="flex flex-col">
      <Marquee />
      <MobileNav/>
    </div>
  );
};

export default Header;



