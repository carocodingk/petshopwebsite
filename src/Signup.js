import React from "react";
import Loginbox from "./Loginbox";
import signUp from './data/signUp.json';

function Signup(props){
  return(
    <Loginbox logIn={signUp}/>
  );
}

export default Signup;