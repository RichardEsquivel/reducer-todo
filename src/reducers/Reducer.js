//Organize initalState into an object that contains an array of objects so can access with keys. This will allow us to add multiple todo objects with an array. The reducer function will able to modify this larger object as needed
export const initialState = {
	todoList: [
		{
			item: 'Organize Your Life!',
			completed: false,
			id: 1528817077286

		}
	],

};
//Perform action that is needed on state and will return updated value of state, action is the object passed in by dispatch in App.js. //return updated value for state by utilizing spread operator return a new object and place existing state into this new object with this immutable method. Update todoList, Date.now()will generate number of milliseconds that have occured since Jan 1st, 1970. 

export function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			const addATodo = {
				item: action.payload,
				completed: false,
				id: Date.now()
			};
			return {
				...state, todoList: [...state.todoList, addATodo]
			};
		default:
			return state;
	}

}
