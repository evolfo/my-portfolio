import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class Navbar extends Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const style = {
    	navbar: {
    	  position: 'fixed',
    	  bottom: '0',
    	  display: 'block',
        width: '100%',
        background: 'black',
        height: '86px',
        zIndex: '1'
    	},
    	leftUl: {
        listStyleType: 'none',
    	},
    	rightUl: {
    	  listStyleType: 'none',
    	  position: 'fixed',
    	  bottom: '0',
    	  marginBottom: '.2rem',
    	  right: '3rem'
    	},
    }  		

  const { anchorEl } = this.state;

  return (
  	<header className="navbar" style={style.navbar}>
      <MenuIcon
        className="hamburger" 
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={this.handleClick} 
      />

      <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        
    	  	<ul style={style.leftUl}>
      	  	  <Link to='/'><MenuItem onClick={this.handleClose}><li>Home</li></MenuItem></Link>
      	  	  <Link to='/about'><MenuItem onClick={this.handleClose}><li>About</li></MenuItem></Link>
      	  	  <Link to='/portfolio'><MenuItem onClick={this.handleClose}><li>Portfolio</li></MenuItem></Link>
      	  	  <a target="_blank" href='https://medium.com/@angelospmusic'><MenuItem onClick={this.handleClose}><li>Blog</li></MenuItem></a>
    	  	</ul>
      </Menu>
	  	<ul style={style.rightUl}>
	  	  <a target="_blank" href='https://github.com/evolfo'><li><img src="/img/social/github.png" /></li></a>
	  	  <a target="_blank" href='https://www.linkedin.com/in/angelo-spampinato/'><li><img src="/img/social/linkedin.png" /></li></a>
	  	  <a target="_blank" href='mailto:spampinatodesign@gmail.com'><li><img src="/img/social/mail.png" /></li></a>
	  	</ul>
	</header>
    )
  }
}

export default Navbar