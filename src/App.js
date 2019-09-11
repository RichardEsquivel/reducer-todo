//importing the useReducer hook
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducer.js';

function App() {
	//Destructuring the state and dispatch function from invocation of useReducer, dispatch functions much like setState as a function to change state. 
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log('state', state);
	return (
		<div className="App">

		</div>
	)
}

export default App;
