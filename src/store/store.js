import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import travelerApp from '../reducers/reducer.js';
import dummyData from './stateDesign.js';
import thunk from 'redux-thunk';

const logger = createLogger();

let store = createStore(
	travelerApp,
	dummyData,
	applyMiddleware(
		logger,
		thunk
	)
);

export default store;