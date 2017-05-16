import React from 'react';
import {Link} from 'react-router';
import AdminTableCon from '../../containers/Admin/AdminTableCon';


class AdminPage extends React.Component{
	render() {
		return (
			<div className='container'>
				<h4><Link to='/traveler'>admin page</Link></h4>
				<AdminTableCon/>
			</div>
		)
	}
};


export default AdminPage;