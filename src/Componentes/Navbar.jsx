import React from 'react';

import { Nav } from 'react-bootstrap';

const Navbar = () => {
	
	return (
		
	<div>

<Nav activeKey="/">
  <Nav.Item>
    <Nav.Link href="/">home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">about</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/axios">axiospage</Nav.Link>
  </Nav.Item>
 </Nav>	
		
			
		
	</div>
	
	)
};
export default Navbar
