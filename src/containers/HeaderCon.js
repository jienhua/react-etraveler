import { connect } from 'react-redux';
import { Header } from '../components';
import * as actions from '../actions/actions';


const mapStateToProps = ( state ) =>{

	let props = [];
	for(let x in state.traveler){
		props.push([x, state.traveler[x]]);
	}

	return {
		props: props,
		isHeaderHidden: state.viewControl.isHeaderHidden,
		isSummaryView: state.viewControl.isSummaryView
	}
};

const mapDispatchToProps = (dispatch) =>{
	return {
		toggleHeaderView: ()=>{
			dispatch(actions.isHeaderHidden());
		}
	}
}

const HeaderCon = connect (
	mapStateToProps,
	mapDispatchToProps
)(Header);

export default HeaderCon;