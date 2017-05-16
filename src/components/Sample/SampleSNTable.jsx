import React from 'react';

export class SampleSNTable extends React.Component {
	
	componentDidMount(){

		let colModel =[
			{name:'travelerid',index:'travelerid', width:200,sorttype:"float"},
	   		{name:'sn',index:'sn', width:200, sorttype:"int"},
	   		{name:'invdate',index:'invdate', width:200, sorttype:"date"},
	   		{name:'state',index:'state', width:200},
	   		{name:'so',index:'so', width:200,sorttype:"float"},				
   		];

		$("#jqGrid").jqGrid({
				styleUI : 'Bootstrap',
                datatype: "local",
                colNames:['Traveler ID','Serial Number', 'Date', 'State','SO'],
                colModel: colModel,
				viewrecords: true,
                height: 250,
                rowNum: 20,
                pager: "#jqGridPager",
                caption: "Manipulating Array Data"
            });

   		var mydata = [
			{invdate:"2007-10-01",sn:"D1646B03816",state:"some data",travelerid:"0","so":"115157"},
			{invdate:"2007-10-02",sn:"D1646B03810",state:"some data",travelerid:"1","so":"115150"},
			{invdate:"2007-09-01",sn:"D1646B03811",state:"some data",travelerid:"2","so":"115151"},
			{invdate:"2007-10-04",sn:"D1646B03812",state:"some data",travelerid:"3","so":"115152"},
			{invdate:"2007-10-05",sn:"D1646B03813",state:"some data",travelerid:"4","so":"115153"},
			{invdate:"2007-09-06",sn:"D1646B03814",state:"some data",travelerid:"5","so":"115154"},
			{invdate:"2007-10-04",sn:"D1646B03815",state:"some data",travelerid:"6","so":"115155"},
			{invdate:"2007-10-03",sn:"D1646B03817",state:"some data",travelerid:"7","so":"115156"},
			{invdate:"2007-09-01",sn:"D1646B03818",state:"some data",travelerid:"8","so":"115158"}
		];
		for(var i=0;i<=mydata.length;i++){
			jQuery("#jqGrid").jqGrid('addRowData',i+1,mydata[i]);
		}
	}

	render(){
		return(
			<div className='container'>
				<h4>Serial Number Search Result</h4>
				<hr/>
	    		<table id="jqGrid"></table>
    			<div id="jqGridPager"></div>
			</div>
		)
	}
}

