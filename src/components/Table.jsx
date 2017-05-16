import React from 'react';
import {FullPageTable, SingleBlockView, SummaryView} from '../components';
import {Button} from 'react-bootstrap';

class Table extends React.Component{

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
			 blocksPositionArr,
			 setRecordResult} = this.props;
			 // console.log(JSON.stringify(this.props));
		return (
			<div>
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
									  				   blocksPositionArr={blocksPositionArr}
									  				   setRecordResult={setRecordResult}/>}
			</div>
		)
	}
}

export default Table;
