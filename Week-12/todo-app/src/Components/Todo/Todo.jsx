import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Skeleton,
  SkeletonCircle,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../../Reducers/Todo/reducer';
import { initialTodos } from '../../Reducers/Todo/initialTodos';
import TodoItem from './TodoItem';
import { UPDATE } from '../../Constants/todoConstants';
import axios from 'axios';
import { fetch20TodoUrl } from '../../Constants/todoUrls';
import { updateTodos } from '../../Reducers/Todo/actions';
import TodoItemSkeleton from '../TodoItemSkeleton';
import SkeletonWrapper from '../SkeletonWrapper';
import AddTodo from './AddTodo';

const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTodos = async () => {
      const { data, status } = await axios.get(fetch20TodoUrl);
      console.log(data, status);
      if (data) setTemp(data.todos);
      if (status === 200) dispatch({ type: UPDATE, payload: data.todos });
      setLoading(false);
    };
    fetchTodos();
  }, []);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return loading ? (
    <SkeletonWrapper />
  ) : (
    <Box>
      <HStack justifyContent={'space-between'}>
        <Text
          fontSize={'3xl'}
          fontWeight={'bold'}
          color={'green.300'}
          align={'center'}
        >
          List of Todos
        </Text>
        <Button
          onClick={() => {
            dispatch({ type: UPDATE, payload: temp });
          }}
        >
          Refresh Todos
        </Button>
      </HStack>
      <AddTodo dispatch={dispatch} />
      {todos.map(item => {
        const { todo, id } = item;
        return <TodoItem dispatch={dispatch} id={id} todo={todo} item={item} />;
      })}
    </Box>
  );
};

export default Todo;
