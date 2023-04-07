import React from "react";
import { Link } from "react-router-dom";
import './Loginbox.css';

function Loginbox(props){

  const loginWindow = props.logIn.map(field => {
    return(
      <div >
        <h1 id="loginTitle">{field.actionTitle}</h1>
        <form id="loginInnerBox">
          <div>
            <div className="loginData">
              <label className="loginDataLabel loginFont" for="email">Email</label>
              <span>
                {field.question}
                <Link to={field.alternativeComponent}> 
                  <span id="loginAlternative" className="loginDataLabel">
                    {field.alternative}
                  </span>
                </Link>
              </span>
            </div>
            <input id="email" className="wideElem inputElem loginFont" type="email" />
          </div>
          <div>
            <div className="loginData">
              <label className="loginDataLabel loginFont" for="password">Password</label>  
            </div>
            <input id="password" className="wideElem inputElem loginFont" type="password" />
          </div>
          <button id="loginButton" className="wideElem loginDataLabel loginFont" type="submit">{field.buttonName}</button>
        </form>
      </div>
    );
  });

  return(
    <div id="loginOuterBox">
      {loginWindow}
    </div>
  );
}

export default Loginbox;