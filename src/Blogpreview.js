import React from 'react';
import withRouter from "./withRouter";
import Paragraphs from './Paragraphs';
import './Blogpreview.css';
import post from './data/posts.json';

function Blogpreview(props){
  const idx = props.router.params.postID;

  return (
    <div id='blogContainer'>
      <div id='blogContent'>
        <p id='blogTitle'>{post[idx].postTitle}</p>
        <div className='rowContainerBlog'>
          <p className='blogData'>By &nbsp; </p>
          <p id='blogAuthor'>{post[idx].postAuthor}</p>
          <p className='blogData'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
          <p className='blogData'>Posted on {post[idx].postDate}</p>
        </div>
        <img id='blogImg' src={post[idx].postImage} alt={post[idx].postImageAlt} />
        <Paragraphs text={post[idx].postContent}/>
      </div>
    </div>
  );
}

export default withRouter(Blogpreview);