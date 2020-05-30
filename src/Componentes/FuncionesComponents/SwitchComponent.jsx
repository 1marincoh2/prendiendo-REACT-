import React from 'react';


const SwitchComponent = () => {

	const ejemplo = (dia) => {
	
		let day = '';
		// eslint-disable-next-line default-case
		switch (dia) {
			case 0:
				day = "Sunday";
				break;
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";
				break;
			case 3:
				day = "Wednesday";
				break;
			case 4:
				day = "Thursday";
				break;
			case 5:
				day = "Friday";
				break;
			case  6:
				day = "Saturday";
				break;
			default: 
			    day = "no existe";
		}

		return day;
	}

	function ejemplo2(dia) {
		let day = '';
		// eslint-disable-next-line default-case
		switch (dia) {
			case 0:
				day = "Sunday";
				break;
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";
				break;
			case 3:
				day = "Wednesday";
				break;
			case 4:
				day = "Thursday";
				break;
			case 5:
				day = "Friday";
				break;
			case  6:
				day = "Saturday";
				break;
			default: 
			    day = "busca otro dia"
		}

		return day;
		
	}

	return( <div>
		Dia de la semana "{ejemplo(1)}"
		<br/>
		Dia de la semana "{ejemplo2(2)}"
		<br/>
		Dia de la semana "{ejemplo(6)}"
		<br/>
		Dia de la semana "{ejemplo2(0)}"
	</div>
	)
};

export default SwitchComponent
