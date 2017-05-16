import React from 'react';
import { connect } from 'react-redux';
import { Table } from '../components';
import * as actions from '../actions/actions';


const mapStateToProps = ( state ) =>{


	let singleBlockViewArr = [],
		index = 0,
		{blueprint, blocksHeaderOrder} = state.traveler_template,
		blocks = state.record_blocks,
		modBlocks = {};


	blocks.map(e=>{
		modBlocks[e.blocks_id] = e;
		return;
	})

	let blocksPositionArr = [0];
	blueprint.map((e,index)=>{
		blocksPositionArr.push(blocksPositionArr[index]+e.blocks.length);
		return;
	})
	blocksPositionArr.shift();
	return {
		traveler_template: state.traveler_template,
		blueprint: blueprint,
		blocks: modBlocks,
		blocksHeader: blocksHeaderOrder,
		isFullPageTableView: state.viewControl.isFullPageTableView,
		isSummaryView: state.viewControl.isSummaryView,
		singleBlockViewProps: state.singleBlockViewProps,
		blocksPositionArr:blocksPositionArr
	}
};

const mapDispatchToProps = (dispatch) =>{
	return {
		changeTableView: () =>{
			dispatch(actions.isFullPageTableView());
		},
		changeSummaryView: () =>{
			dispatch(actions.isSummaryView());
		},
		changeCurrentBlock: (input) =>{
			dispatch(actions.setCurrentBlockPosition(input));
		},
		setBlockHeaderPosition: (input) =>{
			dispatch(actions.setBlockHeaderPosition(input));
		},
		setRecordResult: (input) => {
			dispatch(actions.setRecordResult(input));
		}
	}
};

// const mergeProps = (stateProps, dispatchProps, ownProps) =>{
// 	const {dispatch} = dispatchProps;
// 	console.log(JSON.stringify(dispatch));
// 	console.log(JSON.stringify(ownProps))
// 	return {

// 		changeCurrentBlock: (input) =>{
// 			// dispatch(actions.setCurrentBlockPosition(input))
// 			console.log(input)
// 		}
// 	}
// };

const TableCon = connect (
	mapStateToProps,
	mapDispatchToProps,
	// null,
	// mergeProps
)(Table);

export default TableCon;