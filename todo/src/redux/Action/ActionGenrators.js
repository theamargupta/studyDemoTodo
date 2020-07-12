//action Genrator
export const CreateTodo = (payload) => ({
  type: 'Create_todo',
  payload,
});

export const DeleteTodo = (payload) => ({
  type: 'Delete_todo',
  payload,
});
