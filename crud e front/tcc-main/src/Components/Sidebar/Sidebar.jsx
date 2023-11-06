// React
import { GoHome, GoTrophy } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

// CSS
import "./Sidebar.css";

// Components
import Avatar from "../Avatar/Avatar";
import ListButton from "../ListButtom/ListButton";
import { useState } from "react";

const Sidebar = () => {
  const userImg = "./Perfil.jpeg";
  const [isActiveMenu, setiSActiveMenu] = useState(false);

  const ActiveMenu = () => {
    setiSActiveMenu(!isActiveMenu);
  };

  return (
    <nav>
      <nav className="menu-mobile">
        <div className="icon-container">
          <AiOutlineMenu onClick={ActiveMenu} className="icon-menu" />
        </div>
      </nav>
      <nav
        className={isActiveMenu ? "container-menu-active" : "container-menu"}
      >
        <div className="avatar">
          <Avatar
            image={userImg}
            name={"Thifany"}
            width="115px"
            height="115px"
          />
        </div>
        <ul className="list-menu">
          <li>
            <ListButton router={"/"} icon={<GoHome />} title={"Home"} />
          </li>
          <li>
            <ListButton router={"/Account"} icon={<BiUser />} title={"Conta"} />
          </li>
          <li>
            <ListButton router={""} icon={<GoTrophy />} title={"Ranking"} />
          </li>
          <li>
            <ListButton
              router={""}
              icon={<PiUsersThree />}
              title={"Comunidade"}
            />
          </li>
          <li>
            <ListButton
              router={""}
              icon={<SlSettings />}
              title={"Configuração"}
            />
          </li>
          <li>
            <ListButton router={""} icon={<MdLogout />} title={"Logout"} />
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Sidebar;
