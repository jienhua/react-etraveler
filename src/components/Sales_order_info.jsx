import React from 'react';
import {Button, FieldGroup, FormGroup, ControlLabel, FormControl, Col,Form, Collapse} from 'react-bootstrap';

class Sales_order_info extends React.Component {
	
	modLabel(label){
		return label.split('_').map(w=>{
			w = w.split('');
			let part = w.splice(1);
			w[0] = w[0].toUpperCase();
			return w.concat(part).join('');
		}).join(' ');
	}

	handleText(event){
		let target = event.target;
		let {setSalesOrderNumber,
			 setProductName,
			 setCustomerNumber,
			 setAPTPNNumber} = this.props;
		if(target.id === 'sales_order_num'){
			setSalesOrderNumber(target.value);
		}else if(target.id === 'product_name'){
			setProductName(target.value);
		}else if(target.id === 'customer_num'){
			setCustomerNumber(target.value);
		}else if(target.id === 'apt_pn_num'){
			setAPTPNNumber(target.value);
		}
	}

	render() {
		let {isSOInfoHidden, toggleSOInfoView, props, isSummaryView} = this.props;
		return (
			<div style={{display:isSummaryView?"none":""}}
				 onBlur={(event)=>this.handleText(event)}>
				<h4>
					# Sales Order Info
					<Button style={{float:'right'}}
					   onClick={()=>toggleSOInfoView()}>Hidden</Button>
				</h4>
				<div style={{clear:'both'}} />
				<Collapse in={!isSOInfoHidden}>
					<Form horizontal>
					{props.map((e, index)=>{
						return (
							<FormGroup key={index}>
								<Col sm={2} componentClass={ControlLabel}>
									{this.modLabel(e[0])}
								</Col>
								<Col sm={4}>
									<FormControl defaultValue={e[1]} 
												 id={e[0]}
												 bsSize='sm'/>
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

export default Sales_order_info;