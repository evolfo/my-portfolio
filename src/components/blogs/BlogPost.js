import React, { Component } from 'react'

export default class BlogPost extends Component {

  render(){
  	console.log(this.props)
  	return (  
  	    <h3>{this.props.blog.title}</h3>
  	)
  }
}