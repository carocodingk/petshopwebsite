import React from "react";
import { Link } from "react-router-dom";
import './Dropdownmenu.css';
import dropDownAbout from './data/dropDownAbout.json';
import dropDownProducts from './data/dropDownProducts.json';
import dropDownMainMenu from './data/dropDownMainMenu.json'


function Dropdownmenu(props){
  let dropDownMenu, modalBackground = [];
  let css_classname 

  if (props.button === 1){
    dropDownMenu = dropDownProducts;
    css_classname = "dropdown-content"
  }
  else if (props.button === 2){
    dropDownMenu = dropDownAbout;
    css_classname = "dropdown-content"
  }
  else if (props.button === 3){
    dropDownMenu = dropDownMainMenu;
    css_classname = "dropdown-content-alternate"
  }

  const menuOutput = dropDownMenu.map((dropDownMenu, key) => {
    return(
      <Link to={dropDownMenu.ref} key={key}>
        {dropDownMenu.option}
      </Link>
    );
  });
  
  return(
    <div>
      {modalBackground}
      <div className={css_classname} onClick={() => {props.hideContent()}}>
        {menuOutput}
      </div>
    </div>
  );
}

export default Dropdownmenu;