import React from 'react';
import { Link } from 'react-router-dom';
import './Blogwall.css';

function Blogwall(props){
  const output = props.posts.map(post => {
    return (
      <Link to={`/Blog/${post.postID}`}>
        <div className='blogWallPost' >
          <img className="blogWallImage maxWidth" src={post.postImage} alt={post.postImageAlt} />
          <p id='blogWallTitle' className='blogWallData maxWidth'>{post.postTitle}</p>
          <p id='blogWallAuthor' className='blogWallData maxWidth'>By {post.postAuthor.toUpperCase()}</p>
        </div>
      </Link>
    );
  });

  return(
    <div id='blogWall'>
      {output}
    </div>    
  );
}

export default Blogwall;