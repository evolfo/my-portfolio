import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import expansionReducer from './Redux/reducers'

const store = createStore(expansionReducer)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
		  <App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);

serviceWorker.unregister();
