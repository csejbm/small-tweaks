import React, { Component } from "react";
import logo from '../img/logo.svg';
import menuIcon from '../img/menu-icon@2x.png'
import closeIcon from '../img/close-icon@2x.png';
import Fade from 'react-reveal';

class SmallTweaksNavBar extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showHideContactSmallTweaksNav: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }


  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideSmallTweaksNav":
        this.setState({ showHideSmallTweaksNav: !this.state.showHideSmallTweaksNav });
        break;
      default:
        this.setState(null);
    }
  }


  render() {
    const { showHideSmallTweaksNav } = this.state;

    return ( 
      <div className="header">
          <div className="brand">
            <div className="text-logo"><img src={logo} alt="logo" width={194} /></div>
            <div className="tagline"><p>Get the most out of what you've got.</p></div>
          </div>
          <div className="menu-button">
         <Fade when={this.props.dataFromParent}><a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" className="contact-button smallred my-auto desktop" style={{marginRight: 27}}>Review My App...</a></Fade>
            <button className="menu-button p-0" onClick={() => this.hideComponent("showHideSmallTweaksNav")}>
              <img src={menuIcon} alt="menu icon" className="my-auto" width={18} style={{marginRight: 9}} />
              <span className="menu-label">Menu</span>
            </button>
          </div>
        {showHideSmallTweaksNav && <div className="nav-menu">
        <button className="menu-button" onClick={() => this.hideComponent("showHideSmallTweaksNav")}>
              <img src={closeIcon} alt="menu icon" width={18} />
            </button>
          <ul>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#comparisons">Before & Afters</a></li>
            <li><a href="#howitworks">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>}
      </div>
    );
  }
}

export default SmallTweaksNavBar;