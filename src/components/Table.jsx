import React from 'react';
import {FullPageTable, SingleBlockView, SummaryView, CASModal} from '../components';
import {Button, ButtonGroup} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

class Table extends React.Component{

	constructor(props){
		super(props);
		this.state={
			CAS:{
				blocks_id:null,
				record_process_index:null
			}
		}
	}

	updateText(event){
		let {setRecordResult, singleBlockViewProps, blocks} = this.props;

		if(event.target.id.split('_').length <0) return;

		let eventProp = event.target.id.split('_');
		if(eventProp[0] === 'CAS'){
			// 	"process_record": [
			// 		{
			// 			...,
			//			"CAS":{
			//			 	"motherboardSN":"...",
			//			 	"IC":"...",
			//			 	"SSDMPN":"...",
			//			 	"SSDSN":"...",
			//			 	"DIMMMPN":"...",
			//			 	"DIMMSN":"...",
			//			}
			// 		}
			// 	],

			let {blocks_id, process_record_index} = this.state.CAS;
			// 0 = CAS
			// 1 = input name
			let nextBlock = cloneDeep(blocks[blocks_id]);
			nextBlock.process_record[process_record_index].result = 'CAS';

			if(!nextBlock.process_record[process_record_index].hasOwnProperty('CAS')){
				nextBlock.process_record[process_record_index].CAS = {};
			}
			nextBlock.process_record[process_record_index].CAS[eventProp[1]] = event.target.value;

			setRecordResult({
				index: parseInt(blocks_id),
				data: nextBlock
			},()=>{
				// reset state
				this.setState({
					CAS:{}
				})
			})

		}else{
			let	block_id = eventProp[1],
				type = eventProp[0],
				process_record_index = eventProp[2];
				// 0 = input type
				// 1 = blocks_id
				// 2 = record_process index
			if(type === 'input'){
				let nextBlock = cloneDeep(blocks[block_id]);
				nextBlock.process_record[process_record_index].result = event.target.value;
				setRecordResult({
					index: parseInt(block_id),
					data: nextBlock
				})
			}else if(type === 'replaceInput'){
				let nextBlock = cloneDeep(blocks[block_id]);
				let oldB = nextBlock.process_record[0], 
					newB = nextBlock.process_record[1];

				if(parseInt(process_record_index)===0){
					oldB.result = event.target.value;
				}else{
					newB.result = event.target.value;
				}
				if(oldB.result && newB.result){
					nextBlock.error = `Replace ${oldB.des}: ${oldB.result} with ${newB.des}: ${newB.result}.`;
				}else{
					delete nextBlock.error;
				}
				// nextBlock.error = errorMsg;
				setRecordResult({
					index: parseInt(block_id),
					data:nextBlock
				})
			}
		}

		event.stopPropagation();
	}

	handleClick(event){
		if(event.target.tagName !== 'BUTTON') return;
		let eventProp = event.target.id.split('_');
		let {blocks, setRecordResult, changeCASModalView} = this.props;
		if(eventProp[3] !== 'CAS' &&  eventProp[0] === 'multiButton'){
			// 0 = button type
			// 1 = blocks_id
			// 2 = record_process index
			// 3 = bool or string result
			let nextBlock = cloneDeep(blocks[eventProp[1]]);
			let result = eventProp[3];

			// check if there are addtion error handing
			nextBlock.error = '';
			if(nextBlock.process_record[eventProp[2]].error_options &&
				nextBlock.process_record[eventProp[2]].error_options.hasOwnProperty(eventProp[3])){
				nextBlock.error = nextBlock.process_record[eventProp[2]].error_options[eventProp[3]];
			}

			nextBlock.process_record[eventProp[2]].result = result;
			setRecordResult({
				index: parseInt(eventProp[1]),
				data: nextBlock
			})
		}
		else if(eventProp[3] === 'CAS'){
			// event from multi button CAS button
			let nextBlock = cloneDeep(blocks[eventProp[1]]);
			let nextCAS = nextBlock.process_record[eventProp[2]].CAS;
			nextBlock.process_record[eventProp[2]].result = 'CAS';
			nextBlock.error = 'CAS';
			if(nextCAS===undefined){nextCAS={};}
			nextCAS.blocks_id = eventProp[1];
			nextCAS.process_record_index = eventProp[2];

			this.setState({
				CAS:nextCAS
			}, ()=>{
				setRecordResult({
					index: parseInt(eventProp[1]),
					data: nextBlock
				});
				changeCASModalView();
			})
		}else if(eventProp[0] === 'CASU-Boot'){
			// event from CAS Modal U-Boot button
			let {CAS} = this.state;
			let nextBlock = cloneDeep(blocks[CAS.blocks_id]);
			let CASData;

			if(nextBlock.process_record[CAS.process_record_index].hasOwnProperty('CAS')){
				CASData = nextBlock.process_record[CAS.process_record_index].CAS;
			}else{
				CASData = {};
			}

			if(CASData.hasOwnProperty('U-Boot')){
				CASData['U-Boot'] = !CASData['U-Boot'];
			}else{
				CASData['U-Boot'] = true;
			}
			nextBlock.process_record[CAS.process_record_index].CAS = CASData;
			CAS['U-Boot'] = CASData['U-Boot'];
			this.setState({
				CAS:CAS
			})
			setRecordResult({
				index: parseInt(CAS.blocks_id),
				data: nextBlock
			})
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
			 changeCASModalView,
			 setAnalysisProcessNote,
			 analysis_process_note} = this.props;
		let {CAS} = this.state;
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

				<ButtonGroup style={{marginLeft: "25%"}}>
					<Button onClick={()=>setAnalysisProcessNote('Scan Duplicate')}
							active={analysis_process_note==='Scan Duplicate'?true:false}>
						Scan Duplicate
					</Button>
					<Button onClick={()=>setAnalysisProcessNote('CND')}
							active={analysis_process_note==='CND'?true:false}>
						CND
					</Button>
				</ButtonGroup>

				{isSummaryView? <SummaryView blueprint={blueprint}
											 blocks={blocks}
											 blocksHeader={blocksHeader}
											 analysis_process_note={analysis_process_note}/> : 
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
						  changeCASModalView={changeCASModalView} 
						  CASData={CAS}/>
			</div>
		)
	}
}

export default Table;
