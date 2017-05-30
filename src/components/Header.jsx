import React from 'react';
import {Button, Form, FormGroup, Col, FormControl, ControlLabel, Collapse} from 'react-bootstrap';


class Header extends React.Component{

	modLabel(label){
		return label.split('_').map(w=>{
			w = w.split('');
			let part = w.splice(1);
			w[0] = w[0].toUpperCase();
			return w.concat(part).join('');
		}).join(' ');
	}

	handleText(event){
		let {setSerialNumber} = this.props;
		let target = event.target;
		if(target.id === 'serial_num'){
			setSerialNumber(target.value);
		}
	}

	render() {
		let {isHeaderHidden, toggleHeaderView, props, isSummaryView} = this.props;
		return (
			<div style={{display:isSummaryView?'none':''}}
				 onBlur={(event)=>this.handleText(event)}>
				<h4>
					# eTraveler
					<Button style={{float:'right'}}
						   onClick={()=>toggleHeaderView()}>Hidden</Button>
				</h4>
				<Collapse in={!isHeaderHidden}>
					<Form horizontal>
						{props.map((item, index)=>{
							let skip = ['traveler_id', 'isComplete', 'analysis_process_note', 'status', 'traveler_template_id'];
							if(skip.indexOf(item[0]) !== -1){
								return;
							}
							return (
								<FormGroup key={index}>
									<Col sm={2} componentClass={ControlLabel}>
										{this.modLabel(item[0])}
									</Col>
									<Col sm={4}>
										<FormControl defaultValue={item[1]} 
													 bsSize='sm'
													 id={item[0]}/>
									</Col>
								</FormGroup>	
							)
						})}
					</Form>
				</Collapse>
				<hr/>
			</div>
		)
	}
}

export default Header;