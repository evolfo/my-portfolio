import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BlogPost from './BlogPost'

export default class BlogList extends Component {

  state = {
  	blogs: []
  }

  componentDidMount(){
  	fetch('/blogs.json')
  	  .then(resp => resp.json())
  	  .then(blogs => {
  	  	this.setState({
  	  	  blogs
  	  	})
  	  })
  }

  render(){

  	const allBlogs = this.state.blogs.map(blog => {
  	  let urlEnding = blog.title.split(' ').join('-').replace(',', '').replace(',', '').toLowerCase()
  	  return (
  	  	<Link key={blog.id} to={`/blog/${urlEnding}`}>
  	  	  <BlogPost blog={blog} />
  	  	</Link>
  	  )
  	})

    return (
      <div>.
        {allBlogs}
      </div>
    )
  }
}