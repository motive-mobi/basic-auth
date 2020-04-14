import React from 'react';
import { logout } from "../../utils/users.js";

class ComponentLogout extends React.Component {

  render() {

      return (
        <div>
          <button className="btn btn-primary" onClick = { logout }>Sair</button>
        </div>
      );
    }

}

export default ComponentLogout;
