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
				      <tr style={{backgroundColor:'#f5f5f5'}}>
				        <th>Station</th>
				        {blocksHeader.map((e, index)=>{
				        	if(e==='Error'||e==='Action') return;
				        	return <th key={index}>{e}</th>
				        })}
				      </tr>
				    </thead>

				    <tbody>
				    	{blueprint.map((station, sIndex)=>{
				    		let output =[];
				    		let rowSpan = 1;

				    		// find out number for rowSpan
				    		station.objects.map(o=>{
				    			rowSpan+= o.blocks.length+1;
				    			return;
				    		})

				    		output.push(
				    			<tr style={{backgroundColor:'#f5f5f5'}}>
				    				<td rowSpan={rowSpan}>{station.station}</td>
				    			</tr>
				    		)
				    		station.objects.map((object, oIndex)=>{
				    			output.push(
				    				<tr style={{backgroundColor:'#f5f5f5'}}>
				    					<td colSpan={blocksHeader.length+3}><b>{object.description}</b></td>
				    				</tr>,
				    			)
				    			object.blocks.map((b, bIndex)=>{
				    				output.push(
				    					<FullPageTableRow id={index} blocksHeader={blocksHeader} block={blocks[b]} isBlockHeader={false}
				    										  setRecordResult={setRecordResult}/>
				    				)
				    				index+=1;
				    				return;
				    				})
				    			return;
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