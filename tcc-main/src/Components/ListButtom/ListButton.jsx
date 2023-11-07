/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ListButtom.css";

const ListButton = ({ router, icon, title }) => {
  return (
    <div className="menu-container">
      <Link to={router} className="menu-btn">
        <span className="icon">{icon}</span>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default ListButton;
