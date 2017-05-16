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

	getResult(input){
		switch(input){
			case undefined:
				return '';
			case true:
				return 'Yes';
			case false:
				return 'No';
			default:
				return '';
		}
	}


	render() {
		const {block} = this.props;
		return (
			<tr>
				<td>{block.description}</td>
				{/*<td>{block.action}</td>*/}
				<td>{this.getResult(block.process_record[0].result)}</td>
				<td><input disabled/></td>
				<td><input type="date" disabled/></td>
			</tr>
		)
	}
}

export default SummaryViewRow;