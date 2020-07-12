//reducers

export default (state = { todos: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'Create_todo':
      return {
        todos: [...state.todos, payload], //action object
      };
    case 'Delete_todo':
      return {
        todos: state.todos.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
