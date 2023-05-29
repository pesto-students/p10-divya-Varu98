import { DELETE, UPDATE } from '../../Constants/todoConstants';

export const updateTodos = (payload, dispatch) => {
  dispatch({ type: UPDATE, payload });
};

export const deleteTodos = (payload, dispatch) => {
    dispatch({ type: DELETE, payload });
  };
  