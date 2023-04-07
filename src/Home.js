import React from "react";
import Mainpost from './Mainpost';
import Blogwall from './Blogwall';
import mainPostImg from './images/mainPostBanner.png';
import posts from './data/posts.json';

function Home(props){
  return(
    <div>
      <Mainpost mainImg={mainPostImg} />
      <Blogwall posts={posts} />
    </div>
  );
}

export default Home;
