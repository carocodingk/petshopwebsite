import React from 'react'
import './Mainpost.css'
import mainPost from './data/mainPost.json';
import Modalbackground from './Modalbackground'
import Postpreview from './Postpreview'

class Mainpost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: false,
    };
    this.hideContent = this.hideContent.bind(this);
  }

  hideContent(){
    this.setState({value: false});
  }

  render(){    
    let postPreview = null;
    let modalBackground = null;

    if (this.state.value){
      modalBackground = <Modalbackground hideContent={this.hideContent}/>
      postPreview = <Postpreview post={mainPost} hideContent={this.hideContent}/>
    }

    return (
      <div>
        <div>
          <img id="mainImg" src={this.props.mainImg} alt={"Website purpose"} onClick={() => {this.setState({value: true})}} />
        </div>
        <div>
          {modalBackground}
          {postPreview}
        </div>
      </div>
    );
  }
}

export default Mainpost;