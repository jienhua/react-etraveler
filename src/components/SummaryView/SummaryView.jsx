import React from 'react';
import {Table, Panel} from 'react-bootstrap';
import {SummaryViewRow} from '../../components';

class SummaryView extends React.Component{

	handleCASErrorMsg(CASData){
		console.log(JSON.stringify(CASData));
		let errorMsg = [];
		if(CASData.hasOwnProperty('motherboardSN') &&
		   CASData.motherboardSN !== ''){
		   	errorMsg.push(
		   		`CAS replaced MotherBoard with SN: ${CASData.motherboardSN}.`
		   	);
		}
		if((CASData.hasOwnProperty('SSDMPN') && CASData.hasOwnProperty('SSDSN')) &&
				(CASData.SSDMPN !== '' && CASData.SSDSN !== '')){
			errorMsg.push(
				`CAS replaced ${CASData.SSDMPN} SSD SN: with ${CASData.SSDSN}.`
			);
		}
		if((CASData.hasOwnProperty('DIMMMPN') && CASData.hasOwnProperty('DIMMSN')) &&
			(CASData.DIMMMPN !== '' && CASData.DIMMSN !== '')){
			errorMsg.push(
				`CAS replaced ${CASData.DIMMMPN} DIMM SN: with ${CASData.DIMMSN}.`
			);
		}
		if(CASData.hasOwnProperty('U-Boot') && CASData['U-Boot']){
			errorMsg.push(
				`CAS reflash U-Boot.`
			)
		}
		return errorMsg;
	}

	render(){
		let {blueprint, blocks, blocksHeader, analysis_process_note} = this.props;
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
						if(blocks[key].error && blocks[key].action_type === 'Disposition'){
							if(blocks[key].error !== 'CAS'){
								output.push(
									<p><b>{blocks[key].description}</b> - {blocks[key].error}</p>
								);
							}else{
								let errorMsg = this.handleCASErrorMsg(blocks[key].process_record[0].CAS);
								output.push(
									errorMsg.map(msg=>{
										return <p><b>{blocks[key].description}</b> - {msg}</p>
									})
								)
							}
						}
						return output;
					})}
				</Panel>
				<br/>
				<Panel header='Analysis Process Note'>
					{analysis_process_note!==""?
						<p><b>{analysis_process_note}</b></p>:""}
					{Object.keys(blocks).map(key=>{
						let output = [];
						if(blocks[key].error && blocks[key].action_type === 'Analysis Process Note'){
							output.push(
								<p><b>{blocks[key].description}</b> - {blocks[key].error}</p>
							);
						}
						return output;
					})}
				</Panel>
			</div>
		)
	}
};

export default SummaryView;