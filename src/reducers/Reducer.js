//Organize initalState into an object that contains an array of objects so can access with keys. This will allow us to add multiple todo objects with an array. The reducer function will able to modify this larger object as needed
export const initialState = {
	todoArrays: [
		{
			item: 'Organize Your Life!',
			completed: false,
			id: 1528817077286

		}
	],

};
//Perform action that is needed on state and will return updated value of state, action is the object passed in by dispatch in App.js. //return updated value for state by utilizing spread operator return a new object and place existing state into this new object with this immutable method. Update todoList, Date.now()will generate number of milliseconds that have occured since Jan 1st, 1970. Added reducer actions for Toggle Todo and clear completed 

export function reducer(state, action) {
	console.log('thing I do', action);
	switch (action.type) {
		case "ADD_TODO":
			const addATodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state, todoArrays: [...state.todoArrays, addATodo]
			};
		case "TOGGLE_TODO":
			return {
				//map over state.todoList check if id of todo is ==== action.payload and utilize spread operator to modify value of todo and return opposite value of completed
				...state, todoArrays: state.todoArrays.map(todo => {
					if (todo.id === action.payload) {
						return {
							...todo, completed: !todo.completed
						}
					} else {
						return todo;
					}
				})
			};
		//Adding case for CLEAR_SCHEDULE dispatch utilze filter state.todoArrays to filter out the opposite of completed and display only those
		case "CLEAR_SCHEDULE":
			return {
				...state, todoArrays: state.todoArrays.filter(todo => {
					return !todo.completed;
				})
			};
		default:
			return state;
	}

}
