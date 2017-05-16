import React from 'react';
import {FullPageTable, SingleBlockView, SummaryView} from '../components';
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
		console.log('click')
		console.log(event.target.tagName)
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
			 changeSummaryView,
			 setRecordResult} = this.props;
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
			</div>
		)
	}
}

export default Table;
