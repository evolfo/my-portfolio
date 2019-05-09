import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Blog from './Blog'
import BlogList from './blogs/BlogList'
import BlogPost from './blogs/BlogList'

const Routes = props => {
  return (
  	<Switch>
  	  <Route exact path='/' component={Home} />
  	  <Route path='/about' component={About} />
  	  <Route path='/portfolio' component={Portfolio} />
  	  <Route exact path='/blog' component={Blog} />
  	  <Route path='/blog/:blogTitle' component={BlogPost} />
  	</Switch>
  )
}

export default Routes