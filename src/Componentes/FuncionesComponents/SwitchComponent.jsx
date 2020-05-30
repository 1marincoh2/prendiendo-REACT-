import React from 'react';

const SwitchComponent = () => {

	const ejemplo = (dia) => {
		let day = '';
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
		}

		return day;
	}

	function ejemplo2(dia) {
		let day = '';
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
		}

		return day;
	}

	return <div>
		Dia de la semana "{ejemplo(1)}"
		<br/>
		Dia de la semana "{ejemplo2(2)}"
	</div>
};

export default SwitchComponent
