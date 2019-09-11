//The state of TodoForm is not needed by other parts of the application at this time so will have TodoForm manage it's own state and import useState
import React, { useState } from 'react';

//Destructing a function addATodo that TodoForm will expect as a prop 
const TodoForm = ({ addATodo, clearSchedule }) => {
	//set intial state of item to empty string
	const [item, setItem] = useState("");
	//handleChange will change contents of item to the value typed in with e.target.value being the value passed in
	const handleChange = e => setItem(e.target.value);
	const handleSubmit = e => {
		e.preventDefault();
		//give addATodo the value of of the input item as the argument and clear setItem upon submission to clear out text
		addATodo(item);
		setItem("");
	}
	//This prevents default submit action of ClearMySchedule button
	const handleClearing = e => {
		e.preventDefault();
		clearSchedule();
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text"
				name="item" placeholder="Type your todo!"
				value={item}
				onChange={handleChange} />
			<button type="submit">Add A Todo
			</button>
			<button onClick={handleClearing}>Clear My Schedule!
			</button>
		</form>
	);
};

export default TodoForm;