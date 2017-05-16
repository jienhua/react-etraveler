import { combineReducers } from 'redux';

import * as actions from '../actions/actions.js';


function traveler (state={}, action){
	switch(action.type){
		case actions.SET_ISCOMPLETE:
			return Object.assign({}, state,{
				isComplete: !state.isComplete
			})
		default: return state;
	}
}

function sales_order_info (state={}, action){
	switch(action.type){
		default: return state;
	}
}

function traveler_template(state={}, action){
	switch(action.type){
		default: return state;
	}
}

function record_blocks(state=[], action){
	switch(action.type){
		// case actions.SET_BLOCKBOOLBUTTON:
		// 	let temp = state.slice();
		// 	return temp.map((item, index)=>{
		// 		if(index === action.index){
		// 			return action.data;
		// 		}
		// 		return item;
		// 	})
		case actions.SET_RECORDRESULT:
			temp = state.slice();
			return temp.map((item, index)=>{
				if(index === action.index){
					return action.data;
				}
				return item;
			})
		default: return state;
	}
}

function singleBlockViewProps(state={}, action){
	switch(action.type){
		case actions.SET_CURRENTBLOCKPOSITION:
			return Object.assign({}, state, {
				currentPosition: action.input
			})
		case actions.SET_BLOCKSPOSITIONARR:
			return Object.assign({}, state, {
				blocksPositionArr: action.arr
			})
		default: return state;
	}
}

function viewControl(state={}, action){
	switch(action.type){
		case actions.ISFULLPAGETABLEVIEW:
			return Object.assign({}, state, {
				isFullPageTableView: !state.isFullPageTableView
			})
		case actions.ISSUMMARYVIEW:
			return Object.assign({}, state, {
				isSummaryView: !state.isSummaryView
			})
		case actions.ISSOINFOHIDDEN:
			return Object.assign({}, state, {
				isSOInfoHidden: !state.isSOInfoHidden
			})
		case actions.ISHEADERHIDDEN:
			return Object.assign({}, state, {
				isHeaderHidden: !state.isHeaderHidden
			})
		default: return state;
	}
}

function adminPage(state={}, action){
	switch(action.type){
		default: return state;
	}
}

const travelerApp = combineReducers({
	traveler,
	sales_order_info,
	traveler_template,
	record_blocks,
	singleBlockViewProps,
	viewControl,
	adminPage,
});

export default travelerApp;