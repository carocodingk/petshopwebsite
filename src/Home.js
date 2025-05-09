import React from "react";
import Mainpost from './Mainpost';
import Blogwall from './Blogwall';
import posts from './data/posts.json';

function Home(props){
  return(
    <div>
      <Mainpost />
      <Blogwall posts={posts} />
    </div>
  );
}

export default Home;
