import React, { useState } from 'react';

function FormularioPassword() {

    const [contraseña, setContraseña] = useState('');

	const handleboton = (evt) => {
		evt.preventDefault();
		alert(` ${contraseña} contraseña incorreta`)
	}

	return (
		<>
			{contraseña}
			<form onSubmit={handleboton}>
				<label>
					ingresa la contraseña:
					<input
						type="Password"
						value={contraseña}
						onChange={e => setContraseña(e.target.value)}
					/>
				</label>
				<button onclick={handleboton}>ingresar</button>
			</form>
		</>
	);
}


export default FormularioPassword
