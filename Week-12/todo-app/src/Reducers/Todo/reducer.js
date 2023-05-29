import { DELETE, MARK_DONE, UPDATE } from '../../Constants/todoConstants';

export const todoReducer = (todos, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case UPDATE:
      return [...payload];
    case DELETE:
      return todos.filter(t => t.id !== payload);
    case MARK_DONE:
      return [...todos.filter(t => t.id !== payload.id), payload];
    default:
      throw new Error('Unknown action :' + type);
  }
};
