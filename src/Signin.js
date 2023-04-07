import React from "react";
import Loginbox from "./Loginbox";
import signIn from './data/signIn.json';

function Signin(props){
  return(
    <Loginbox logIn={signIn}/>
  );
}

export default Signin;