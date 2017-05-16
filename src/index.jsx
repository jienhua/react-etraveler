import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';
import store from './store/store';
// import App from './components/App';
import Root from './components/Root';
// let json = require('../example_data.json');

// console.log(JSON.stringify(store));
// store.dispatch({
// 	type: 'SET_ISCOMPLETE'
// })

// console.log(store, 'hel')
// render(
// 	<Provider store={store}>
// 		<Router history={browserHistory}>
// 			<Route path='/' component={App}/>
// 		</Router>
// 	</Provider>,
// 	document.getElementById('app')
// )

render(
	<Root store={store}/>,
	document.getElementById('app')
)