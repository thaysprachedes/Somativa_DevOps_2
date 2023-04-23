import { render } from "@testing-library/react";
import React from "react";
import "../../App.css";
import {Link} from 'react-router-dom';
import firebase from "../../Firebase";

class AppLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: ""
    }

    this.acessar = this.acessar.bind(this);
    this.acesso = "";
  }

  async acessar(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
    .then(()=>{
        window.location.href = "./principal";
    })
    .catch((erro)=>{

    });

    this.acesso = "Usuário não cadastrado !";
    this.forceUpdate();

  }



  render(){
    return ( 
      <div>
        <h1>Página de Login </h1>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</h5>
        <input type= "text" size = "20" placeholder="email" onChange = {(e) => this.setState({email:e.target.value})}/><br></br>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha</h5>
        <input type= "password" size = "20" placeholder="senha" onChange = {(e) => this.setState({senha:e.target.value})}/>
        <br></br>
        <br></br>
        <button onClick={this.acessar}>Acessar</button>
        <h5>{this.acesso}</h5>
        <br></br>
        <Link to="/principal">Principal</Link>
        
      </div>
    )
  }
}

// esse eh o trabalho correto
export default AppLogin;

