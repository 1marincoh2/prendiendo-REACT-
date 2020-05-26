import React from 'react';
import { useNavigation } from 'the-react-router';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
	const navigation = useNavigation();
	return (
		
	<div>
	<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>	
		<ul>
			<li onClick={() => navigation.navigate('/')}>Home</li>
			<li onClick={() => navigation.navigate('/about')}>About</li>
		</ul>
	</div>
	
	)
};
export default Navbar
