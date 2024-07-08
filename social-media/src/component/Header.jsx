import { AiFillAliwangwang } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <div className="header">
      <div className="icon">
        <AiFillAliwangwang className="f-icon" />
        Social Media
      </div>
      <div className="navigation">
        <button className="b">
          <MdHome className="f-icon" />
        </button>
        <button className="b">
          <CgProfile className="f-icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
