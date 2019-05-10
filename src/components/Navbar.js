import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {

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
  	  position: 'fixed',
  	  bottom: '0'
  	},
  	rightUl: {
  	  listStyleType: 'none',
  	  position: 'fixed',
  	  bottom: '0',
  	  marginBottom: '.2rem',
  	  right: '3rem'
  	},
  }  		

  return (
  	<header className="navbar" style={style.navbar}>
	  	<ul style={style.leftUl}>
	  	  <Link to='/my-portfolio'><li>Home</li></Link>
	  	  <Link to='/my-portfolio/about'><li>About</li></Link>
	  	  <Link to='/my-portfolio/portfolio'><li>Portfolio</li></Link>
	  	  <a target="_blank" href='https://medium.com/@angelospmusic'><li>Blog</li></a>
	  	</ul>
	  	<ul style={style.rightUl}>
	  	  <a target="_blank" href='https://github.com/evolfo'><li><img src="/img/social/github.png" /></li></a>
	  	  <a target="_blank" href='https://www.linkedin.com/in/angelo-spampinato/'><li><img src="/img/social/linkedin.png" /></li></a>
	  	  <a target="_blank" href='mailto:spampinatodesign@gmail.com'><li><img src="/img/social/mail.png" /></li></a>
	  	</ul>
	</header>
  )
}

export default Navbar