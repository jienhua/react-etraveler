import React from 'react';
import {Link} from 'react-router';
// import { connect } from 'react-redux';
// import styles from './App.css';
// import './common.css';
// import {} from '../components';
import HeaderCon from '../containers/HeaderCon';
import SOCon from '../containers/SOCon';
import TableCon from '../containers/TableCon';
// import Header from '../components/Header.jsx';


const App = (props) => {
    return(
    <div className="container">
        <Link to='/admin' >eTravler - App</Link>
        <hr/>
        <HeaderCon/>
        <SOCon/>
        <TableCon/>
        {props.children}
    </div>
    )
}

export default App;
