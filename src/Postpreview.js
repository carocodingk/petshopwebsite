import React from 'react';
import Paragraphs from './Paragraphs';
import './Postpreview.css';

function Postpreview(props){
  return (
    <div className='rowContainerPost'>
      <div id='postContainer'>
        <div id='postContent'>
          <p id='postTitle' className='centerItem'>{props.post[0].postTitle}</p>
          <div className='rowContainerPost'>
            <p className='postData'>By &nbsp; </p>
            <p id='postAuthor'>{props.post[0].postAuthor}</p>
            <p className='postData'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
            <p className='postData'>Posted on {props.post[0].postDate}</p>
          </div>
          <img id='postImg' src={props.post[0].postImage} alt={props.post[0].postImageAlt} />
          <Paragraphs text={props.post[0].postContent}/>
        </div>
        <button className='closingIcon' onClick={() => {props.hideContent()}}>
          &times;
        </button> 
      </div>
    </div> 
  );
}

export default Postpreview;