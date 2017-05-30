import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const Navigation = (props) => {
	return (
		<div>
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						APT
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight> 
						<LinkContainer to='/search'>
							<NavItem>Search</NavItem>
						</LinkContainer>
						<LinkContainer to='/traveler'>
							<NavItem>Traveler</NavItem>
						</LinkContainer>
						<LinkContainer to='/admin'>
							<NavItem>Admin</NavItem>
						</LinkContainer>
						<LinkContainer to='/login'>
							<NavItem>Log-In</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{props.children}
		</div>
	)
}
