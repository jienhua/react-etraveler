import React from 'react';

export class SampleRMATable extends React.Component {

	componentDidMount(){

		let colModel =[
			{name:'travelerid',index:'travelerid', width:200,sorttype:"float"},
	   		{name:'rma',index:'rma', width:200, sorttype:"int"},
	   		{name:'invdate',index:'invdate', width:200, sorttype:"date"},
	   		{name:'state',index:'state', width:200},
	   		{name:'so',index:'so', width:200,sorttype:"float"},				
   		];

		$("#jqGrid").jqGrid({
				styleUI : 'Bootstrap',
                datatype: "local",
                colNames:['Traveler ID','RMA', 'Date', 'Date','SO'],
                colModel: colModel,
				viewrecords: true,
                height: 250,
                rowNum: 20,
                pager: "#jqGridPager",
                caption: "Manipulating Array Data"
            });

   		var mydata = [
			{invdate:"2007-10-01",rma:"0",state:"some data",travelerid:"0","so":"115157"},
			{invdate:"2007-10-02",rma:"1",state:"some data",travelerid:"1","so":"115150"},
		];
		for(var i=0;i<=mydata.length;i++){
			jQuery("#jqGrid").jqGrid('addRowData',i+1,mydata[i]);
		}
	}

	render(){
		return (
			<div className='container'>
				<h4>RMA Search Result</h4>
				<hr/>
	    		<table id="jqGrid"></table>
    			<div id="jqGridPager"></div>
			</div>
		)
	}
}


