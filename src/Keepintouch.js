import React from "react";
import './Keepintouch.css';

function Keepintouch(props){
  return(
    <div id="keepInTouch" className="rowContainer">
      <div>
      <div id="leftComponent" className="rowContainer">
        <div className="rowContainer">
          <span class="material-icons contactIcon">location_on</span>
          <p className="bigTxt">123 Happy Barking Boulevard <br />
             Meow City, Fluffy Cat State 56789</p>
        </div>
        <div className="rowContainer">
          <span class="material-icons contactIcon">email</span>
          <p className="bigTxt"><a href="keepintouch@chuchofeliz.com">keepintouch@chuchofeliz.com</a></p>
        </div>
        <div className="rowContainer">
          <span class="material-icons contactIcon">phone</span>
          <p className="bigTxt">Phone: (212)987-6543 </p>
        </div>
      </div>
      </div>
      <div id="rightComponent">
        <form>
          <div className="rightComponentField">
            <div>
            <label for="name">Name</label>
            </div>
            <input id="name" className="contactInput contactTxt" type="text"></input>
          </div>
          <div className="rightComponentField">
            <div>
            <label for="email">Email</label>
            </div>
            <input id="email" className="contactInput contactTxt" type="email"></input>
          </div>
          <div className="rightComponentField">
            <div>
            <label for="message">Message</label>
            </div>
            <textarea className="contactTxt" name="comment" rows="20" cols="70"></textarea>
          </div>
          <button className="contactTxt" id="contactButton">Submit</button>
        </form> 
      </div>
    </div>
  );
}

export default Keepintouch;