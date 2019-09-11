//The state of TodoForm is not needed by other parts of the application at this time so will have TodoForm manage it's own state and import useState
import React, { useState } from 'react';

const TodoForm = (props) => {
	//set intial state of item to empty string
	const [item, setItem] = useState("");
	//handleChange will change contents of item to the value typed in with e.target.value being the value passed in
	const handleChange = e => setItem(e.target.value);

	return (
		<form>
			<input type="text"
				name="item" placeholder="Type your todo!"
				value={item}
				onChange={handleChange} />
			<button type="submit">Add A Todo
			</button>
		</form>
	);
};

export default TodoForm;