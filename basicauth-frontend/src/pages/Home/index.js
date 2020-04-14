import React from "react";
import { Link } from "react-router-dom";
import ComponentLogin from "../../components/ComponentLogin";

function Home(props) {
  return (
    <div>
      <p>Página Inicial</p>
      <ComponentLogin />
      <Link to="/register">Ainda não é cadastrado?</Link>
    </div>
  );
}

export default Home;
