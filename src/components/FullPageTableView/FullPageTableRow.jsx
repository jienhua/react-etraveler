import React from 'react';
import {Button} from 'react-bootstrap';

class FullPageTableRow extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	let cols = [];
	// 	this.props.blocksHeader.map(e=>{
	// 		// console.log(e.split(' ').join('_').toLowerCase());
	// 		e = e.split(' ').join('_').toLowerCase();
	// 		if(this.props.block.hasOwnProperty(e)){
	// 			cols.push(this.props.block[e])
	// 		}
	// 		return;
	// 	})
	// 	// console.log(JSON.stringify(cols))
	// 	this.state = ({
	// 		cols:[]
	// 	})
	// }

	renderProcess(pr){
		let {block} = this.props;
		let output = [];
		pr.map((b, bIndex)=>{
			if(b.type==='bool_button'){
				output = (
					<div>
					<Button bsSize="xsmall"
							id={'boolButton_'+block.blocks_id+'_'+bIndex+'_true'}
							active={b.result===undefined?false:
									b.result?true:false}>{b.bool_option.true}</Button>
					<Button bsSize="xsmall"
							id={'boolButton_'+block.blocks_id+'_'+bIndex+'_false'}
							active={b.result===undefined?false:
									b.result?false:true}>{b.bool_option.false}</Button>
					</div>
				)
			}else if(b.type ==='input'){
				output = (
					<div>
						{b.des}: <input id={'input_'+block.blocks_id+'_'+bIndex} defaultValue={b.result}/>
					</div>
				)
			}else if(b.type === 'multi_button'){
				b.option.map((button,bIndex)=>{
					output.push(
						<Button key={bIndex} bsSize="xsmall">{button}</Button>
					)
					return;
				})
			}
			return;
		})
		return output;
	}

	render() {
		const {block, id} = this.props;
		return (
			<tr>
				<td>{block.description}</td>
				{/*<td>{block.action}</td>*/}
				<td>{this.renderProcess(block.process_record)}
				</td>
				<td><input/></td>
				<td><input type="date"/></td>
			</tr>
		)
	}
}

export default FullPageTableRow;


					// <Button bsSize="xsmall"
					// 		onClick={(e)=>this.clickBoolButton(e, 0, true)} 
					// 		active={block.process_record[0].result===undefined?false:
					// 				block.process_record[0].result?true:false}>{block.process_record[0].bool_option.true}</Button>
					// <Button bsSize="xsmall"
					// 		onClick={(e)=>this.clickBoolButton(e, 0, false)}
					// 		active={block.process_record[0].result===undefined?false:
					// 				block.process_record[0].result?false:true}>{block.process_record[0].bool_option.false}</Button>