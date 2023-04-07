import React from "react";
import Paragraphs from "./Paragraphs";
import './AboutUs.css';

function AboutUs(props){
  const output = props.aboutUs.map(text => {
    return(
      
      <div id="aboutUs" >
        {/* <HashLink to="/ourMission"> */}
        <div id="ourMission" className="aboutUsSection">
          <p className="aboutUsTitle">Our Mission</p>
          <img className="aboutUsImg" src={text.ourMissionImg} alt={text.ourMissionImgAlt} />
          <Paragraphs text={text.ourMissionContent} />
        </div>
        {/* </HashLink> */}
        {/* <HashLink to="/ourStory"></HashLink> */}
        <div id="ourStory" className="aboutUsSection">
          <p className="aboutUsTitle">Our Story</p>
          <img className="aboutUsImg" src={text.ourStoryImg} alt={text.ourStoryImgAlt} />
          <Paragraphs text={text.ourStoryContent} />
        </div>
        {/* <HashLink/> */}
      </div>
    );
  });

  return(
    <div>
      {output}
    </div>
  );
}

export default AboutUs;