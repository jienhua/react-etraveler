import React from 'react';
import {BlockView} from '../../components';
import {ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
// const hiddeStyle = (index, currShowIndex) =>{
// 	let display = "";
// 	if(index !== currShowIndex){
// 		display = 'none';
// 	}
// 	return {
// 		display: display,
// 		border:'solid'
// 	}
// }


class SingleBlockView extends React.Component {

	changeBlock(input, isButtonGroup=false){
		let {changeCurrentBlock, singleBlockViewProps, blueprint, setBlockHeaderPosition} = this.props;
		let max = 0;
		let currentGroupHeaderPosition = singleBlockViewProps.currentGroupPosition;

		if(!isButtonGroup){
			// count total number of blocks
			blueprint.map(station=>{
				station.objects.map(o=>{
					max+=o.blocks.length;
					return;
				})
				return;
			})

			if(input === -1 && singleBlockViewProps.currentPosition > 0){
				changeCurrentBlock(singleBlockViewProps.currentPosition+input);
			}else if(input === 1 && singleBlockViewProps.currentPosition <max-1){
				changeCurrentBlock(singleBlockViewProps.currentPosition+input);
			}
		}else{
			changeCurrentBlock(parseInt(input.target.id));
		}
	}

	// onBlur(event){
	// 	let {setRecordResult, singleBlockViewProps, blocks} = this.props;
	// 	let eventID = event.target.id.split('_'),
	// 		block_id = eventID[1],
	// 		type = eventID[0],
	// 		process_record_index = eventID[2];
	// 	if(type === 'input'){
	// 		let nextBlock = Object.assign({}, blocks[block_id]);
	// 		nextBlock.process_record[process_record_index].result = event.target.value;
			
	// 	}
	// 	event.stopPropagation();
	// }

	render() {
		let {blueprint, blocks, blocksHeader, singleBlockViewProps,/*blocksPositionArr*/
			setRecordResult} = this.props;
		let index = 0,
			buttonIndex = 0;

		return (
			<div>		
				<br/>
				<ButtonGroup>
					<Button onClick={()=>this.changeBlock(-1)}>Left</Button>
					<Button onClick={()=>this.changeBlock(1)}>Right</Button>
				</ButtonGroup>
				<br/><br/>
				<ButtonToolbar style={{float:'right'}}>
					<ButtonGroup>
						{
							blueprint.map((station, sIndex)=>{
								let output=[];
								station.objects.map((o, oIndex)=>{
									o.blocks.map((b, bIndex)=>{
										output.push(
											<Button id={buttonIndex}
													bsSize="xsmall"
													//or small
													onClick={(e)=>this.changeBlock(e, true)}
													style={{background:singleBlockViewProps.currentPosition===buttonIndex?
															"grey":""}}>
														{station.station+'-'+(oIndex+1)+'-'+(bIndex+1)}
											</Button>
										)
										buttonIndex+=1;
										return;
									})
									return;
								})
								return output;
							})
						}
					</ButtonGroup>
				</ButtonToolbar>
				{/*<span style={{float:'right', marginRight:'20px', paddingTop:'3px'}}><b>Station: </b></span>*/}
				<div style={{clear:'both'}}></div>
				{
					blueprint.map((station, sIndex)=>{
						let output = [];
						station.objects.map((o, oIndex)=>{
							o.blocks.map((b,bIndex)=>{
								output.push(
									<BlockView key={blocks[b].blocks_id} 
										 id={index}
										 statePosition={bIndex}
										 hidden={{index:index, currentPosition:singleBlockViewProps.currentPosition}}
										 groupHeader={o.description}
										 block={blocks[b]}
										 blocksHeader={blocksHeader}
										 stationNum={sIndex}
										 setRecordResult={setRecordResult}
									/>
								)
								index+=1;
								return;
							})
							return;
						})
						return output;
					})
				}
				{singleBlockViewProps.currentGroupPosition}
			</div>
		)
	}
}

export default SingleBlockView;