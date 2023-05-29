import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <HStack h={'8vh'} p={'4'} shadow={'lg'} justifyContent={'space-between'}>
      <HStack>
        <Text fontSize={'3xl'} fontWeight={'semibold'} color={'purple.400'}>
          Taskify.io
        </Text>
        <Text fontSize={'3xl'}>🖋</Text>
      </HStack>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
