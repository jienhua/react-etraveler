import React from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';
import {Link} from 'react-router';

const style= ()=>{
	return {
		border:'solid',
		marginTop:'100px',
		backgroundColor: '#eee',
		padding: '20px',
		width: '500px'
	}
}

export class LogInPage extends React.Component{

	render(){
		return (
			<div className='container' style={style()}>
				<Form horizontal>
				    <FormGroup >
				      <Col componentClass={ControlLabel} sm={2}>
				        ID
				      </Col>
				      <Col sm={10}>
				        <FormControl type="text" placeholder="ID" />
				      </Col>
				    </FormGroup>

				    <FormGroup controlId="formHorizontalPassword">
				      <Col componentClass={ControlLabel} sm={2}>
				        Password
				      </Col>
				      <Col sm={10}>
				        <FormControl type="password" placeholder="Password" />
				      </Col>
				    </FormGroup>

				    <FormGroup>
				      <Col smOffset={2} sm={10}>
				        <Link to={'/search'}>
					        <Button type="button" >
					          Sign in
					        </Button>
				        </Link>
				      </Col>
				    </FormGroup>
				</Form>
			</div>
		)
	}
}

