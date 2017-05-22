import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, Panel,
		Grid, Row, Col, ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import {cloneDeep} from 'lodash';

const hiddeStyle = (index, currShowIndex) =>{
	let display = "";
	if(index !== currShowIndex){
		display = 'none';
	}
	return {
		display: display,
		padding: '2px'
	}
}

const modHeader = (input) =>{
	return input.split(' ').join('_').toLowerCase();
}

class BlockView extends React.Component{

	render(){
		let {groupHeader, block, hidden, blocksHeader, stationNum, statePosition, stationID} = this.props;
		
		return(
			<div style={hiddeStyle(hidden.index, hidden.currentPosition)}>		
				<Panel header={'Station '+stationID+' - '+groupHeader}>
					<Grid>
						<Row>
							<Col sm={6}>
								<Form>
									{blocksHeader.map((e,index)=>{
										// filter out unwant items
										if(modHeader(e) === "process_record" ||
										   modHeader(e) === "error" ||
										   modHeader(e) === "action") return;
										
										return (
											<FormGroup key={index}>
												<ControlLabel>{e}:</ControlLabel>
												<FormControl.Static>
													{block[modHeader(e)]}
												</FormControl.Static>
											</FormGroup>
										)
									})}
									{/*<FormGroup>
										<ControlLabel>Date:</ControlLabel>
										<FormControl placeholder="Responsible" />
									</FormGroup>
									<FormGroup>
										<ControlLabel>Responsible:</ControlLabel>
										<FormControl type="date" />
									</FormGroup>*/}
								</Form>
							</Col>
							<Col sm={5}>
								{block.process_record.map((e, index)=>{
									let output;
									if(e.type ==='multi_button'){

										output=(
											<FormGroup key={index}>
												<ControlLabel>Option:</ControlLabel>
												<ButtonToolbar>
													<ButtonGroup>
														{e.option.map((item, itemIndex)=>{
															return (
																<Button key={itemIndex} 
																		id={'multiButton_'+block.blocks_id+'_'+index+'_'+item}
																		active={e.result===undefined?false:
																				e.result === item?true:false}
																		>
																	{item}
																</Button>
															)
														})}
													</ButtonGroup>
												</ButtonToolbar>
											</FormGroup>
										)
									}else if(e.type ==='input' || e.type ==='replaceInput'){
										output = (
											<FormGroup key={index}>
												<ControlLabel>{e.des}:</ControlLabel>
												<FormControl id={e.type+'_'+block.blocks_id+'_'+index} defaultValue={e.result} placeholder={e.des} />
											</FormGroup>
										)
									}
									return output;
								})}
							</Col>
						</Row>
					</Grid>
				</Panel>
			</div>
		)
	}
}

export default BlockView;
