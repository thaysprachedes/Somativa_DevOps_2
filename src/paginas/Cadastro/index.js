import { render } from "@testing-library/react";
import React from "react";
import "../../App.css";
import firebase from "../../Firebase";
import {Link} from 'react-router-dom';

class AppCadastro extends React.Component {
  constructor(props){
    super(props);
      this.state= {
        email: '',
        senha: '',
        nome: '',
        sobrenome:'',
        nascimento:''
      }

    this.gravar = this.gravar.bind(this);
  }

 

  async gravar(){

    await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
    .then(async (retorno) =>{

      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        nascimento: this.state.nascimento
      });

    });
    
  }
 

  render(){
    return ( 
      <div>
        <h1>PAGINA DE CADASTRO</h1>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome Completo</h5>
        <input type='text' placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})}/><input type='text' placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})}/>
        <br></br>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data de nascimento</h5>
        <input type= "date" size = "20" placeholder="nascimento" onChange = {(e) => this.setState({nascimento:e.target.value})}/><br></br>
        <br></br> 
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</h5>
        <input type= "text" size = "20" placeholder="email" onChange = {(e) => this.setState({email:e.target.value})}/><br></br>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha</h5>
        <input type= "password" size = "20" placeholder="senha" onChange = {(e) => this.setState({senha:e.target.value})}/>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={this.gravar}>Cadastrar</button>
        <br></br>
        <br></br>
        <Link to="/Principal">Principal</Link>
        <br></br>
        <br></br>
        <Link to="/Login">Página de login</Link>
      </div>
    )
  }
}
export default AppCadastro;

