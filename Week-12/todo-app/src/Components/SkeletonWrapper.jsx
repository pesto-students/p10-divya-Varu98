import { VStack } from '@chakra-ui/react';
import React from 'react';
import TodoItemSkeleton from './TodoItemSkeleton';

const SkeletonWrapper = () => {
  return (
    <VStack gap={'2rem'}>
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
      <TodoItemSkeleton />
    </VStack>
  );
};

export default SkeletonWrapper;
