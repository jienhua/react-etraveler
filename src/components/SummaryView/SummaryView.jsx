import React from 'react';
import {Table, Panel} from 'react-bootstrap';
import {SummaryViewRow} from '../../components';

class SummaryView extends React.Component{

	render(){
		let {blueprint, blocks, blocksHeader} = this.props;
		return(
			<div>
				<h3>Summary View</h3>
				<Table bordered condensed>
					<thead>
				      <tr>
				        <th>Station</th>
				        {blocksHeader.map((e, index)=>{
				        	if(e === 'Error' || e==='Action') return;
				        	return <th key={index}>{e}</th>
				        })}
				        <th>Responsible</th>
				        <th>Date</th>
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
					    			<tr>
					    				<td rowSpan={rowSpan}>{station.station}</td>
					    			</tr>
					    		)
					    		station.objects.map((object, oIndex)=>{
					    			output.push(
					    				<tr>
					    					<td colSpan={blocksHeader.length+3}><b>{object.description}</b></td>
					    				</tr>,
					    			)
					    			object.blocks.map((b, bIndex)=>{
					    				output.push(
					    					<SummaryViewRow blocksHeader={blocksHeader} block={blocks[b]} isBlockHeader={false}/>
					    				)
					    				return;
					    				})
					    			return;
					    		})
					    		return output;
					    	})}
				    </tbody>
				</Table>
				<br/>
				<Panel header='Disposition'>
					{Object.keys(blocks).map(key=>{
						let output = [];
						blocks[key].process_record.map((e, index)=>{
							if(e.type === 'bool_button' && e.result===false && e.action_type==='Disposition'){
								output.push(
									<p>{blocks[key].description} - {blocks[key].error}</p>
								)
							}
							return;
						})
						return output;
					})}
				</Panel>
				<br/>
				<Panel header='Analysis Process Note'>
					{Object.keys(blocks).map(key=>{
						let output = [];
						blocks[key].process_record.map((e, index)=>{
							console.log(e.type, e.result)
							if(e.type === 'bool_button' && e.result===false && e.action_type==='Analysis Process Note'){
								output.push(
									<p>{blocks[key].description} - {blocks[key].error}</p>
								)
							}
							return;
						})
						return output;
					})}
				</Panel>
			</div>
		)
	}
};

export default SummaryView;