export const initialState = {
	basket: [],
};

const reducer = (State, action) => {
	switch (action.type) {
		case " ADD_TO_BASKET":
			return {
				...State,
				basket: [...State.basket, action.item],
			};
		default:
			return State;
	}
};
export default reducer;
