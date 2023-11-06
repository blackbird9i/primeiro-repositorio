import { Link } from "react-router-dom";
import "./StartGame.css";

const StartGame = () => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <Link to={"/Game"} className="btn-start">
        Começar a jogar
      </Link>
    </div>
  );
};

export default StartGame;
