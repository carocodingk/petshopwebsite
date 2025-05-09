import React from 'react';
import { Link } from 'react-router-dom';
import Dropdownmenu from './Dropdownmenu';
import Modalbackground from './Modalbackground';
import './Navigation.css';

class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showMenuProduct: false,
			showMenuAbout: false,
		};
		this.hideContent = this.hideContent.bind(this);
	}

	hideContent(menuKey){
    this.setState({ showMenuProduct: false });
		this.setState({ showMenuAbout: false });
  	}

	render(){
		const mainLogo = this.props.mainLogo;
		let menuProduct, menuAbout, modalProduct, modalAbout;
		let productButton = null, aboutButton = null;
		let arrow1, arrow2;

		if (this.state.showMenuProduct){
			productButton = 'selectedButton';
			arrow1 = 'upArrow';
			modalProduct = <Modalbackground hideContent={this.hideContent} />
			menuProduct = <Dropdownmenu button={1} hideContent={this.hideContent} />;
			modalAbout = null;
			menuAbout = [];
		}
		else if (this.state.showMenuAbout){
			aboutButton = 'selectedButton';
			arrow2 = 'upArrow';
			modalProduct = null;
			menuProduct = [];
			modalAbout = <Modalbackground hideContent={this.hideContent} />
			menuAbout = <Dropdownmenu button={2} hideContent={this.hideContent} />;
		}

		return (
			<div id='navigation'>
				<Link to="/petshopwebsite">
					<img src={mainLogo} alt={"company logo"} />
				</Link>
				<div id='menuExpanded'>
					<div className='menu'>
						<div className='menuSub'>
							<a href='https://www.google.com'>
								<button className='navigationButton'>
									ADOPTION
								</button>
							</a>
							<div>
								<button id={productButton} className='navigationButton' onClick={()=> this.setState({showMenuProduct: !this.state.showMenuProduct, showMenuAbout: false})}>
									PRODUCTS <span className="material-icons" id={arrow1}>keyboard_arrow_down</span>
								</button>
								{modalProduct}
								{menuProduct}
							</div>
							<div>
								<button id={aboutButton} className='navigationButton' onClick={()=> this.setState({showMenuAbout:!this.state.showMenuAbout, showMenuProduct: false})}>
									ABOUT US <span className="material-icons" id={arrow2}>keyboard_arrow_down</span>
								</button>
								{modalAbout}
								{menuAbout}
							</div>
						</div>
						<form className='menuSub' id='searchBar'>
							<input type={"text"}></input>
							<button className='singleIcon'><span class="material-icons">search</span></button>
						</form>
						<div className='menuSub'>
							<Link to="/petshopwebsite/Signin">
								<button  className='navigationButton'>
									<span className="material-icons">pets</span> &nbsp; SIGN IN 
								</button>
							</Link>
							<Link to="/petshopwebsite/Shoppingcart">
								<button className='navigationButton'>
									<span className="material-icons">shopping_cart</span>
								</button>
							</Link>
						</div>
					</div>
					<div>
						<button id='menuIcon' className='singleIcon'onClick={()=>console.log('here')}>
							<span className="material-icons">menu</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;