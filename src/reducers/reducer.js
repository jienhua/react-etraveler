import { combineReducers } from 'redux';

import * as actions from '../actions/actions.js';
import {cloneDeep} from 'lodash';


function traveler (state={}, action){
	let nextState;
	nextState = cloneDeep(state);
	switch(action.type){
		case actions.SET_ISCOMPLETE:
			nextState.isComplete = !nextState.isComplete;
			return nextState;
		case actions.SET_ANALYSISPROCESSNOTE:
			nextState.analysis_process_note = action.input;
			return nextState;
		case actions.SET_SERIALNUMBER:
			nextState.serial_num = action.input;
			return nextState;
		default: return state;
	}
}

function sales_order_info (state={}, action){
	let nextState;
	nextState = cloneDeep(state);
	switch(action.type){
		case actions.SET_SALESORDERNUMBER:
			nextState.sales_order_num = action.input;
			return nextState;
		case actions.SET_PRODUCTNAME:
			nextState.product_name = action.input;
			return nextState;
		case actions.SET_CUSTOMERNUMBER:
			nextState.customer_num = action.input;
			return nextState;
		case actions.SET_APTPNNUMBER:
			nextState.apt_pn_num = action.input;
			return nextState;
		default: return state;
	}
}

function traveler_template(state={}, action){
	switch(action.type){
		default: return state;
	}
}

function record_blocks(state=[], action){
	let nextState;
	nextState = state.slice();
	switch(action.type){
		case actions.SET_RECORDDATETIME:
			return nextState.map(item=>{
				if(item.blocks_id === parseInt(action.input.index)){
					item.date = JSON.stringify(action.input.date);
				}
				return item;
			});
		case actions.SET_RECORDRESPONSIBLE:
			return nextState.map(item=>{
				if(item.blocks_id === parseInt(action.input.index)){
					item.responsible = action.input.name;
				}
				return item;
			});
		case actions.SET_RECORDRESULT:
			return nextState.map(item=>{
				if(item.blocks_id === parseInt(action.input.index)){
					return action.input.data;
				}
				return item;
			});
		default: return state;
	}
}

function singleBlockViewProps(state={}, action){
	let nextState;
	nextState = cloneDeep(state);
	switch(action.type){
		case actions.SET_CURRENTBLOCKPOSITION:
			nextState.currentPosition = action.input;
			return nextState;
		case actions.SET_BLOCKSPOSITIONARR:
			nextState.blocksPositionArr = action.arr;
			return nextState;
		default: return state;
	}
}

function viewControl(state={}, action){
	let nextState;
	nextState = cloneDeep(state);
	switch(action.type){
		case actions.ISFULLPAGETABLEVIEW:
			nextState.isFullPageTableView = !nextState.isFullPageTableView;
			return nextState;
		case actions.ISSUMMARYVIEW:
			nextState.isSummaryView = !nextState.isSummaryView;
			return nextState;
		case actions.ISSOINFOHIDDEN:
			nextState.isSOInfoHidden = !nextState.isSOInfoHidden;
			return nextState;
		case actions.ISHEADERHIDDEN:
			nextState.isHeaderHidden = !nextState.isHeaderHidden;
			return nextState;
		case actions.ISCASMODALVIEW:
			nextState.isCASModalView = !nextState.isCASModalView;
			return nextState;
		default: return state;
	}
}

function adminPage(state={}, action){
	switch(action.type){
		default: return state;
	}
}

function user_info(state={}, action){
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
	user_info
});

export default travelerApp;