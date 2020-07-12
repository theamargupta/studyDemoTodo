//=> oauth reducer
const authInitalState = {
  user: [],
};
export default (state = authInitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add_user':
      return { user: [...state.user, payload] };
    default:
      return state;
  }
};
