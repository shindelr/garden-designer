import { Link } from "react-router-dom";
import homeicon from "../assets/icons/home-icon.svg";

function HeaderBar() {
  return (
    <div className="flex items-center justify-start border-2 border-[#D4E6F1] h-20 bg-gray-50 pl-10 ">
      <Link to="/" className="flex text-start flex-col">
        <img src={homeicon} />
      </Link>
    </div>
  );
}

export default HeaderBar;
