import React from 'react';

import {FormControl} from 'react-bootstrap';

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
			}else if(pr.type === 'input' || pr.type === 'replaceInput'){
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

	handleDateFormat(input){
		let output = '';
		if(input !== ''){
			let date = new Date(JSON.parse(input));
			let year = date.getFullYear(),
				month = date.getMonth()+1,
				day = date.getDate();
			if(month < 10){
				month = '0'+month;
			}
			output = `${year}/${month}/${day}`;
		}
		return output;
		
	}

	render() {
		const {block} = this.props;
		return (
			<tr>
				<td>{block.description}</td>
				<td>{this.renderProcess(block.process_record)}</td>
				<td>{block.responsible}</td>
				<td>{this.handleDateFormat(block.date)}</td>
			</tr>
		)
	}
}

export default SummaryViewRow;