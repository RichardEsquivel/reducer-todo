// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

//modified TodoList to utilize props and out of a class based style. We have made todList very dumb as it will receive all its props from the todoList array. Also mapping over todoList array showing task key in a div and giving it a key from id key, adding onClick event to defined function of toggleTodo
const TodoList = ({ todoArrays, toggleTodo }) => {
	return (
		<div>
			{todoArrays.map(todo => (
				<div key={todo.id}
					onClick={() => toggleTodo(todo.id)}
					//this will utilize a ternary and onClick will toggle a classname with styling to indicate completed
					className={todo.completed ? "completed" : ""}>
					{todo.item}
				</div>
			))}
		</div>
	);
};


export default TodoList;