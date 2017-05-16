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
		let blocksPositionArr = singleBlockViewProps.blocksPositionArr;
		// count total number of blocks
		if(!isButtonGroup){
			blueprint.map(e=>{
				max+= e.blocks.length;
				return;
			})
			if(input === -1 && singleBlockViewProps.currentPosition > 0){
				changeCurrentBlock(singleBlockViewProps.currentPosition+input);
			}else if(input === 1 && singleBlockViewProps.currentPosition <max-1){
				changeCurrentBlock(singleBlockViewProps.currentPosition+input);
			}
		}else{
			// console.log('here', input.target.id)
			changeCurrentBlock(parseInt(input.target.id));
		}
	}

	keyUp(event){
		let {setRecordResult, singleBlockViewProps, blocks} = this.props;
		let eventID = event.target.id.split('_'),
			id = eventID[1],
			type = eventID[0];
		if(type === 'input'){
			console.log(id, type)
			console.log(event.target)
			console.log(JSON.stringify(blocks[singleBlockViewProps.currentPosition]));
		}
	}

	render() {
		let {blueprint, blocks, blocksHeader, singleBlockViewProps,blocksPositionArr,
			setRecordResult} = this.props;
		let index = 0,
			buttonIndex = 0;

		return (
			<div onKeyUp={(event)=>this.keyUp(event)}>		
				<br/>
				<ButtonGroup>
					<Button onClick={()=>this.changeBlock(-1)}>Left</Button>
					<Button onClick={()=>this.changeBlock(1)}>Right</Button>
				</ButtonGroup>
				<br/><br/>
				<ButtonToolbar style={{float:'right'}}>
					<ButtonGroup>
						{	
							blueprint.map((e, index)=>{
							let output = [];
							e.blocks.map(b=>{
								output.push(
									<Button id={buttonIndex}
										    onClick={(e)=>this.changeBlock(e,true)}
										    style={{background:singleBlockViewProps.currentPosition===buttonIndex?
										    	"grey":""}}>{buttonIndex+1}</Button>
								)
								buttonIndex+=1;
								return;
							})
							return output;
						})}
					</ButtonGroup>
				</ButtonToolbar>
				{/*<span style={{float:'right', marginRight:'20px', paddingTop:'3px'}}><b>Station: </b></span>*/}
				<div style={{clear:'both'}}></div>

				{blueprint.map((e, bpIndex)=>{
					let output = [];
					e.blocks.map((b, bIndex)=>{
						output.push(
							<BlockView key={blocks[b].blocks_id} 
								 id={index}
								 statePosition={bIndex}
								 hidden={{index:index, currentPosition:singleBlockViewProps.currentPosition}}
								 groupHeader={e.description}
								 block={blocks[b]}
								 blocksHeader={blocksHeader}
								 stationNum={bpIndex}
								 setRecordResult={setRecordResult}
							/>
						)
						index+=1;
						return;
					})

					return output;
				})}
				{singleBlockViewProps.currentGroupPosition}
			{/* add blocks button group
				<ButtonToolbar style={{float:'right'}}>
					{blueprint.map((e, index)=>{
						// console.log(index)
						return (
							<ButtonGroup key={index} >
								{e.blocks.map((b,bIndex)=>{
									return <Button style={blockButtonGroupStyle(bIndex)} key={bIndex}>{bIndex+1}</Button>
								})}
							</ButtonGroup>
						)
					})}
				</ButtonToolbar>}*/}
			</div>
		)
	}
}

export default SingleBlockView;