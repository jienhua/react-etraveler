import React from 'react';
import {Button} from 'react-bootstrap';


class Header extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	let temp = [];
	// 	for(let x in props.traveler){
	// 		temp.push([x, props.traveler[x]]);
	// 	}

	// 	this.state = {
	// 		props: temp
	// 	}
	// }

	render() {
		// let {props} = this.state;
		let {isHeaderHidden, toggleHeaderView, props, isSummaryView} = this.props;
		return (
			<div style={{display:isSummaryView?'none':''}}>
				<h4>
					//eTraveler Header
					<Button style={{float:'right'}}
						   onClick={()=>toggleHeaderView()}>Hidden</Button>
				</h4>
				<div style={{display:isHeaderHidden?"none":""}}>
					{props.map((e,index)=>{
						return (
							<div key={index}>
								{e[0]}:<input defaultValue={e[1]} />
							</div>
						)
					})}
				</div>
				<hr/>
			</div>
		)
	}
}

export default Header;