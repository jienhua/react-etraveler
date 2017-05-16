import React from 'react';
import {Table} from 'react-bootstrap';
import {FullPageTableRow} from '../../components';


class FullPageTable extends React.Component {

	render() {
		let { blueprint, blocks, blocksHeader, setRecordResult} = this.props;
		let index = 0;
		return (
			<div>
				<Table bordered condensed>
					<thead>
				      <tr>
				        <th>Station</th>
				        {blocksHeader.map((e, index)=>{
				        	if(e==='Error'||e==='Action') return;
				        	return <th key={index}>{e}</th>
				        })}
				        <th>Responsible</th>
				        <th>Date</th>
				      </tr>
				    </thead>

				    <tbody>
				    	{blueprint.map((e, bpIndex) => {

				    		let output = [];
				    		output.push((
				    			<tr>
				    				<td rowSpan={e.blocks.length+1}>{bpIndex+1}</td>
				    				<td colSpan={blocksHeader.length+3}><b>{e.description}</b></td>
				    			</tr>));

				    		e.blocks.map((b, bIndex)=> {
				    			output.push(<FullPageTableRow id={index} blocksHeader={blocksHeader} block={blocks[b]} isBlockHeader={false}
				    										  setRecordResult={setRecordResult}/>)
				    			index+=1;
				    			return ;
				    		})
				    		
				    		return output;	
				    	})}

				    </tbody>
				</Table>
			</div>
		)
	}
}

export default FullPageTable;