import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimakitExpander from 'animakit-expander';

class Expander extends Component {

  render() {
  	return (
  	  <React.Fragment>
  	    <div>
	  	  <AnimakitExpander expanded={this.props.expanded}>
	  	    <h2>hi</h2>
	  	  </AnimakitExpander>
	    </div>
  	  </React.Fragment>
  	)
  }
}

const mapStateToProps = state => {
  return state
} 

export default connect(mapStateToProps)(Expander)