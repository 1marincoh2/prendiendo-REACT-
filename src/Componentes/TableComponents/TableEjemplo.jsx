import React, { useState, withStyles } from 'react';
const TableEjemplo = (props) => {
	const classes = styles;
	return (

		<div>
			<style>{`
    table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
} `}</style>
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
	)
}

export default TableEjemplo
