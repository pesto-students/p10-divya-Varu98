import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react';
import { ADD } from '../../Constants/todoConstants';
import { initialTodos } from '../../Reducers/Todo/initialTodos';
import { todoReducer } from '../../Reducers/Todo/reducer';

const AddTodo = ({ dispatch }) => {
  const toast = useToast();
  const [todo, setTodo] = useState({
    id: Math.floor(50 * Math.random()) + 10,
    userId: Math.floor(50 * Math.random()) + 10,
    todo: '',
    completed: false,
  });
  const addTodoHandler = e => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setTodo(prev => ({ ...prev, [name]: value }));
    console.log(todo);
  };
  const handleClick = () => {
    if (todo.todo.length > 0) {
      dispatch({ type: ADD, payload: todo });
      toast({ title: 'todo added', status: 'success' });
    } else toast({ title: 'Cannot add blank todo', status: 'error' });
  };

  return (
    <HStack my={'2rem'} maxW={'25rem'} marginInline={'auto'}>
      <Input onChange={addTodoHandler} name="todo" />
      <Button
        onClick={handleClick}
        backgroundColor={'green.300'}
        color={'white'}
        minW={'3rem'}
      >
        Add
      </Button>
    </HStack>
  );
};

export default AddTodo;
