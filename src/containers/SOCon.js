import { connect } from 'react-redux';
import { Sales_order_info } from '../components';
import * as actions from '../actions/actions';


const mapStateToProps = ( state ) =>{

	let props = [];
	for(let x in state.sales_order_info){
		props.push([x, state.sales_order_info[x]]);
	}

	return {
		props: props,
		isSOInfoHidden: state.viewControl.isSOInfoHidden,
		isSummaryView: state.viewControl.isSummaryView

	}
};

const mapDispatchToProps = (dispatch) =>{
	return {
		toggleSOInfoView: ()=>{
			dispatch(actions.isSOInfoHidden());
		},
		setSalesOrderNumber: (input)=>{
			dispatch(actions.setSalesOrderNumber(input))
		},
		setProductName:(input)=>{
			dispatch(actions.setProductName(input))
		},
		setCustomerNumber:(input)=>{
			dispatch(actions.setCustomerNumber(input))
		},
		setAPTPNNumber:(input)=>{
			dispatch(actions.setAPTPNNumber(input))
		}

	}
}

const SOCon = connect (
	mapStateToProps,
	mapDispatchToProps
)(Sales_order_info);

export default SOCon;