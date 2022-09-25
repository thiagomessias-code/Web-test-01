import React, {useState} from "react";

import {Background, Container,Content} from './style'
import { connect } from 'react-redux'





export const login = (props) => {




  return (



    
    
 
         <Container>
         <Content>

    <div className="container">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> Faça seu Login </span>
                <span className="login-form-title">
                  
                </span>
                <div className="wrap-input">
                  <input
                    className={"" ? "has-val input" : "input"}
                    type="email"
                   
                  
                  />
                  <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">
                  <input
                    className={ "" ? "has-val input" : "input"}
                    type="password"
                    
                    
                  />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>
                <div className="container-login-form-btn">
                  <button className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                  <span className="txt1">Esqueceu a senha? </span>
                  <a className="txt2" href="#">
                    Recuperar Senha
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </Content>
    <Background/>
 
         </Container>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(login)