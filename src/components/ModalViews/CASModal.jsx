import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export class CASModal extends React.Component{
	render() {
		let {show, changeCASModalView} = this.props;
		return (
			<div>		
				<Modal
					show={show}
					onHide={()=>changeCASModalView()}
					container={this}
					aria-labelledby='contained-modal-title'
				>
					<Modal.Header closeButton>
			        	<Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			            <h1>CAS</h1>
			        </Modal.Body>
			        <Modal.Footer>
			            <Button onClick={close}>Close</Button>
			        </Modal.Footer>
				</Modal>
			</div>
		)
	}
}

