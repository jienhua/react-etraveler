import React from 'react';
import {Button} from 'react-bootstrap';

class Sales_order_info extends React.Component {
	
	render() {

		let {isSOInfoHidden, toggleSOInfoView, props, isSummaryView} = this.props;
		return (
			<div style={{display:isSummaryView?"none":""}}>
				<h4>
					//Sales Order Info
					<Button style={{float:'right'}}
					   onClick={()=>toggleSOInfoView()}>Hidden</Button>
				</h4>
				<div style={{clear:'both'}} />
				<div style={{display:isSOInfoHidden?"none":"" }}>
				{props.map((e, index)=>{
					return (
						<div key={index}>
							{e[0]}: 
							<input defaultValue={e[1]} />
						</div>
					)
				})}
				</div>
				<hr/>
			</div>
		)
	}
}

export default Sales_order_info;