import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const sidebar = (props) => (
  <div className="sidebar">
    <DropdownButton bsStyle={"profile"} title={"profile"} key={0} id={`dropdown-basic-${0}`}>
      <LinkContainer to="/wod"><MenuItem eventKey="1">Action</MenuItem></LinkContainer>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  </div>
);

export default sidebar;