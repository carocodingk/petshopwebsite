import React from "react";
import { Link } from "react-router-dom";
import './Dropdownmenu.css';
import dropDownAbout from './data/dropDownAbout.json';
import dropDownProducts from './data/dropDownProducts.json';


function Dropdownmenu(props){
  let dropDownMenu, modalBackground = [];

  if (props.button === 1){
    dropDownMenu = dropDownProducts;
  }
  else if (props.button === 2){
    dropDownMenu = dropDownAbout;
  }

  const menuOutput = dropDownMenu.map(dropDownMenu => {
    return(
      <Link to={dropDownMenu.ref}>
        {dropDownMenu.option}
      </Link>
    );
  });
  
  return(
    <div>
      {modalBackground}
      <div className="dropdown-content" onClick={() => {props.hideContent()}}>
        {menuOutput}
      </div>
    </div>
  );
}

export default Dropdownmenu;