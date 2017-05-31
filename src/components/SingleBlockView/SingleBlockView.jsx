import React from 'react';
import {BlockView} from '../../components';
import {ButtonToolbar, Button, ButtonGroup, Pager} from 'react-bootstrap';

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

	render() {
		let {blueprint, blocks, blocksHeader, singleBlockViewProps} = this.props;
		let index = 0,
			buttonIndex = 0;

		return (
			<div>		
				<Pager>
					<Pager.Item previous onClick={()=>this.changeBlock(-1)}>&larr; Previous</Pager.Item>
    				<Pager.Item next onClick={()=>this.changeBlock(1)}>Next &rarr;</Pager.Item>
				</Pager>
				
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
				<div style={{clear:'both'}}></div>
				{
					blueprint.map((station, sIndex)=>{
						let output = [];
						station.objects.map((o, oIndex)=>{
							o.blocks.map((b,bIndex)=>{
								output.push(
									<BlockView key={blocks[b].blocks_id} 
										 stationID={station.station}
										 id={index}
										 statePosition={bIndex}
										 hidden={{index:index, currentPosition:singleBlockViewProps.currentPosition}}
										 groupHeader={o.description}
										 block={blocks[b]}
										 blocksHeader={blocksHeader}
										 stationNum={sIndex}
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
				<Pager>
					<Pager.Item previous onClick={()=>this.changeBlock(-1)}>&larr; Previous</Pager.Item>
    				<Pager.Item next onClick={()=>this.changeBlock(1)}>Next &rarr;</Pager.Item>
				</Pager>
			</div>
		)
	}
}

export default SingleBlockView;