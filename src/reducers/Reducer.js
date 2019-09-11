//Organize initalState into an object that contains an array of objects so can access with keys. This will allow us to add multiple todo objects with an array. The reducer function will able to modify this larger object as needed
export const initialState = {
	todoList: [
		{
			task: 'Organize Garage',
			completed: false,
			id: 1528817077286

		}
	],

};
//Perform action that is needed on state and will return updated value of state
export function reducer(state, action) {
	switch (action.type) {
		default:
			return state;
	}
}