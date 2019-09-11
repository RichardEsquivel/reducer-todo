//importing the useReducer hook
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

function App() {
	//Destructuring the state and dispatch function from invocation of useReducer, dispatch functions much like setState as a function to change state. 
	const [state, dispatch] = useReducer(reducer, initialState);

	//We will utilize dispatch function and have a type of ADD_TODO without our reducer function within the switch that will take the data or payload of newTodo and execute an action upon it
	const addATodo = item => {
		dispatch({ type: "ADD_TODO", payload: item });
	};

	return (
		<div className="App">
			<TodoList todoList={state.todoList} />
			<TodoForm addATodo={addATodo} />
		</div>
	)
}

export default App;
