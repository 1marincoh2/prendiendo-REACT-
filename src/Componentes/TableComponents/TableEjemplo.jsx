import React, { useState, withStyles } from 'react';

const styles = (theme) => ({
	table: {
		border: '1px solid black;',
		borderCollapse: 'collapse',
	},
	th: {
		border: '1px solid black;',
		borderCollapse: 'collapse',
	},
	td: {
		border: '1px solid black;',
		borderCollapse: 'collapse',
	},
});

function TableEjemplo(props) {
	const {classes} = props;
	return (
		<div>
			<table className={classes.table}>
				<thead>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Eve</td>
					<td>Jackson</td>
					<td>94</td>
				</tr>
				<tr>
					<td>John</td>
					<td>Doe</td>
					<td>80</td>
				</tr>
				</tbody>
			</table>

		</div>
	);
}

export default withStyles(styles)(TableEjemplo);
