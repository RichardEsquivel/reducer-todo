//importing the useReducer hook
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer.js';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

function App() {
	//Destructuring the state and dispatch function from invocation of useReducer, dispatch functions much like setState as a function to change state. 
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log('This is your state', state);
	return (
		<div className="App">
			<TodoList todoList={state.todoList} />
			<TodoForm />
		</div>
	)
}

export default App;
