import React from 'react';

export class AdminTable extends React.Component{

	componentDidMount(){
		const {colModel} = this.props;
		$("#jqGrid").jqGrid({
                url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
                mtype: "GET",
				styleUI : 'Bootstrap',
                datatype: "jsonp",
                colModel: colModel,
				viewrecords: true,
                height: 250,
                rowNum: 20,
                pager: "#jqGridPager"
            });	
	}

	render(){
		return(
			<div>
	    		<table id="jqGrid"></table>
    			<div id="jqGridPager"></div>
			</div>
		)
	}
};

// export default AdminTable;