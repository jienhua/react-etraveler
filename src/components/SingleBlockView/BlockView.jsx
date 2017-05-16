import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button, Checkbox, Panel,
		Grid, Row, Col, ButtonToolbar,ButtonGroup} from 'react-bootstrap';

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

const clickBoolButton = (event, index, prIndex, bool, block) => {
	// console.log(event.target, index, bool, block);
	block.process_record[prIndex].result = bool;
	console.log(block);
}

class BlockView extends React.Component{

	clickBoolButton(event, index, prIndex, bool){
	let {block, setRecordResult} = this.props
	// console.log(event.target, index, bool, block);
	let temp = Object.assign({}, block);
	temp.process_record[prIndex].result = bool;
	setRecordResult({
		index: index,
		data: temp
	})
	}

	render(){
		let {groupHeader, block, hidden, blocksHeader, stationNum, statePosition} = this.props;
		
		return(
			<div style={hiddeStyle(hidden.index, hidden.currentPosition)}>		
				{/*<p><b>Station: {stationNum+1}</b></p>*/}
				<Panel header={groupHeader}>
					<Grid>
						<Row>
							<Col sm={6}>
								<Form>
									{blocksHeader.map((e,index)=>{
										// filter out unwant items
										if(modHeader(e) === "process_record" ||
										   modHeader(e) === "error") return;
										
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
									if(e.type==='bool_button'){
										output = (
											<FormGroup key={index}>
												<ControlLabel>Option:</ControlLabel>
												<ButtonToolbar>
													<ButtonGroup>
														<Button onClick={(event)=>this.clickBoolButton(event, statePosition,index,true)}
																active={e.result===undefined?false:
																		e.result?true:false}>{e.bool_option.true}</Button>
														<Button onClick={(event)=>this.clickBoolButton(event, statePosition,index,false)}
																active={e.result===undefined?false:
																	    e.result?false:true}>{e.bool_option.false}</Button>
													</ButtonGroup>
												</ButtonToolbar>
											</FormGroup>
										)
									}else if(e.type ==='multi_button'){

										output=(
											<FormGroup key={index}>
												<ControlLabel>Option:</ControlLabel>
												<ButtonToolbar>
													<ButtonGroup>
														{e.option.map((item, itemIndex)=>{
															return <Button key={itemIndex}>{item}</Button>
														})}
													</ButtonGroup>
												</ButtonToolbar>
											</FormGroup>
										)
									}else if(e.type ==='input'){
										output = (
											<FormGroup key={index}>
												<ControlLabel>{e.des}:</ControlLabel>
												<FormControl id={'input_'+index} placeholder={e.des} />
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
