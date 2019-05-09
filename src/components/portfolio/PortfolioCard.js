import React, { Component } from 'react'
import { connect } from 'react-redux'

class PortfolioCard extends Component {

	state = {
	  backgroundColor: '#0a080854',
	  titleDisplay: 'none',
	}

	handleMouseOver = () => {
	  	this.setState({
	  	  backgroundColor: '#0a0808db',
	  	  titleDisplay: 'block'
	  	})
	  }

	handleMouseLeave = () => {
	  this.setState({
	  	backgroundColor: '#0a080854',
	  	titleDisplay: 'none'
	  })
	}

	handleExpansion = () => {
	  this.setState({
	  	expanded: !this.state.expanded
	  })
	}

	showInfo = () => {
	  if(this.state.infoTextDisplayed){
	  	return (
	  	  <div>
	  	    <h1>hi</h1>
	  	  </div>
	  	)
	  }
	}

	render() {
	  const style = {
	    imgDiv: {
	      backgroundImage: `url(${this.props.img.url})`,
	      backgroundSize: 'cover',
	      padding: '11rem',
	      position: 'relative',
	      cursor: 'pointer',
	    },
	    imgInnerDiv: {
	      minWidth: "100%",
	      minHeight: "100%",
	      padding: "0rem",
	      background: "#ffffff4a",
	      position: "absolute",
	      backgroundColor: this.state.backgroundColor,
	      transition: '.3s',
	      top: "0",
	      left: "0"
	    },
	    headerText: {
	      transform: 'translateY(364%)',
    	  color: 'rgb(232, 234, 234)',
    	  justifyContent: 'center',
    	  fontSize: '2.1rem',
    	  transition: '0.7s',
    	  display: this.state.titleDisplay
	    }
	  }
	  
	  return (
	  	<React.Fragment>
	  	  <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={style.imgDiv}>
	  	    <div id={this.props.img.id} style={style.imgInnerDiv}>
	  	      <h1 id={this.props.img.id} className='portfolio-header-text' style={style.headerText}>{this.props.img.title}</h1>
	  	    </div>
	  	  </div>
	  	</React.Fragment>
	  )
	}
}	

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(PortfolioCard)