import React from 'react';
import { register } from "../../utils/users.js";

class ComponentRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

  async register(){
    let info = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    !info.name || !info.email || !info.password ? alert('campo faltando') : await register(info);
  }

  render() {

      return (
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="inputName">Seu nome</label>
              <input className="form-control" id="inputName" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Seu melhor email</label>
              <input className="form-control" id="inputEmail" name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Sua super senha</label>
              <input className="form-control" id="inputPassword" name="password" type="password" value={this.state.password} onChange={this.handleChange}></input>
            </div>
          </form>
          <button className="btn btn-primary" onClick = { () => {this.register()} }>Cadastrar</button>
        </div>
      );
    }

}

export default ComponentRegister;
