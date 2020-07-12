import { createStore, applyMiddleware } from 'redux';
import { v4 as uuid } from 'uuid';
import { composeWithDevTools } from 'redux-devtools-extension';
//reducers

const todoReducer = (state = { todos: [] }, action) => {
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

//action Genrator
const CreateTodo = (payload) => ({
  type: 'Create_todo',
  payload,
});

const DeleteTodo = (payload) => ({
  type: 'Delete_todo',
  payload,
});

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware()));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(CreateTodo({ content: 'i love coffe', id: uuid() }));
const one = store.dispatch(CreateTodo({ content: 'i love wine', id: uuid() }));

console.log(one.payload.id);
store.dispatch(DeleteTodo(one.payload.id));
console.log(store.getState());
