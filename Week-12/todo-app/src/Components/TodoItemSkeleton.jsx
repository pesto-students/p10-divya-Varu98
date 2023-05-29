import { Skeleton, SkeletonText, Flex } from '@chakra-ui/react';
import React from 'react';

const TodoItemSkeleton = () => {
  return (
    <Flex gap={'1rem'} w={'40rem'}>
      <Skeleton width={'5rem'} />
      <SkeletonText w={'100%'} />
      <Skeleton width={'5rem'} />
      <Skeleton width={'5rem'} />
    </Flex>
  );
};

export default TodoItemSkeleton;
