import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Peges
import Login from "./Routes/Login/Login.jsx";
import Register from "./Routes/Register/Register.jsx";
import Home from "./Routes/Home/Home";
import Account from "./Routes/Account/Account";
import Game from "./Routes/SecretWord/Game";
import StartGame from "./Routes/SecretWord/StartGame";
import GameOver from "./Routes/SecretWord/GameOver";

const router = createBrowserRouter([
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Account",
    element: <Account />,
  },
  {
    path: "SecretWord",
    element: <StartGame />,
  },
  {
    path: "Game",
    element: <Game />,
  },
  {
    path: "GameOver",
    element: <GameOver />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
