// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

//modified TodoList to utilize props and out of a class based style. We have made todList very dumb as it will receive all its props from the todoList array. Also mapping over todoList array showing task key in a div and giving it a key from id key
const TodoList = ({ todoList }) => {
	return (
		<div>

			{todoList.map(todo => <div key={todo.id}>{todo.task}</div>)}
		</div>
	);
}


export default TodoList;