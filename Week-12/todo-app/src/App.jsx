import React from 'react';
import { VStack } from '@chakra-ui/react';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <VStack pt={'8'} margin={'auto'} h={'92vh'} maxW={'80vw'}>
      <Todo />
    </VStack>
  );
}

export default App;
