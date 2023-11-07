/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./GameOver.css";

const GameOver = () => {
  const score = localStorage.getItem("score");

  return (
    <div className="gameover">
      <h1>Fim de jogo</h1>
      <h2>
        A sua potuação foi: <span>{score}</span>
      </h2>
      <Link to={"/SecretWord"} className="btn-start">
        Começar Novamente
      </Link>
    </div>
  );
};

export default GameOver;
