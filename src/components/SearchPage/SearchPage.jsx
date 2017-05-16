import React from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';
import {Link} from 'react-router';



export class SearchPage extends React.Component{
	render() {
		return (
			<div className='container'>
				<h4> Search page </h4>
				<hr/>
				<Form horizontal>
			    <FormGroup >
			      <Col componentClass={ControlLabel} sm={2}>
			        Traveler ID
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" defaultValue='0' />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Link to={'/traveler'}>
			        	<Button type="button">
			          		Search
			        	</Button>
			        </Link>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col componentClass={ControlLabel} sm={2}>
			        SO #
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" placeholder="SO #" defaultValue='D1646B03816'/>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Link to={'/traveler'}>
			        	<Button type="button">
			          		Search
			        	</Button>
			        </Link>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col componentClass={ControlLabel} sm={2}>
			        RMA 
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" placeholder="RMA" />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Link to={'/rmatable'}>
			        	<Button type="button">
			          		Search
			        	</Button>
			        </Link>
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col componentClass={ControlLabel} sm={2}>
			        Serial Number 
			      </Col>
			      <Col sm={10}>
			        <FormControl type="text" placeholder="Serial Number" />
			      </Col>
			    </FormGroup>

			    <FormGroup>
			      <Col smOffset={2} sm={10}>
			        <Link to={'/sntable'}>
			        	<Button type="button">
			          		Search
			        	</Button>
			        </Link>
			      </Col>
			    </FormGroup>
			  </Form>
			</div>
		)
	}
};