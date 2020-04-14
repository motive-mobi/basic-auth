import React from 'react';
import { Login } from "../../utils/users.js";

class ComponentLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async login(){
    let info = {
      email: this.state.email,
      password: this.state.password
    };

    !info.email || !info.password ? alert('campo faltando') : await Login(info);
  }

  render() {
      return (
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input className="form-control" id="inputEmail" name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Senha</label>
              <input className="form-control" id="inputPassword" name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
            </div>
          </form>
          <button className="btn btn-primary" onClick = { () => {this.login()} }>Entrar</button>
        </div>
      );
    }

}

export default ComponentLogin;
