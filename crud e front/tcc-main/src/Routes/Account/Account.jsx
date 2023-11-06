/* eslint-disable react/prop-types */
// Components
import Avatar from "../../Components/Avatar/Avatar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./Account.css";

const Account = () => {
  const title = "Grande Pensador";
  const trophy = 2231;

  const userImg = "./Perfil.jpeg";

  return (
    <div className="container-page">
      <header>
        <Sidebar />
      </header>
      <main className="account-container">
        <Avatar image={userImg} name={"Thifany"} width="150px" height="150px" />
        <h3 className="title">{title}</h3>
        <h2 className="trophy">
          <img src="./trophy.png" />
          {trophy}
        </h2>
      </main>
    </div>
  );
};

export default Account;
