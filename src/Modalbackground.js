import React from "react";
import './Modalbackground.css';

function Modalbackground(props){
  return(
    <div onClick={() => {props.hideContent()}}>
      <div id="modalBackground" >

      </div>
    </div>
  );
}

export default Modalbackground;