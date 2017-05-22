import React from 'react';
import {Button} from 'react-bootstrap';

class FullPageTableRow extends React.Component{

	renderProcess(pr){
		let {block} = this.props;
		let output = [];
		pr.map((pr, prIndex)=>{
			// if(pr.type==='bool_button'){
			// 	output.push(
			// 		<div key={prIndex}>
			// 			<Button bsSize="xsmall"
			// 					id={'boolButton_'+block.blocks_id+'_'+prIndex+'_true'}
			// 					active={pr.result===undefined?false:
			// 							pr.result?true:false}>{pr.bool_option.true}</Button>
			// 			<Button bsSize="xsmall"
			// 					id={'boolButton_'+block.blocks_id+'_'+prIndex+'_false'}
			// 					active={pr.result===undefined?false:
			// 							pr.result?false:true}>{pr.bool_option.false}</Button>
			// 		</div>
			// 	)
			// }else 
			if(pr.type ==='input' || pr.type ==='replaceInput'){
				output.push(
					<div key={prIndex}>
						{pr.des}: <input id={pr.type+'_'+block.blocks_id+'_'+prIndex} defaultValue={pr.result}/>
					</div>
				)
			}else if(pr.type === 'multi_button'){
				output.push(
					<div key={prIndex}>
						{pr.option.map((button, bIndex)=>{
							return (
								<Button key={bIndex}
										id={'multiButton_'+block.blocks_id+'_'+prIndex+'_'+button}
										active={pr.result===undefined?false:
												pr.result===button?true:false}
										bsSize="xsmall">
									{button}
								</Button>
							);
						})}
					</div>
				)
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
				<td>{this.renderProcess(block.process_record)}
				</td>
				<td><input/></td>
				<td><input type="date"/></td>
			</tr>
		)
	}
}

export default FullPageTableRow;