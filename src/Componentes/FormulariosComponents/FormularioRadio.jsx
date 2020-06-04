import React, { useState }from 'react';

function FormularioRadio() {

 	const [option,setOption] = useState('Female');

	const onChangeValue = (event) =>{
		setOption(event.target.value);
	}

	return (
		<>
			{option}
			<form>
				<div onChange={onChangeValue}>
					<input type="radio" value="Male" checked={option === "Male"}  name="gender" /> Male
					<input type="radio" value="Female" checked={option === "Female"}  name="gender" /> Female
					<input type="radio" value="Other" checked={option === "Other"}  name="gender" /> Other
				</div>
			</form>
		</>
	);
}

export default FormularioRadio;
