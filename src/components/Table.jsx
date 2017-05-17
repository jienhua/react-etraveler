import React from 'react';
import {FullPageTable, SingleBlockView, SummaryView, CASModal} from '../components';
import {Button} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

class Table extends React.Component{

	updateText(event){
		let {setRecordResult, singleBlockViewProps, blocks} = this.props;

		if(event.target.id.split('_').length <3) return;
		let eventID = event.target.id.split('_'),
			block_id = eventID[1],
			type = eventID[0],
			process_record_index = eventID[2];
		if(type === 'input'){
			let nextBlock = cloneDeep(blocks[block_id]);
			nextBlock.process_record[process_record_index].result = event.target.value;
			setRecordResult({
				index: parseInt(block_id),
				data: nextBlock
			})
		}

		event.stopPropagation();
	}

	handleClick(event){
		if(event.target.tagName !== 'BUTTON') return;
		let eventProp = event.target.id.split('_');
		let {blocks, setRecordResult, changeCASModalView} = this.props;
		if(eventProp[3] !== 'CAS' && (eventProp[0]==='boolButton' || eventProp[0] === 'multiButton')){
			// 0 = button type
			// 1 = blocks_id
			// 2 = record_process index
			// 3 = bool or string result
			let nextBlock = cloneDeep(blocks[eventProp[1]]);
			let result;
			if(eventProp[0]==='boolButton') {
				result = (eventProp[3] == 'true');
			}else{
				result = eventProp[3];
			}
			nextBlock.process_record[eventProp[2]].result = result;
			setRecordResult({
				index: parseInt(eventProp[1]),
				data: nextBlock
			})
		}else if(eventProp[3] === 'CAS'){
			changeCASModalView();
		}

		event.stopPropagation();
	}

	render() {
		let {changeTableView, 
			 isFullPageTableView, 
			 blocks, 
			 blueprint, 
			 blocksHeader,
			 singleBlockViewProps,
			 changeCurrentBlock,
			 isSummaryView,
			 isCASModalView,
			 changeSummaryView,
			 setRecordResult,
			 changeCASModalView} = this.props;
		return (
			<div onBlur={(event)=>this.updateText(event)}
				 onClick={(event)=>this.handleClick(event)}>
				<h4>
					Table
					<Button onClick={changeSummaryView}
					   style={{float:'right'}}>
					   {isSummaryView?"Back":"SummaryView"}
					</Button>
				</h4>
				<Button onClick={changeTableView}
					   style={{display:isSummaryView?"none":""}}
				>{isFullPageTableView?"SingleBlockView":"FullPageView"}</Button>
				{isSummaryView? <SummaryView blueprint={blueprint}
											 blocks={blocks}
											 blocksHeader={blocksHeader}/> : 
					isFullPageTableView? <FullPageTable blueprint={blueprint} 
													 blocks={blocks} 
													 blocksHeader={blocksHeader}
													 setRecordResult={setRecordResult}/> : 
									  <SingleBlockView blueprint={blueprint}
									  				   blocks={blocks}
									  				   blocksHeader={blocksHeader}
									  				   singleBlockViewProps={singleBlockViewProps}
									  				   changeCurrentBlock={changeCurrentBlock}
									  				   setRecordResult={setRecordResult}/>}
				<CASModal show={isCASModalView} 
						  changeCASModalView={changeCASModalView}/>
			</div>
		)
	}
}

export default Table;
