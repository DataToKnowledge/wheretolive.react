import React from 'react';
import { Link } from 'react-router';
import packageJSON from '../../package.json';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object,
  },
  render() {
    const version = packageJSON.version;

    return (
        <div>
          <header>
            <Navbar inverse>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">React Boilerplate {version}</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/poweredby">Powered by</Link></li>
                   <li><Link to="/search">Search</Link></li>
                   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">Link Right</NavItem>
                  <NavItem eventKey={2} href="#">Link Right</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <section>
            {this.props.children || 'Welcome to React Starterify'}
          </section>
        </div>
    );
  },
});
