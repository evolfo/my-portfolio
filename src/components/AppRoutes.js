import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Blog from './Blog'
import BlogList from './blogs/BlogList'
import BlogPost from './blogs/BlogList'

const AppRoutes = props => {
  return (
  	<Routes>
  	  <Route exact path='/' component={Home} />
  	  <Route path='/about' component={About} />
  	  <Route path='/portfolio' component={Portfolio} />
  	  <Route exact path='/blog' component={Blog} />
  	  <Route path='/blog/:blogTitle' component={BlogPost} />
  	</Routes>
  )
}

export default AppRoutes