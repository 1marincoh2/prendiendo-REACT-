import React from 'react';
import { useNavigation } from 'the-react-router';

const Navbar = () => {
	const navigation = useNavigation();
	return (
		<ul>
			<li onClick={() => navigation.navigate('/')}>Home</li>
			<li onClick={() => navigation.navigate('/about')}>About</li>
		</ul>
	);
};
export default Navbar
