import React from 'react';


class SummaryViewRow extends React.Component{

	constructor(props){
		super(props);
		let cols = [];
		this.props.blocksHeader.map(e=>{
			e = e.split(' ').join('_').toLowerCase();
			if(this.props.block.hasOwnProperty(e)){
				cols.push(this.props.block[e])
			}
			return;
		})
	}

	renderProcess(input){
		let output = [];
		input.map((pr, prIndex)=>{
			if(pr.type === 'bool_button' || pr.type === 'multi_button'){
				output.push(
					<p key={prIndex}>{pr.result}</p>
				)
			}else if(pr.type === 'input'){
				if(pr.result){
					output.push(
						<p key={prIndex}>{pr.des}: {pr.result}</p>
					)
				}
			}
			return;
		})
		return output;
	}


	render() {
		const {block} = this.props;
		return (
			<tr>
				<td>{block.description}</td>
				{/*<td>{block.action}</td>*/}
				<td>{this.renderProcess(block.process_record)}</td>
				<td><input disabled/></td>
				<td><input type="date" disabled/></td>
			</tr>
		)
	}
}

export default SummaryViewRow;