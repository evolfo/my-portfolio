import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './About'
import Home from './Home'
import Portfolio from './Portfolio'
import Blog from './Blog'

const Routes = props => {
  return (
  	<Switch>
  	  <Route exact path='/' component={Home} />
  	  <Route path='/about' component={About} />
  	  <Route path='/portfolio' component={Portfolio} />
  	  <Route path='/blog' component={Blog} />
  	</Switch>
  )
}

export default Routes