import React, { useState } from 'react';

function Formulario() {

	const [name, setName] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting Name ${name}`)
	}

	return (
		<>
			{name}
			<form onSubmit={handleSubmit}>
				<label>
					Frirst Name:
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</label>
				<input type="submit" value="Submit"/>
			</form>
		</>
	);
}

export default Formulario
