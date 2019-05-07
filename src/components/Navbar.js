import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {

  const style = {
  	navbar: {
  	  position: 'fixed',
  	  bottom: '0',
  	  display: 'block'
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
  	  marginBottom: '1rem',
  	  right: '3rem'
  	},
  }  		

  return (
  	<header className="navbar" style={style.navbar}>
	  	<ul style={style.leftUl}>
	  	  <Link to='/'><li>Home</li></Link>
	  	  <Link to='/about'><li>About</li></Link>
	  	  <Link to='/portfolio'><li>Portfolio</li></Link>
	  	  <Link to='/blog'><li>Blog</li></Link>
	  	</ul>
	  	<ul style={style.rightUl}>
	  	  <a target="_blank" href='https://github.com/evolfo'><li><img src="/img/github.png" /></li></a>
	  	  <a target="_blank" href='https://www.linkedin.com/in/angelo-spampinato/'><li><img src="/img/linkedin.png" /></li></a>
	  	  <a target="_blank" href='mailto:spampinatodesign@gmail.com'><li><img src="/img/mail.png" /></li></a>
	  	</ul>
	</header>
  )
}

export default Navbar