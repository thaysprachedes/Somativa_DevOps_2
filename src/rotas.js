import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./Sobre";
import AppCadastro from "./paginas/Cadastro";
import AppLogin from "./paginas/Login";
import Principal from "./paginas/Principal";

const  Rotas = () => {
    return(
    <BrowserRouter>
      <Routes>
        <Route exact = {true} path="/" Component={AppLogin}/>
        <Route exact = {true} path="/cadastro" Component={AppCadastro}/>
        <Route exact = {true} path="/login" Component={AppLogin}/>
        <Route exact = {true} path="/principal" Component={Principal}/>
        <Route exact = {true} path="/" Component={Home}/>
      </Routes>
    </BrowserRouter>
  )
}


export default Rotas;