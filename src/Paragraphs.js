import React from "react"
import './Paragraphs.css'

function Paragraphs(props){
  const paragraphs = props.text.map((paragraph, key) => {
    return(
      <p key={key} className="paragraph">{paragraph}</p>
    );
  });

  return(
    <div>
      {paragraphs}
    </div>
  );
}

export default Paragraphs;