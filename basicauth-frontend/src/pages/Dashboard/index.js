import React from "react";
import { Link } from "react-router-dom";
import ComponentLogout from "../../components/ComponentLogout";

function Dashboard(props) {
  return (
    <div>
      <p>Painel Dashboard</p>
      <Link to="/account">Meu perfil</Link>
      <ComponentLogout />
    </div>
  );
}

export default Dashboard;
