const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export function todos(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      data: [...state.data, { id: Math.random(), text: action.payload.text }]
    };
  }

  return state;
}
