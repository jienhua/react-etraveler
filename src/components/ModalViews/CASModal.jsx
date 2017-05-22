import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export class CASModal extends React.Component{

	render() {
		let {show, changeCASModalView, CASData} = this.props;
		return (
			<div>		
				<Modal
					show={show}
					onHide={()=>changeCASModalView()}
					container={this}
					aria-labelledby='contained-modal-title'
				>
					<Modal.Header closeButton>
			        	<Modal.Title id="contained-modal-title">CAS Repair Information</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	<form>
			            	<FormGroup>
			            		<ControlLabel>MotherBoard SN:</ControlLabel>
			            		<FormControl id='CAS_motherboardSN' 
			            					 type='text'
			            					 defaultValue={CASData.motherboardSN}/>
			            	</FormGroup>
			            	<hr/>
			            	<FormGroup>
			            		<ControlLabel>IC ???????</ControlLabel>
			            		<FormControl type='text' />
			            	</FormGroup>
			            	<hr/>
			            	<FormGroup>
			            		<ControlLabel>SSD MPN</ControlLabel>
			            		<FormControl id='CAS_SSDMPN' 
			            					 type='text' 
			            					 defaultValue={CASData.SSDMPN}/>
			            	</FormGroup>
			            	<FormGroup>
			            		<ControlLabel>SSD SN</ControlLabel>
			            		<FormControl id='CAS_SSDSN' 
			            					 type='text' 
			            					 defaultValue={CASData.SSDSN}/>
			            	</FormGroup>
			            	<hr/>
			            	<FormGroup>
			            		<ControlLabel>DIMM MPN</ControlLabel>
			            		<FormControl id='CAS_DIMMMPN' 
			            					 type='text' 
			            					 defaultValue={CASData.DIMMMPN}/>
			            	</FormGroup>
			            	<FormGroup>
			            		<ControlLabel>DIMM SN</ControlLabel>
			            		<FormControl id='CAS_DIMMSN' 
			            					 type='text' 
			            					 defaultValue={CASData.DIMMSN}/>
			            	</FormGroup>
			            	<hr/>
			            	<FormGroup>
			            		<ControlLabel>NFF ??????</ControlLabel>
			            		<FormControl type='text' />
			            	</FormGroup>
			            	<hr/>
			            	<FormGroup>
			            		<Button id='CASU-Boot' active={CASData['U-Boot']?true:false}>U-Boot</Button>
			            	</FormGroup>
			            </form>
			        </Modal.Body>
			        <Modal.Footer>
			            <Button onClick={()=>changeCASModalView()}>Close</Button>
			        </Modal.Footer>
				</Modal>
			</div>
		)
	}
}

