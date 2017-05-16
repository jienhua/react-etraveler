import { connect } from 'react-redux';
import { AdminTable } from '../../components/AdminPage/AdminTable';

const mapStateToProps = (state) =>{

	return {
		colModel: state.adminPage.colModel
	};
}

const AdminTableCon = connect (
	mapStateToProps,
)(AdminTable);

export default AdminTableCon;