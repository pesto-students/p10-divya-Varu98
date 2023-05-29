import { CheckIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Checkbox, HStack } from '@chakra-ui/react';
import React, { useReducer, useState } from 'react';
import { DELETE, MARK_DONE } from '../../Constants/todoConstants';
import { deleteTodos } from '../../Reducers/Todo/actions';
import { initialTodos } from '../../Reducers/Todo/initialTodos';
import { todoReducer } from '../../Reducers/Todo/reducer';

const TodoItem = ({
  todo = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facere.',
  id,
  item,
  dispatch,
}) => {
  const [confirmDeleteToggle, setconfirmDeleteToggle] = useState(false);
  
  return (
    <HStack mt={8} justifyContent={'space-between'} gap={12}>
      <Checkbox
        as={item.completed ? 'del' : ''}
        isChecked={item.completed}
        onChange={e => {
          const { checked } = e.target;
          if (checked) console.log(checked);
          dispatch({
            type: MARK_DONE,
            payload: { ...item, completed: !item.completed },
          });
        }}
        size={'lg'}
        fontSize={8}
        gap={2}
      >
        {todo}
      </Checkbox>
      {confirmDeleteToggle ? (
        <HStack>
          <Box
            px={2}
            py={1}
            rounded={'md'}
            color={'white'}
            backgroundColor={'green.300'}
            cursor={'pointer'}
            _hover={{ backgroundColor: 'green.500' }}
            onClick={() => {
              dispatch({ type: DELETE, payload: id });
              setconfirmDeleteToggle(!confirmDeleteToggle);
            }}
          >
            <CheckIcon />
          </Box>
          <Box
            px={2}
            py={1}
            rounded={'md'}
            color={'white'}
            backgroundColor={'red.300'}
            cursor={'pointer'}
            _hover={{ backgroundColor: 'red.500' }}
            onClick={() => setconfirmDeleteToggle(!confirmDeleteToggle)}
          >
            <CloseIcon />
          </Box>
        </HStack>
      ) : (
        <Box
          px={2}
          py={1}
          rounded={'md'}
          color={'white'}
          backgroundColor={'red.300'}
          cursor={'pointer'}
          _hover={{ backgroundColor: 'red.500' }}
          onClick={() => setconfirmDeleteToggle(!confirmDeleteToggle)}
        >
          <DeleteIcon />
        </Box>
      )}
    </HStack>
  );
};

export default TodoItem;
