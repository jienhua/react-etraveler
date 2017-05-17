import React from 'react';
import {Button} from 'react-bootstrap';

class FullPageTableRow extends React.Component{

	renderProcess(pr){
		let {block} = this.props;
		let output = [];
		pr.map((pr, prIndex)=>{
			if(pr.type==='bool_button'){
				output = (
					<div>
					<Button bsSize="xsmall"
							id={'boolButton_'+block.blocks_id+'_'+prIndex+'_true'}
							active={pr.result===undefined?false:
									pr.result?true:false}>{pr.bool_option.true}</Button>
					<Button bsSize="xsmall"
							id={'boolButton_'+block.blocks_id+'_'+prIndex+'_false'}
							active={pr.result===undefined?false:
									pr.result?false:true}>{pr.bool_option.false}</Button>
					</div>
				)
			}else if(pr.type ==='input'){
				output = (
					<div>
						{pr.des}: <input id={'input_'+block.blocks_id+'_'+prIndex} defaultValue={pr.result}/>
					</div>
				)
			}else if(pr.type === 'multi_button'){
				pr.option.map((button,bIndex)=>{
					output.push(
						<Button key={bIndex} 
								id={'multiButton_'+block.blocks_id+'_'+prIndex+'_'+button}
								bsSize="xsmall">
							{button}
						</Button>
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
				<td>{this.renderProcess(block.process_record)}
				</td>
				<td><input/></td>
				<td><input type="date"/></td>
			</tr>
		)
	}
}

export default FullPageTableRow;