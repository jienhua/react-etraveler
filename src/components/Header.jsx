import React from 'react';
import {Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';


class Header extends React.Component{

	modLabel(label){
		return label.split('_').map(w=>{
			w = w.split('');
			let part = w.splice(1);
			w[0] = w[0].toUpperCase();
			return w.concat(part).join('');
		}).join(' ');
	}

	render() {
		let {isHeaderHidden, toggleHeaderView, props, isSummaryView} = this.props;
		return (
			<div style={{display:isSummaryView?'none':''}}>
				<h4>
					//eTraveler Header
					<Button style={{float:'right'}}
						   onClick={()=>toggleHeaderView()}>Hidden</Button>
				</h4>
				<div style={{display:isHeaderHidden?"none":""}}>
					<Form horizontal>
						{props.map((item, index)=>{
							return (
									<FormGroup key={index}>
										<Col sm={2} componentClass={ControlLabel}>
											{this.modLabel(item[0])}
										</Col>
										<Col sm={4}>
											<FormControl defaultValue={item[1]} />
										</Col>
									</FormGroup>	
							)
						})}
					</Form>
				</div>
				<hr/>
			</div>
		)
	}
}

export default Header;