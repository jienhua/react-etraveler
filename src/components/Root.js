import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {App, AdminPage, LogInPage, SearchPage,SampleRMATable,SampleSNTable, Navigation} from '../components';


const Root = ({store}) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={Navigation}>
				<Route path='/traveler' component={App}/>
				<Route path='/admin' component={AdminPage}/>
				<Route path='/login' component={LogInPage}/>
				<Route path='/search' component={SearchPage}/>
				<Route path='/rmatable' component={SampleRMATable}/>
				<Route path='/sntable' component={SampleSNTable}/>
			</Route>
		</Router>
	</Provider>
);


Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;