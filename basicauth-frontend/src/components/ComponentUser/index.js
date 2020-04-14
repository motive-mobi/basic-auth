import React from 'react';
import API_URL from "../../utils/api";

class ComponentUser extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    const USER_ENDPOINT = `${API_URL.API_URL}${API_URL.endpoints.user}`;
    const myToken = localStorage["access_token"];
    const options = {
      method: 'GET',
      url: USER_ENDPOINT,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + myToken
      }
    };

    fetch(USER_ENDPOINT,options)
    .then((response) => response.json())
    .then(userInfo => {
        this.setState({ user: userInfo.user });
        //console.log('this.state.user:',this.state.user);
        //console.log('userInfo.user:',userInfo.user);
    });
  }

  render() {

      return (
        <div>
          <p>Nome: {this.state.user.name}</p>
          <p>Email: {this.state.user.email}</p>
          <p>Cadastrado em: {this.state.user.created_at}</p>
        </div>
      );
    }

}

export default ComponentUser;
