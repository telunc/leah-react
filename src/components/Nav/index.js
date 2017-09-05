import React, { Component } from 'react';
import './index.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className="page-header">
				<div className="container">
					<div className="page-logo">
						<a href="/">Leah</a>
					</div>
					<ul className={"page-nav" + (isMenuOpen ? ' active' : '')}>
						<li><a href="https://discordapp.com/oauth2/authorize?&client_id=353429752154947594&scope=bot&permissions=305196094">Invite</a></li>
						<li><a href="https://discord.gg/0oGyIULoUQtjbt4t">Support</a></li>
						<li><a href="/commands">Commands</a></li>
						<li><a href="/donate">Donate</a></li>
					</ul>
					<a className="mobileMenu" onClick={mobileMenuOnClick.bind(this)}>
						<span className="line line-one"></span>
						<span className="line line-two"></span>
						<span className="line line-three"></span>
					</a>
				</div>
			</div>
    );
  }
}

function mobileMenuOnClick(){
  (this.state.isMenuOpen) ? this.setState({isMenuOpen: false}) : this.setState({isMenuOpen: true});
}

export default Nav;
