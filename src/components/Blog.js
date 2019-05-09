import React, { Component } from 'react'
import BlogList from "./blogs/BlogList"

class Blog extends Component {
 
  render() {

    return (
  	  <section>
  	  	<BlogList />
        <article></article>
      </section>
    )
  }
}

export default Blog